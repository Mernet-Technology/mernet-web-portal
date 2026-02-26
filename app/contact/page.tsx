'use client';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { PrimaryButton } from '../components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactInfo = [
    {
        icon: <Mail className="w-5 h-5" />,
        title: 'Email',
        value: 'mernettechnology@gmail.com',
        link: 'mailto:mernettechnology@gmail.com'
    },
    {
        icon: <Phone className="w-5 h-5" />,
        title: 'Phone',
        value: '+255 767 956 613',
        link: 'tel:+255767956613'
    },
    {
        icon: <Phone className="w-5 h-5" />,
        title: 'Phone',
        value: '+255 743 463 710',
        link: 'tel:+255743463710'
    },
    {
        icon: <MapPin className="w-5 h-5" />,
        title: 'Location',
        value: ' Dar-es-Salaam, Tanzania',
        link: '#'
    }
];

export default function ContactPage() {
    return (
        <main className="pt-32">
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <SectionTitle
                        title="Contact Us"
                        heading="Let's Start a Conversation"
                        description="Have a project in mind? Reach out and let's discuss how we can build the right solution for your business."
                    />

                    <div className="grid md:grid-cols-2 gap-12 mt-16">
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                        >
                            <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>Get in touch</h3>
                            
                            <div className="space-y-6 mb-8">
                                {contactInfo.map((info, i) => (
                                    <a
                                        key={i}
                                        href={info.link}
                                        className="flex items-center gap-4 p-4 rounded-xl transition-all"
                                        style={{ 
                                            backgroundColor: 'var(--bg-card)',
                                            border: '1px solid var(--border-color)'
                                        }}
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{info.title}</p>
                                            <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{info.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Office Hours</h4>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                    Monday – Friday: 8:00 AM – 5:00 PM (EAT)
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                        >
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                            style={{ 
                                                backgroundColor: 'var(--bg-card)',
                                                border: '1px solid var(--border-color)',
                                                color: 'var(--text-primary)'
                                            }}
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                            style={{ 
                                                backgroundColor: 'var(--bg-card)',
                                                border: '1px solid var(--border-color)',
                                                color: 'var(--text-primary)'
                                            }}
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                        style={{ 
                                            backgroundColor: 'var(--bg-card)',
                                            border: '1px solid var(--border-color)',
                                            color: 'var(--text-primary)'
                                        }}
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Subject</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                        style={{ 
                                            backgroundColor: 'var(--bg-card)',
                                            border: '1px solid var(--border-color)',
                                            color: 'var(--text-primary)'
                                        }}
                                        placeholder="Project inquiry"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Message</label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                                        style={{ 
                                            backgroundColor: 'var(--bg-card)',
                                            border: '1px solid var(--border-color)',
                                            color: 'var(--text-primary)'
                                        }}
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <PrimaryButton className="w-full py-3">
                                    Send Message <Send className="w-4 h-4" />
                                </PrimaryButton>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
