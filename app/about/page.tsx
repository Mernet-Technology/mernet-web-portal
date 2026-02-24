'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { GhostButton } from '../components/ui/Button';
import { ArrowRightIcon, Users, Target, Award, Heart } from 'lucide-react';

const values = [
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Client-Focused',
        description: 'We put our clients at the center of everything we do, ensuring their success is our success.'
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: 'Results-Driven',
        description: 'Every decision we make is guided by measurable outcomes and real business impact.'
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: 'Excellence',
        description: 'We strive for excellence in every project, delivering quality that exceeds expectations.'
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: 'Passion',
        description: 'We are passionate about technology and design, bringing enthusiasm to every challenge.'
    }
];

export default function AboutPage() {
    return (
        <main className="pt-32">
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <SectionTitle
                        title="About Us"
                        heading="We build digital experiences that matter"
                        description="A team of designers, developers, and strategists dedicated to helping businesses thrive in the digital age."
                    />

                    <motion.div
                        className="grid md:grid-cols-2 gap-12 items-center mt-16"
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Our Story</h3>
                            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                                Founded with a vision to bridge the gap between technology and business success, 
                                we have grown into a full-service digital agency that partners with startups 
                                and enterprises alike.
                            </p>
                            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                                Our team brings together diverse expertise in design, development, and strategy 
                                to deliver solutions that not only look great but also drive real results.
                            </p>
                            <a href="/contact">
                                <GhostButton className="px-6 py-3">
                                    Work with us <ArrowRightIcon size={18} />
                                </GhostButton>
                            </a>
                        </div>
                        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
                                alt="Our team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section 
                className="py-20 transition-colors duration-300"
                style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <SectionTitle
                        title="Our Values"
                        heading="What drives us forward"
                        description="The principles that guide our work and relationships."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, i) => (
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
                                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{value.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
