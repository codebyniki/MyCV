
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

interface CookieContextType {
    preferences: CookiePreferences;
    showBanner: boolean;
    updatePreferences: (newPreferences: Partial<CookiePreferences>) => void;
    acceptAll: () => void;
    rejectAll: () => void;
    saveCookiePreferences: () => void;
}

const defaultPreferences: CookiePreferences = {
    necessary: true, // Always true as these are essential
    analytics: false,
    marketing: false,
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        const savedPreferences = Cookies.get('cookiePreferences');
        if (savedPreferences) {
            setPreferences(JSON.parse(savedPreferences));
            setShowBanner(false);
        }
    }, []);

    const updatePreferences = (newPreferences: Partial<CookiePreferences>) => {
        setPreferences(prev => ({ ...prev, ...newPreferences }));
    };

    const acceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
        };
        setPreferences(allAccepted);
        Cookies.set('cookiePreferences', JSON.stringify(allAccepted), { expires: 365 });
        setShowBanner(false);
    };

    const rejectAll = () => {
        const allRejected = {
            necessary: true, // Always true
            analytics: false,
            marketing: false,
        };
        setPreferences(allRejected);
        Cookies.set('cookiePreferences', JSON.stringify(allRejected), { expires: 365 });
        setShowBanner(false);
    };

    const saveCookiePreferences = () => {
        Cookies.set('cookiePreferences', JSON.stringify(preferences), { expires: 365 });
        setShowBanner(false);
    };

    return (
        <CookieContext.Provider
            value={{
                preferences,
                showBanner,
                updatePreferences,
                acceptAll,
                rejectAll,
                saveCookiePreferences,
            }}
        >
            {children}
        </CookieContext.Provider>
    );
};

export const useCookies = () => {
    const context = useContext(CookieContext);
    if (context === undefined) {
        throw new Error('useCookies must be used within a CookieProvider');
    }
    return context;
};
