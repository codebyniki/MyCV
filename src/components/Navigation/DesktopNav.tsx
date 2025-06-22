import React from 'react';
import { NavLink } from 'react-router-dom';
import type {NavigationItem} from './types';
import { useScrollToTop } from '../../hooks/useScrollToTop';

interface DesktopNavProps {
    items: NavigationItem[];
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ items }) => {
    const scrollToTop = useScrollToTop();

    return (
        <div className="hidden md:flex items-center space-x-10">
            {items.map((item) => (
                <div key={item.path} className="group relative">
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                            `relative text-base font-medium transition-all duration-300 ${
                                isActive
                                    ? 'text-primary-600 dark:text-primary-400'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-300'
                            }`
                        }
                        onClick={scrollToTop}
                    >
                        {({ isActive }) => (
                            <>
                                {item.label}
                                <span
                                    className={`absolute left-0 -bottom-1 h-0.5 bg-primary-500 dark:bg-primary-400 transition-all duration-300 ${
                                        isActive
                                            ? 'w-full opacity-100'
                                            : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                                    }`}
                                />
                            </>
                        )}
                    </NavLink>
                </div>
            ))}
        </div>
    );
};