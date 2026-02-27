'use client';
import { useState, useEffect } from 'react';
import { ArrowRightIcon, PlayIcon, ZapIcon, CheckIcon, GalleryHorizontalEnd, ChevronLeft, ChevronRight } from 'lucide-react';
import { PrimaryButton, GhostButton } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
    { src: '/images/slideshowphoto2.jpeg', alt: 'Software and ICT solutions' },
    { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop', alt: 'Business systems and analytics' },
    { src: '/images/slideshowphoto1.png', alt: 'Team collaboration' },
    { src: '/images/ict-consultancy.jpg', alt: 'Digital transformation' },
];

const SLIDE_INTERVAL_MS = 5000;

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, SLIDE_INTERVAL_MS);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const goPrev = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    const goNext = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const trustedUserImages = [
        '/images/trusteduser-1.jpg',
        '/images/trusteduser-2.jpg',
        '/images/trusteduser-3.jpg'
    ];

    const trustedLogosText = [
        'Custom Software Development',
        'Web Applications',
        'ICT Infrastructure Installation',
        'Website Development',
        'IT Consultancy & Training'
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
                                    Custom Systems • Web Applications • ICT Infrastructure
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
                                Transforming Businesses Through Smart Software & <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
                                    Intelligent ICT Solutions
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
                               We develop custom business systems, web applications,
                                and integrated ICT solutions that streamline operations, strengthen security, and drive sustainable growth.
                            </motion.p>

                            <motion.div className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
                            >
                                <a href="/contact" className="w-full sm:w-auto">
                                    <PrimaryButton className="max-sm:w-full py-3 px-7">
                                        Start Your Project
                                        <ArrowRightIcon className="size-4" />
                                    </PrimaryButton>
                                </a>

                                <GhostButton className="max-sm:w-full max-sm:justify-center py-3 px-5">
                                    <GalleryHorizontalEnd className="size-4" />
                                    View Our Work
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
                                    <ZapIcon className="size-4 text-blue-500" />
                                    <div>
                                        <div style={{ color: 'var(--text-primary)' }}>Strategy-Driven Development</div>
                                        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                            Built around your business goals.
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden sm:block h-6 w-px" style={{ backgroundColor: 'var(--border-color)' }} />

                                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <CheckIcon className="size-4 text-blue-400" />
                                    <div>
                                        <div style={{ color: 'var(--text-primary)' }}>End-to-End System Delivery</div>
                                        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                            From analysis to deployment and support.
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
                                className="rounded-3xl overflow-hidden shadow-2xl relative"
                                style={{ border: '1px solid var(--border-color)' }}
                            >
                                <div className="relative aspect-[16/10]" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.div
                                            key={currentSlide}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0"
                                        >
                                            <img
                                                src={heroSlides[currentSlide].src}
                                                alt={heroSlides[currentSlide].alt}
                                                className="w-full h-full object-cover object-center"
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    <div 
                                        className="absolute left-4 top-4 px-3 py-1 rounded-full backdrop-blur-sm text-xs text-white z-10"
                                        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                                    >
                                        Custom Systems • Web • ICT
                                    </div>

                                    <button
                                        type="button"
                                        onClick={goPrev}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity"
                                        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                                        aria-label="Previous slide"
                                    >
                                        <ChevronLeft className="size-5" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={goNext}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity"
                                        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                                        aria-label="Next slide"
                                    >
                                        <ChevronRight className="size-5" />
                                    </button>

                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                                        {heroSlides.map((_, i) => (
                                            <button
                                                key={i}
                                                type="button"
                                                onClick={() => goToSlide(i)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                    i === currentSlide ? 'w-6 bg-white' : 'bg-white/50 hover:bg-white/80'
                                                }`}
                                                aria-label={`Go to slide ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            <div className="mt-4 flex gap-3 items-center justify-start">
                                {heroSlides.map((slide, i) => (
                                    <motion.button
                                        key={i}
                                        type="button"
                                        onClick={() => goToSlide(i)}
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                                        className={`w-14 h-10 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                                            i === currentSlide
                                                ? 'ring-2 ring-blue-500 scale-110 opacity-100'
                                                : 'border border-[var(--border-color)] opacity-70 hover:opacity-100 hover:scale-105'
                                        }`}
                                        aria-label={`View slide ${i + 1}`}
                                    >
                                        <img
                                            src={slide.src}
                                            alt={slide.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.button>
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
                                    20+ Completed Projects
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
