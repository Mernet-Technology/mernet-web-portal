'use client';
import { motion } from 'framer-motion';

interface SectionTitleProps {
    title?: string;
    heading?: string;
    description?: string;
}

export default function SectionTitle({ title, heading, description }: SectionTitleProps) {
    return (
        <div className="text-center mb-16">
            {title && (
                <motion.p
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                    className="text-sm font-medium text-blue-500 uppercase tracking-wide mb-3"
                >
                    {title}
                </motion.p>
            )}
            {heading && (
                <motion.h2 
                    className="text-2xl md:text-4xl font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                >
                    {heading}
                </motion.h2>
            )}
            {description && (
                <motion.p 
                    className='max-w-md mx-auto text-sm my-3'
                    style={{ color: 'var(--text-muted)' }}
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}
