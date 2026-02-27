'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { GhostButton } from '../components/ui/Button';
import { ArrowRightIcon, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Inventory Management System',
        category: 'Business System',
        image: '/images/services-inventory-management.png',
        description: 'Real-time stock tracking, supplier management, and sales reporting system.'
    },
    {
        title: 'Church Management System',
        category: 'Web Application',
        image: '/images/services-church-management-system.jpg',
        description: 'Membership management, contribution tracking, attendance, and reporting platform.'
    },
    {
        title: 'Restaurant Management System',
        category: 'POS & Operations',
        image: '/images/services-restaurant-system.jpg',
        description: 'Order management, billing, kitchen coordination, and analytics system.'
    },
    {
        title: 'Custom Client Portal',
        category: 'Enterprise System',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
        description: 'Secure web portal designed for streamlined communication and internal management.'
    }
];

export default function ProjectsPage() {
    return (
        <main className="pt-32">
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <SectionTitle
                        title="Our Projects"
                        heading="Business Systems We've Built"
                        description="A portfolio of reliable systems developed to improve efficiency and operational control."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                                className="rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                                style={{ 
                                    backgroundColor: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)'
                                }}
                            >
                                <div className="aspect-video overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white">
                                            <ExternalLink className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <span className="text-xs text-blue-500 uppercase tracking-wide">
                                        {project.category}
                                    </span>
                                    <h3 className="text-lg font-semibold mt-2 mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                        {project.description}
                                    </p>
                                </div>
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
                        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>Have a system in mind?</p>
                        <a href="/contact">
                            <GhostButton className="px-8 py-3">
                                Let's Talk <ArrowRightIcon size={18} />
                            </GhostButton>
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
