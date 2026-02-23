'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { GhostButton } from '../components/ui/Button';
import { ArrowRightIcon, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'E-Commerce Platform',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800',
        description: 'A modern e-commerce solution with seamless checkout experience and inventory management.',
        tags: ['Next.js', 'Stripe', 'PostgreSQL']
    },
    {
        title: 'Brand Identity System',
        category: 'Branding',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800',
        description: 'Complete brand overhaul for a tech startup including logo, guidelines, and marketing materials.',
        tags: ['Logo Design', 'Brand Strategy', 'Visual Identity']
    },
    {
        title: 'Fitness Tracking App',
        category: 'Mobile App',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800',
        description: 'Cross-platform mobile app for fitness tracking with social features and personalized plans.',
        tags: ['React Native', 'Firebase', 'HealthKit']
    },
    {
        title: 'SaaS Dashboard',
        category: 'Web Application',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
        description: 'Analytics dashboard for a B2B SaaS platform with real-time data visualization.',
        tags: ['React', 'D3.js', 'Node.js']
    },
    {
        title: 'Restaurant Website',
        category: 'Web Design',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
        description: 'Modern website with online ordering system and reservation management.',
        tags: ['WordPress', 'WooCommerce', 'Custom Theme']
    },
    {
        title: 'Corporate Rebrand',
        category: 'Branding',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800',
        description: 'Strategic rebrand for a financial services company entering new markets.',
        tags: ['Brand Strategy', 'Marketing', 'Design System']
    }
];

export default function ProjectsPage() {
    return (
        <main className="pt-32">
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <SectionTitle
                        title="Our Work"
                        heading="Projects we're proud of"
                        description="Explore our portfolio of successful projects across various industries and technologies."
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
                                    <span className="text-xs text-violet-500 uppercase tracking-wide">
                                        {project.category}
                                    </span>
                                    <h3 className="text-lg font-semibold mt-2 mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, j) => (
                                            <span
                                                key={j}
                                                className="text-xs px-2 py-1 rounded-full"
                                                style={{ 
                                                    backgroundColor: 'var(--accent-bg)',
                                                    color: 'var(--text-muted)'
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
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
                        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>Have a project in mind?</p>
                        <a href="/contact">
                            <GhostButton className="px-8 py-3">
                                Let's talk <ArrowRightIcon size={18} />
                            </GhostButton>
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
