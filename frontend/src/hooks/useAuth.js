import { useState } from 'react';

const useAuth = () => {
    const [session, setSession] = useState(() => {
        const savedSession = localStorage.getItem('supabaseSession');
        return savedSession ? JSON.parse(savedSession) : null;
    });

    const login = async (email, password) => {
        try {
            const port = process.env.REACT_APP_BACKEND_PORT;
            const response = await fetch(`${port}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
            }

            localStorage.setItem('supabaseSession', JSON.stringify(data.session));
            setSession(data.session);

            return data.session;
        } catch (error) {
            console.error("Erro no login:", error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('supabaseSession');
        setSession(null);
    };

    return { session, login, logout };
}

export default useAuth;