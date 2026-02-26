import React from 'react';

export const PrimaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
    <button
        className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-medium bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 transition-all duration-300 ease-out ${className}`}
        {...props}
    >
        {children}
    </button>
);

export const GhostButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, style, ...props }) => (
    <button
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm active:scale-95 bg-[var(--glass-bg)] border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-105 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 ease-out ${className}`}
        style={style}
        {...props}
    >
        {children}
    </button>
);
