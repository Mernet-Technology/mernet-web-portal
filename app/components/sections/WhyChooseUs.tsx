'use client';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';

const valuesData = [
    {
        title: 'Proven System Development',
        desc: 'Successfully built and deployed business management systems across multiple industries.'
    },
    {
        title: 'Secure & Scalable Architecture',
        desc: 'Systems engineered for performance, security, and long-term growth.'
    },
    {
        title: 'Ongoing Support & Partnership',
        desc: 'Continuous maintenance, updates, and technical support beyond deployment.'
    }
];

export default function WhyChooseUs() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    return (
        <section 
            id="why-choose-us" 
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}
        >
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle
                    title="Why Choose Us"
                    heading="Why Businesses Choose Mernet"
                    description="We combine technical expertise with real-world business understanding to deliver reliable digital solutions."
                />

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {valuesData.map((value, i) => (
                        <motion.div
                            key={i}
                            ref={(el) => {
                                refs.current[i] = el;
                            }}
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                            onAnimationComplete={() => {
                                const card = refs.current[i];
                                if (card) {
                                    card.classList.add("transition", "duration-500", "hover:scale-102");
                                }
                            }}
                            className="relative p-6 rounded-xl backdrop-blur"
                            style={{ 
                                backgroundColor: 'var(--bg-card)',
                                border: '1px solid var(--border-color)'
                            }}
                        >
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                                <Check className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                {value.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
