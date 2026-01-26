import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                        Have an idea or a project in mind?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Let’s turn it into a powerful digital product. Whether you need a full-stack application or a high-performance website, I'm ready to help.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-accent text-white font-bold rounded-xl text-lg hover:bg-sky-400 transition-colors shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
                        >
                            <Mail size={20} />
                            Get in Touch
                        </Link>
                        <button className="px-8 py-4 bg-white/10 text-white font-medium rounded-xl text-lg hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2">
                            View My Process <ArrowRight size={20} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
