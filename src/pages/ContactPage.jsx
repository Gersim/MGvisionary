import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const ContactPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success', 'error', null
    const formRef = useRef();
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus(null);

        // Validation for placeholder keys
        if (import.meta.env.VITE_RECAPTCHA_SITE_KEY?.includes('YOUR_') ||
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.includes('YOUR_')) {
            alert('CONFIGURATION REQUIRED: Please update the .env file with your actual Google ReCAPTCHA and EmailJS API keys to send messages.');
            setIsLoading(false);
            return;
        }

        try {
            if (!executeRecaptcha) {
                console.warn('Execute recaptcha not yet available');
                return;
            }

            // 1. Execute ReCAPTCHA to get token
            const token = await executeRecaptcha('contact_form_submit');

            // 2. Prepare EmailJS parameters
            // Note: You must update your EmailJS templates to accept 'g-recaptcha-response' if you want to verify it on server side,
            // or rely on EmailJS's native CAPTCHA integration settings in their dashboard.
            const currentForm = formRef.current;

            // Sending email using EmailJS
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                currentForm,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            currentForm.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-slate-950 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
                </div>

                <div className="max-w-3xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center text-slate-400 hover:text-accent mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 shadow-2xl"
                    >
                        <div className="text-center mb-10">
                            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                                Get in <span className="text-accent">Touch</span>
                            </h1>
                            <p className="text-slate-400">
                                Have a project in mind? Send us a message and we'll get back to you shortly.
                            </p>
                        </div>

                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                                    <CheckCircle size={32} className="text-green-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-slate-300">Thank you for contacting us. We will get back to you as soon as possible.</p>
                                <button
                                    onClick={() => setStatus(null)}
                                    className="mt-6 text-accent hover:text-white transition-colors text-sm font-medium"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="user_name"
                                            required
                                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-slate-500 transition-all outline-none"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="user_email"
                                            required
                                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-slate-500 transition-all outline-none"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-slate-500 transition-all outline-none resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3 text-red-400">
                                        <AlertCircle size={20} />
                                        <span>Something went wrong. Please try again later.</span>
                                    </div>
                                )}

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-4 bg-accent text-white font-bold rounded-xl text-lg hover:bg-sky-400 transition-colors shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>

                                <p className="text-xs text-slate-500 text-center mt-4">
                                    This site is protected by reCAPTCHA and the Google
                                    <a href="https://policies.google.com/privacy" className="text-slate-400 hover:text-white mx-1">Privacy Policy</a> and
                                    <a href="https://policies.google.com/terms" className="text-slate-400 hover:text-white mx-1">Terms of Service</a> apply.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
