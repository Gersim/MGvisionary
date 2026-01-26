import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Search size={28} />,
        title: "Discovery",
        description: "Understanding goals, requirements, and user needs."
    },
    {
        icon: <PenTool size={28} />,
        title: "Design",
        description: "UI/UX wireframing, architecture planning, and prototyping."
    },
    {
        icon: <Code2 size={28} />,
        title: "Development",
        description: "Writing clean, tested, scalable code with modern best practices."
    },
    {
        icon: <Rocket size={28} />,
        title: "Delivery",
        description: "Launch, deployment, support, and continuous improvement."
    }
];

const Process = () => {
    return (
        <section id="process" className="py-20 bg-background relative overflow-hidden">
            {/* Background connector line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-12 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4"
                    >
                        How I Work
                    </motion.h2>
                    <p className="text-gray-600">Structured process. Predictable results.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            {/* Step Number Badge */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shadow-md">
                                {index + 1}
                            </div>

                            <div className="mb-4 p-3 bg-primary/5 rounded-full w-14 h-14 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mx-auto md:mx-0">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-2 text-center md:text-left">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
