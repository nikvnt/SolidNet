import React, { useState } from 'react';
import {
    Button,
    TextInput,
    PasswordInput,
    Stack,
    FormGroup,
    Heading
} from '@carbon/react';
import useSubmitData from 'frontend/src/hooks/useSubmitData';
import 'frontend/src/global.scss';
import 'frontend/src/pages/signup/signup.scss';
import Sidebar from 'frontend/src/components/sidebar/sidebar';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const { submitData, loading, error } = useSubmitData();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== passwordConfirm) {
            alert('As senhas não coincidem');
            return;
        }

        const userData = {
            email,
            password,
        };

        try {
            const port = process.env.REACT_APP_BACKEND_PORT;
            const result = await submitData(`http://localhost:${port}/api/signup`, userData);
            console.log('Usuário registrado com sucesso:', result);
            setTimeout(() => {
                window.location.href = '/login';
            }, 200);
            alert('Usuário registrado com sucesso.');
            setEmail('');
            setPassword('');
            setPasswordConfirm('');
        } catch (error) {
            alert('Ocorreu um erro ao registrar. Tente novamente.', error);
        }
    };

    return (
        <div>
            <Sidebar />
            <div className="signup-container">
                <FormGroup className='form-group'>
                    <Heading style={{ marginBottom: '20px' }}>Registre-se</Heading>
                    <Stack gap={6}>
                        <TextInput
                            id="userEmail"
                            labelText="Insira seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <PasswordInput
                            id="userPassword"
                            labelText="Insira a senha desejada"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <PasswordInput
                            id="userPasswordConfirm"
                            labelText="Confirme a senha desejada"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                        <Button onClick={handleSubmit} disabled={loading}>
                            {loading ? 'Registrando...' : 'Registrar-se'}
                        </Button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </Stack>
                </FormGroup>
            </div>
        </div>
    );
}

export default Signup;
