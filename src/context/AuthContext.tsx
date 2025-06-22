import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'RKZ2025!';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const authToken = Cookies.get('auth_token');
        if (authToken) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = async (username: string, password: string): Promise<boolean> => {
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            Cookies.set('auth_token', 'admin_token', { expires: 1 }); // 1 day expiration
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        Cookies.remove('auth_token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};