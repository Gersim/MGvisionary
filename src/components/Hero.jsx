import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center bg-background relative overflow-hidden pt-16">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 transform origin-top-right z-0"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-left"
                >
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
                        Full-Stack Developer & UI/UX Designer
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight mb-6">
                        Building Modern Web Experiences That <span className="text-accent relative inline-block">
                            Convert
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span> Ideas Into Reality
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                        I design and develop high-performance web applications using modern technologies, focused on scalability, clean architecture, and business impact.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="projects" smooth={true} duration={500} className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer">
                            View My Work <ArrowRight size={20} />
                        </Link>
                        <Link to="contact" smooth={true} duration={500} className="px-8 py-3 bg-white text-primary border border-gray-200 font-medium rounded-lg hover:border-accent hover:text-accent transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer">
                            Let's Build Something
                        </Link>
                    </div>
                </motion.div>

                {/* Right Content - Code/UI Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="relative hidden md:block"
                >
                    {/* Mockup Container */}
                    <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 hover:shadow-cyan-500/20">
                        {/* Fake Window Header */}
                        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        {/* Content */}
                        <div className="p-6 bg-slate-50 font-mono text-sm overflow-hidden">
                            <div className="text-blue-600">const <span className="text-purple-600">MGVisionary</span> = <span className="text-gray-900">{'{'}</span></div>
                            <div className="pl-4 text-gray-700">vision: <span className="text-green-600">'Innovative'</span>,</div>
                            <div className="pl-4 text-gray-700">code: <span className="text-green-600">'Clean & Scalable'</span>,</div>
                            <div className="pl-4 text-gray-700">design: <span className="text-green-600">'Premium UI/UX'</span>,</div>
                            <div className="pl-4 text-gray-700">impact: <span className="text-orange-500">true</span>,</div>
                            <div className="pl-4 text-gray-700">build: <span className="text-blue-600">async</span> () <span className="text-blue-600">=&gt;</span> <span className="text-gray-900">{'{'}</span></div>
                            <div className="pl-8 text-gray-500">// Delivering excellence</div>
                            <div className="pl-8 text-purple-600">return <span className="text-green-600">Success</span>;</div>
                            <div className="pl-4 text-gray-900">{'}'}</div>
                            <div className="text-gray-900">{'}'}</div>

                            <div className="mt-4 p-4 bg-white rounded border border-dashed border-gray-300">
                                <div className="animate-pulse flex space-x-4">
                                    <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                                    <div className="flex-1 space-y-6 py-1">
                                        <div className="h-2 bg-slate-200 rounded"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-slate-200 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                        <div className="bg-green-100 p-2 rounded-full text-green-600">
                            <Code size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Experience</p>
                            <p className="font-bold text-gray-800">Professional</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
