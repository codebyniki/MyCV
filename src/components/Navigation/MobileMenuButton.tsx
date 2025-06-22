import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="md:hidden text-gray-600 dark:text-secondary-300 hover:text-gray-900 dark:hover:text-primary-300 focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    );
};