import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Full Stack Web App",
        description: "A comprehensive e-commerce solution with real-time inventory, secure payments (Stripe), and admin dashboard.",
        tech: ["React", "Node.js", "MongoDB", "Redux"],
        image: "bg-blue-900" // Placeholder class for background color
    },
    {
        title: "SaaS Dashboard Interface",
        category: "Frontend Architecture",
        description: "Modern analytics dashboard with data visualization, dark mode support, and highly responsive components.",
        tech: ["React", "TypeScript", "Tailwind", "Recharts"],
        image: "bg-slate-800"
    },
    {
        title: "Healthcare Portal",
        category: "Web Application",
        description: "HIPAA-compliant patient portal for appointment scheduling and record management.",
        tech: ["Next.js", "PostgreSQL", "Prisma", "Auth0"],
        image: "bg-emerald-900"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-accent font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Selected Works</h2>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                        View All Projects
                    </motion.button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className={`h-48 ${project.image} relative overflow-hidden`}>
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <button className="p-2 bg-white rounded-full text-primary hover:text-accent transition-colors" title="View Code">
                                        <Github size={20} />
                                    </button>
                                    <button className="p-2 bg-white rounded-full text-primary hover:text-accent transition-colors" title="Live Demo">
                                        <ExternalLink size={20} />
                                    </button>
                                </div>
                                {/* Placeholder Text */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 text-white font-bold text-2xl">
                                    {project.title}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{project.category}</div>
                                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
