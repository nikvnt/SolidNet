import React, { useState } from 'react';
import { Button, TextInput, PasswordInput, Stack, FormGroup, Heading } from '@carbon/react';
import useAuth from '../../hooks/useAuth';
import 'frontend/src/global.scss';
import 'frontend/src/pages/login/login.scss';
import Sidebar from 'frontend/src/components/sidebar/sidebar';

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Login bem-sucedido!");
      setTimeout(() => {
        window.location.href = '/home';
    }, 200);
    } catch (error) {
      if (error.message === "Email not confirmed") {
        setError("E-mail não confirmado. Por favor, verifique sua caixa de entrada.");
      } else {
        setError("Falha no login. Verifique as credenciais.");
      }
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="login-container">
        <FormGroup className='form-group'>
          <Heading style={{ marginBottom: '20px' }}>Entrar</Heading>
          <Stack gap={6}>
            <TextInput id="userEmail" labelText="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <PasswordInput id="userPassword" labelText="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleLogin}>Entrar</Button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </Stack>
        </FormGroup>
      </div>
    </div>
  );
}

export default Login;