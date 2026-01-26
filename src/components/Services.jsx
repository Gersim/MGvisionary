import React from 'react';
import { motion } from 'framer-motion';
import { AppWindow, Layout, Server, Zap } from 'lucide-react';

const services = [
    {
        icon: <AppWindow size={32} />,
        title: "Web Application Development",
        description: "Custom web apps using React, Django, REST APIs, built for performance and scalability from day one."
    },
    {
        icon: <Layout size={32} />,
        title: "Frontend Architecture",
        description: "Clean UI, reusable components, responsive design, and modern UX patterns that delight users."
    },
    {
        icon: <Server size={32} />,
        title: "Backend & Integration",
        description: "Robust APIs, secure authentication, database design, and seamless third-party integrations."
    },
    {
        icon: <Zap size={32} />,
        title: "Consulting & Optimization",
        description: "Improve existing systems, enhance performance, audit security, and refactor code structure."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">My Services</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Delivering value through technology. Not just what I do, but what you gain.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="mb-6 p-4 bg-primary/5 rounded-lg inline-block text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
