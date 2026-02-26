'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { GhostButton } from '../components/ui/Button';
import { ArrowRightIcon, Users, Target, Award, Shield } from 'lucide-react';

const values = [
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Client-Focused',
        description: 'We prioritize our clients\' operational needs and long-term success.'
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: 'Innovation',
        description: 'We continuously adopt modern technologies to build future-ready systems.'
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: 'Excellence',
        description: 'We deliver high-quality solutions that exceed expectations.'
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: 'Integrity',
        description: 'We operate with professionalism, transparency, and accountability.'
    }
];

export default function AboutPage() {
    return (
        <main className="pt-32">
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <SectionTitle
                        title="About Us"
                        heading="We build reliable software systems that power business operations"
                        description="A team of software engineers and ICT specialists dedicated to delivering secure, scalable, and efficient digital systems."
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
                                Founded with a vision to bridge the gap between technology and business efficiency, Mernet Technologies has grown into a trusted software development and ICT solutions provider serving businesses and institutions.
                            </p>
                            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                                Our team combines technical expertise with industry insight to deliver practical, high-performance systems that solve real operational challenges.
                            </p>
                            <a href="/contact">
                                <GhostButton className="px-6 py-3">
                                    Work with us <ArrowRightIcon size={18} />
                                </GhostButton>
                            </a>
                        </div>
                        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
                            <img
                                src="/images/ourteam.jpg"
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
                        heading="What Drives Our Innovation"
                        description="The principles guiding our systems, partnerships, and long-term commitment to clients."
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
