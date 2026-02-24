'use client';
import { useRef } from 'react';
import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';

const servicesData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Discovery & Planning',
        desc: 'We understand your goals, audience and challenges to craft a clear, actionable strategy.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Design & Development',
        desc: 'High-quality design and scalable development focused on performance and usability.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Launch & Growth',
        desc: 'We launch, optimize and continuously improve to drive measurable business growth.'
    }
];

export default function ServicesPreview() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    return (
        <section id="services" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle
                    title="Services"
                    heading="Everything your brand needs to grow"
                    description="From strategy to execution, we help businesses build strong digital products and meaningful customer experiences."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {servicesData.map((service, i) => (
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
                            className="rounded-2xl p-6"
                            style={{ 
                                backgroundColor: 'var(--bg-card)',
                                border: '1px solid var(--border-color)'
                            }}
                        >
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
