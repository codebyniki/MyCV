import React from 'react';
import { NavLink } from 'react-router-dom';
import type { NavigationItem } from './types';

interface MobileNavProps {
    items: NavigationItem[];
    isOpen: boolean;
    onItemClick: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ items, isOpen, onItemClick }) => {
    if (!isOpen) return null;

    return (
        <div className="md:hidden bg-white dark:bg-dark-950/95 dark:backdrop-blur-md dark:border-t dark:border-primary-900/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
                {items.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `block px-3 py-2 rounded-md ${
                                isActive
                                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 dark:border-l-2 dark:border-primary-500'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-secondary-300 dark:hover:bg-dark-800/50 dark:hover:text-primary-300'
                            }`
                        }
                        onClick={onItemClick}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};