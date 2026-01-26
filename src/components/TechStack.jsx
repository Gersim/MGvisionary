import React from 'react';
import { motion } from 'framer-motion';

const stack = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"] },
    { category: "Backend", items: ["Django", "Node.js", "Python", "REST APIs", "GraphQL"] },
    { category: "Database & DevOps", items: ["PostgreSQL", "Docker", "Git", "AWS", "CI/CD"] },
];

const TechStack = () => {
    return (
        <section className="py-20 bg-background border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">Technologies I Work With</h2>
                    <p className="text-gray-500">Choosing the right tool for the job.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stack.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                        >
                            <h3 className="text-lg font-bold text-primary mb-4 border-b border-gray-100 pb-2">{group.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item, idx) => (
                                    <span key={idx} className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-100 hover:border-accent hover:text-accent transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
