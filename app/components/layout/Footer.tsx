'use client';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeProvider';

const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
            { name: "Services", url: "/services" },
            { name: "Projects", url: "/projects" },
            { name: "Contact", url: "/contact" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];

export default function Footer() {
    const { theme } = useTheme();
    
    return (
        <motion.footer 
            className="pt-10 transition-colors duration-300"
            style={{ 
                backgroundColor: 'var(--bg-secondary)',
                borderTop: '1px solid var(--border-color)',
                color: 'var(--text-secondary)'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div 
                    className="flex flex-col md:flex-row items-start justify-between gap-10 py-10"
                    style={{ borderBottom: '1px solid var(--border-color)' }}
                >
                    <div>
                        <img 
                            src='/logo.svg' 
                            alt="logo" 
                            className="h-8 transition-all duration-300"
                            style={{ filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none' }}
                        />
                        <p className="max-w-[410px] mt-6 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            We are a digital agency focused on strategy, design and development—helping brands build meaningful digital experiences and grow sustainably.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-base md:mb-5 mb-2" style={{ color: 'var(--text-primary)' }}>
                                    {section.title}
                                </h3>
                                <ul className="text-sm space-y-1">
                                    {section.links.map(
                                        (link: { name: string; url: string }, i) => (
                                            <li key={i}>
                                                <a
                                                    href={link.url}
                                                    className="hover:opacity-80 transition"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="py-4 text-center text-sm" style={{ color: 'var(--text-muted)' }}>
                    © {new Date().getFullYear()} {' '}
                    <a href="#" target='_blank'>
                        Mernet Technologies
                    </a>
                </p>
            </div>
        </motion.footer>
    );
}
