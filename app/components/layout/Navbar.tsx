'use client';
import { MenuIcon, XIcon, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeProvider';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <motion.nav className='fixed top-5 left-0 right-0 z-50 px-4'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
        >
            <div 
                className='max-w-6xl mx-auto flex items-center justify-between backdrop-blur-md rounded-2xl p-3 transition-colors duration-300'
                style={{ 
                    backgroundColor: 'var(--navbar-bg)',
                    borderWidth: '1px',
                    borderColor: 'var(--navbar-border)'
                }}
            >
                <a href='/'>
                    <img 
                        src='/logo.svg' 
                        alt="logo" 
                        className="h-8 transition-all duration-300"
                        style={{ filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none' }}
                    />
                </a>

                <div className='hidden md:flex items-center gap-8 text-sm font-medium' style={{ color: 'var(--text-secondary)' }}>
                    {navLinks.map((link) => (
                        <a 
                            href={link.href} 
                            key={link.name} 
                            className="hover:opacity-80 transition"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className='hidden md:flex items-center gap-3'>
                    <button
                        onClick={toggleTheme}
                        className='p-2.5 rounded-full transition-all duration-300 hover:scale-105'
                        style={{ 
                            backgroundColor: 'var(--accent-bg)',
                            border: '1px solid var(--border-color)'
                        }}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? (
                            <Moon className='size-5' style={{ color: 'var(--text-primary)' }} />
                        ) : (
                            <Sun className='size-5' style={{ color: 'var(--text-primary)' }} />
                        )}
                    </button>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className='md:hidden' style={{ color: 'var(--text-primary)' }}>
                    <MenuIcon className='size-6' />
                </button>
            </div>

            <div 
                className={`flex flex-col items-center justify-center gap-6 text-lg font-medium fixed inset-0 backdrop-blur-md z-50 transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                style={{ backgroundColor: 'var(--navbar-bg)' }}
            >
                {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        onClick={() => setIsOpen(false)}
                        style={{ color: 'var(--text-primary)' }}
                    >
                        {link.name}
                    </a>
                ))}

                <button
                    onClick={toggleTheme}
                    className='p-3 rounded-full transition-all duration-300'
                    style={{ 
                        backgroundColor: 'var(--accent-bg)',
                        border: '1px solid var(--border-color)'
                    }}
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? (
                        <Moon className='size-5' style={{ color: 'var(--text-primary)' }} />
                    ) : (
                        <Sun className='size-5' style={{ color: 'var(--text-primary)' }} />
                    )}
                </button>

                <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-md p-2 ring-gray-300 active:ring-2 transition-colors"
                    style={{ 
                        backgroundColor: 'var(--accent-bg)',
                        color: 'var(--text-primary)'
                    }}
                >
                    <XIcon />
                </button>
            </div>
        </motion.nav>
    );
}
