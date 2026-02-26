'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { GhostButton } from '../components/ui/Button';
import { ArrowRightIcon, Code, Database, Globe, Server, Wrench, GraduationCap } from 'lucide-react';

const services = [
    {
        icon: <Code className="w-8 h-8" />,
        title: 'Custom Software Development',
        description: 'Design and development of tailored business systems and enterprise applications.',
        features: ['Business Systems', 'Enterprise Applications', 'Web Portals', 'API Development & Integration']
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: 'Business Management Systems',
        description: 'Industry-specific systems that automate and optimize operations.',
        features: ['Inventory Management Systems', 'Church Management Systems', 'Restaurant Management Systems', 'Custom Industry Solutions']
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: 'Web Application Development',
        description: 'Secure and scalable web platforms for businesses and institutions.',
        features: ['Corporate Websites', 'E-commerce Platforms', 'Secure Web Applications']
    },
    {
        icon: <Server className="w-8 h-8" />,
        title: 'ICT Infrastructure & Integration',
        description: 'Reliable ICT solutions supporting digital transformation.',
        features: ['Network Setup', 'Server Configuration', 'System Integration']
    },
    {
        icon: <Wrench className="w-8 h-8" />,
        title: 'System Maintenance & Support',
        description: 'Continuous system optimization and technical support.',
        features: ['Updates & Optimization', 'Security Enhancements', 'Technical Support']
    },
    {
        icon: <GraduationCap className="w-8 h-8" />,
        title: 'ICT Consultancy and Training',
        description: 'Expert guidance and capacity building to help your team adopt and leverage technology effectively.',
        features: ['ICT Strategy & Planning', 'Technology Assessment', 'Staff Training & Workshops', 'Change Management']
    }
];

export default function ServicesPage() {
    return (
        <main className="pt-32">
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <SectionTitle
                        title="Our Services"
                        heading="Comprehensive Software & ICT Solutions"
                        description="We deliver structured, scalable, and secure technology solutions tailored to business growth."
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
                                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5 text-blue-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, j) => (
                                        <li key={j} className="text-sm flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
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
                                Get in Touch <ArrowRightIcon size={18} />
                            </GhostButton>
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
