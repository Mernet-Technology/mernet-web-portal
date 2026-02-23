import React from 'react';

export const PrimaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
    <button className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-medium bg-gradient-to-br from-indigo-500 to-indigo-600 text-white hover:opacity-90 active:scale-95 transition-all ${className}`} {...props} >
        {children}
    </button>
);

export const GhostButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, style, ...props }) => (
    <button 
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm active:scale-95 transition ${className}`} 
        style={{ 
            backgroundColor: 'var(--glass-bg)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            ...style
        }}
        {...props} 
    >
        {children}
    </button>
);
