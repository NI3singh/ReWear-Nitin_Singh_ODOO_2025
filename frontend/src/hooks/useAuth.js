import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [user, setUser] = useState(() =>
        JSON.parse(localStorage.getItem('rewear_user') || 'null')
    );
    console.log('user :>> ', user);

    useEffect(() => {
        if (user) localStorage.setItem('rewear_user', JSON.stringify(user));
    }, [user]);

    const logout = () => {
        setUser(null);
        localStorage.removeItem('rewear_user');
    };

    return { user, setUser, logout };
};
