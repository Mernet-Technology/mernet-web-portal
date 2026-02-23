'use client';
import { ReactNode, useRef } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    hoverEffect?: boolean;
}

export default function Card({ children, className = '', delay = 0, hoverEffect = true }: CardProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    return (
        <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay }}
            onAnimationComplete={() => {
                if (hoverEffect && ref.current) {
                    ref.current.classList.add("transition", "duration-300", "hover:-translate-y-1");
                }
            }}
            className={`rounded-2xl p-6 ${className}`}
            style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)'
            }}
        >
            {children}
        </motion.div>
    );
}
