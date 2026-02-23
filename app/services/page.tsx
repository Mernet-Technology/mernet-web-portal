'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { GhostButton } from '../components/ui/Button';
import { ArrowRightIcon, Code, Palette, Megaphone, LineChart, Smartphone, Globe } from 'lucide-react';

const services = [
    {
        icon: <Palette className="w-8 h-8" />,
        title: 'UI/UX Design',
        description: 'Create stunning, user-centered designs that engage your audience and drive conversions.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: 'Web Development',
        description: 'Build fast, scalable, and secure web applications using modern technologies.',
        features: ['Frontend Development', 'Backend Systems', 'API Integration', 'Performance Optimization']
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: 'Mobile Apps',
        description: 'Develop cross-platform mobile applications that deliver seamless experiences.',
        features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization']
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: 'Branding',
        description: 'Craft memorable brand identities that resonate with your target audience.',
        features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
        icon: <Megaphone className="w-8 h-8" />,
        title: 'Digital Marketing',
        description: 'Drive growth through data-driven marketing strategies and campaigns.',
        features: ['SEO', 'Content Marketing', 'Social Media', 'PPC Advertising']
    },
    {
        icon: <LineChart className="w-8 h-8" />,
        title: 'Analytics & Strategy',
        description: 'Make informed decisions with comprehensive analytics and strategic planning.',
        features: ['Data Analysis', 'Market Research', 'Growth Strategy', 'KPI Tracking']
    }
];

export default function ServicesPage() {
    return (
        <main className="pt-32">
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <SectionTitle
                        title="Our Services"
                        heading="Everything you need to succeed online"
                        description="Comprehensive digital solutions tailored to your business goals and growth objectives."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                                className="rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
                                style={{ 
                                    backgroundColor: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)'
                                }}
                            >
                                <div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5 text-violet-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, j) => (
                                        <li key={j} className="text-sm flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center mt-16"
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5 }}
                    >
                        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>Ready to start your project?</p>
                        <a href="/contact">
                            <GhostButton className="px-8 py-3">
                                Get in touch <ArrowRightIcon size={18} />
                            </GhostButton>
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
