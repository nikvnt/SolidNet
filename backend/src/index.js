import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { supabase } from './config/supabaseClient.js';

dotenv.config();
const app = express();
const port = process.env.BACKEND_PREFERRED_PORT;

app.use(cors());
app.use(express.json());

// Teste de GET básico
app.get('/api/data', async (req, res) => {
  const { data, error } = await supabase
    .from('Teste')
    .select('*');

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
});

// Cadastro
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    if (error.message.includes('Email already registered')) {
      console.error('Erro: E-mail já está registrado:', error.message);
      return res.status(400).json({ error: 'E-mail já está registrado.' });
    }
    
    console.error('Erro ao registrar usuário:', error);
    return res.status(400).json({ error: error.message });
  }

  console.log('Usuário registrado no Supabase:', user);

  if (!user) {
    console.error('Usuário não foi criado corretamente.');
    return res.status(400).json({ error: 'Usuário não registrado corretamente.' });
  }

  const { error: insertError } = await supabase
    .from('users')
    .insert([{ email: user.email }]);

  if (insertError) {
    console.error('Erro ao inserir usuário na tabela users:', insertError);
    return res.status(400).json({ error: insertError.message });
  }

  res.status(201).json({
    message: "O registro foi feito com sucesso e os dados foram salvos na tabela users.",
    user,
  });
});

// Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  if (error) {
    const errorMessage = error.message.includes("Email not confirmed") 
      ? "Por favor, confirme seu e-mail antes de fazer login." 
      : error.message;
  
    return res.status(400).json({ error: errorMessage });
  }

  res.json({
    message: "Login bem-sucedido",
    session: data.session,
    token: data.session.access_token,
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
