'use client';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { PrimaryButton, GhostButton } from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';

const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$499',
        desc: 'Best for early-stage startups.',
        credits: 'One-time',
        features: [
            'Project discovery & planning',
            'UI/UX design',
            'Basic website development',
            '1 revision round',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Growth',
        price: '$1,499',
        desc: 'Growing teams and businesses.',
        credits: 'Monthly',
        features: [
            'Everything in Starter',
            'Advanced UI/UX design',
            'Custom development',
            'Performance optimization',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Scale',
        price: '$3,999',
        desc: 'For brands ready to scale fast.',
        credits: 'Custom',
        features: [
            'Everything in Growth',
            'Dedicated project manager',
            'Ongoing optimization',
            'Marketing & growth support',
            'Chat + Email support'
        ]
    }
];

export default function WhyChooseUs() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    return (
        <section 
            id="pricing" 
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}
        >
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle
                    title="Pricing"
                    heading="Simple, transparent pricing"
                    description="Flexible agency packages designed to fit startups, growing teams and established brands."
                />

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {plansData.map((plan, i) => (
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
                            className={`relative p-6 rounded-xl backdrop-blur ${plan.popular
                                ? 'border-2 border-blue-500 bg-blue-500/5'
                                : ''
                                }`}
                            style={!plan.popular ? { 
                                backgroundColor: 'var(--bg-card)',
                                border: '1px solid var(--border-color)'
                            } : undefined}
                        >
                            {plan.popular && (
                                <p className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-white rounded-md text-xs">
                                    Most popular
                                </p>
                            )}

                            <div className="mb-6">
                                <p style={{ color: 'var(--text-primary)' }}>{plan.name}</p>
                                <div className="flex items-end gap-3">
                                    <span className="text-3xl font-extrabold" style={{ color: 'var(--text-primary)' }}>{plan.price}</span>
                                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                                        / {plan.credits}
                                    </span>
                                </div>
                                <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
                                    {plan.desc}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feat, j) => (
                                    <li
                                        key={j}
                                        className="flex items-center gap-3 text-sm"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        <Check className="w-4 h-4 text-blue-500" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <div>
                                {plan.popular ? (
                                    <PrimaryButton className="w-full">
                                        Get started
                                    </PrimaryButton>
                                ) : (
                                    <GhostButton className="w-full justify-center">
                                        Get started
                                    </GhostButton>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
