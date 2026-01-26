import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Image/Avatar Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl bg-gray-200 overflow-hidden relative z-10 shadow-lg group">
                            {/* Logo Image */}
                            <img
                                src="/logo.png"
                                alt="MGVisionary Logo"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay effect */}
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent rounded-2xl z-0"></div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                            Vision → Design → Code → Impact
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            At <span className="font-semibold text-primary">MGVisionary</span>, I believe that great software is built at the intersection of vision, strategy, and clean code. It's not just about writing lines of code; it's about solving real business problems with elegant digital solutions.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            With a strong background in web development and system design, I provide top-tier services from Albania to clients across Europe and the globe. My approach transforms technical complexity into user-friendly experiences.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Professional Partner, Not Just a Freelancer",
                                "Clean Architecture & Scalable Code",
                                "User-Centric Design Philosophy",
                                "Business-Oriented Solutions"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-accent" size={20} />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div >
        </section >
    );
};

export default About;
