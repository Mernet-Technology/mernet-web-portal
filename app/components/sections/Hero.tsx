'use client';
import { ArrowRightIcon, PlayIcon, ZapIcon, CheckIcon } from 'lucide-react';
import { PrimaryButton, GhostButton } from '../ui/Button';
import { motion } from 'framer-motion';

export default function Hero() {
    const trustedUserImages = [
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50',
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop'
    ];

    const mainImageUrl = 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1600&auto=format&fit=crop';

    const galleryStripImages = [
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=100',
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=100',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=100',
    ];

    const trustedLogosText = [
        'Startups',
        'Scale-ups',
        'Founders',
        'Global teams',
        'Creative brands'
    ];

    return (
        <>
            <section id="home" className="relative z-10">
                <div className="max-w-6xl mx-auto px-4 min-h-screen max-md:w-screen max-md:overflow-hidden pt-32 md:pt-26 flex items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="text-left">
                            <motion.a 
                                href="#!" 
                                className="inline-flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full mb-6 justify-start"
                                style={{ backgroundColor: 'var(--accent-bg)', border: '1px solid var(--border-color)' }}
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                            >
                                <div className="flex -space-x-2">
                                    {trustedUserImages.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt={`Client ${i + 1}`}
                                            className="size-6 rounded-full border-2"
                                            style={{ borderColor: 'var(--bg-primary)' }}
                                            width={40}
                                            height={40}
                                        />
                                    ))}
                                </div>
                                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                    Trusted by brands & founders worldwide
                                </span>
                            </motion.a>

                            <motion.h1 
                                className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-xl"
                                style={{ color: 'var(--text-primary)' }}
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            >
                                Transforming Businesses through  <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500">
                                    Tailored Software & Intelligent ICT Solutions
                                </span>
                            </motion.h1>

                            <motion.p 
                                className="max-w-lg mb-8"
                                style={{ color: 'var(--text-secondary)' }}
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                            >
                                A creative digital agency helping startups and businesses grow through
                                thoughtful design, scalable development and performance-driven strategy.
                            </motion.p>

                            <motion.div className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
                            >
                                <a href="/contact" className="w-full sm:w-auto">
                                    <PrimaryButton className="max-sm:w-full py-3 px-7">
                                        Start your project
                                        <ArrowRightIcon className="size-4" />
                                    </PrimaryButton>
                                </a>

                                <GhostButton className="max-sm:w-full max-sm:justify-center py-3 px-5">
                                    <PlayIcon className="size-4" />
                                    View our work
                                </GhostButton>
                            </motion.div>

                            <motion.div 
                                className="flex sm:inline-flex overflow-hidden items-center max-sm:justify-center text-sm rounded-lg"
                                style={{ backgroundColor: 'var(--accent-bg)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            >
                                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <ZapIcon className="size-4 text-indigo-500" />
                                    <div>
                                        <div style={{ color: 'var(--text-primary)' }}>Strategy-led execution</div>
                                        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                            Focused on growth & results
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden sm:block h-6 w-px" style={{ backgroundColor: 'var(--border-color)' }} />

                                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <CheckIcon className="size-4 text-emerald-500" />
                                    <div>
                                        <div style={{ color: 'var(--text-primary)' }}>Full-service delivery</div>
                                        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                            Design, dev & marketing
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div className="mx-auto w-full max-w-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5 }}
                        >
                            <motion.div 
                                className="rounded-3xl overflow-hidden shadow-2xl"
                                style={{ border: '1px solid var(--border-color)' }}
                            >
                                <div className="relative aspect-[16/10]" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                    <img
                                        src={mainImageUrl}
                                        alt="agency-work-preview"
                                        className="w-full h-full object-cover object-center"
                                    />

                                    <div 
                                        className="absolute left-4 top-4 px-3 py-1 rounded-full backdrop-blur-sm text-xs text-white"
                                        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                                    >
                                        Branding • Web • Growth
                                    </div>

                                    <div className="absolute right-4 bottom-4">
                                        <button 
                                            className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-white/20 transition focus:outline-none text-white"
                                            style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                                        >
                                            <PlayIcon className="size-4" />
                                            <span className="text-xs">See case study</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="mt-4 flex gap-3 items-center justify-start">
                                {galleryStripImages.map((src, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                                        className="w-14 h-10 rounded-lg overflow-hidden"
                                        style={{ border: '1px solid var(--border-color)' }}
                                    >
                                        <img
                                            src={src}
                                            alt="project-thumbnail"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                ))}
                                <motion.div 
                                    className="text-sm ml-2 flex items-center gap-2"
                                    style={{ color: 'var(--text-muted)' }}
                                    initial={{ y: 60, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                                >
                                    <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300" />
                                        <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                                    </div>
                                    20+ completed projects
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <motion.section 
                className="max-md:mt-10 transition-colors duration-300"
                style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--accent-bg)' }}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="w-full overflow-hidden py-6">
                        <div className="flex gap-14 items-center justify-center animate-marquee whitespace-nowrap">
                            {trustedLogosText.concat(trustedLogosText).map((logo, i) => (
                                <span
                                    key={i}
                                    className="mx-6 text-sm md:text-base font-semibold tracking-wide transition-colors"
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    {logo}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}
