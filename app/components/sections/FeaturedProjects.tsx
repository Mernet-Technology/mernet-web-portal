'use client';
import { useRef } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { GhostButton } from '../ui/Button';
import { motion } from 'framer-motion';

const projectsData = [
    {
        title: 'Inventory Management System',
        category: 'Business System',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800',
        description: 'A centralized system for managing stock, suppliers, and sales with real-time reporting.'
    },
    {
        title: 'Church Management System',
        category: 'Web Application',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800',
        description: 'A digital platform for managing members, contributions, attendance, and financial records.'
    },
    {
        title: 'Restaurant Management System',
        category: 'POS & Business System',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800',
        description: 'A complete restaurant solution with order management, billing, and performance analytics.'
    }
];

export default function FeaturedProjects() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    return (
        <section 
            id="projects" 
            className="py-20 2xl:py-32 transition-colors duration-300"
            style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}
        >
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle
                    title="Projects"
                    heading="Featured Systems"
                    description="Explore some of the business systems we have successfully designed and implemented."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projectsData.map((project, i) => (
                        <motion.div
                            ref={(el) => {
                                refs.current[i] = el;
                            }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                            key={i}
                            onAnimationComplete={() => {
                                const card = refs.current[i];
                                if (card) {
                                    card.classList.add("transition", "duration-300", "hover:-translate-y-1");
                                }
                            }}
                            className="rounded-2xl overflow-hidden group"
                            style={{ 
                                backgroundColor: 'var(--bg-card)',
                                border: '1px solid var(--border-color)'
                            }}
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-xs text-blue-500 uppercase tracking-wide">
                                    {project.category}
                                </span>
                                <h3 className="text-lg font-semibold mt-2 mb-2" style={{ color: 'var(--text-primary)' }}>
                                    {project.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.4 }}
                >
                    <a href="/projects">
                        <GhostButton className="px-8 py-3">
                            View All Projects <ArrowRightIcon size={18} />
                        </GhostButton>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
