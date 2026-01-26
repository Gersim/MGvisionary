import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-heading font-bold text-white tracking-tight mb-4 block">
                            MG<span className="text-accent">Visionary</span>
                        </span>
                        <p className="text-slate-400 max-w-sm mb-6">
                            Helping businesses and individuals build structured, scalable, and high-performance web applications.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase()}
                                        smooth={true}
                                        className="hover:text-accent cursor-pointer transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>info@mgvisionary.com</li>
                            <li>+355 6X XX XX XXX</li>
                            <li>Tirana, Albania</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} MGVisionary. All rights reserved.</p>
                    <p className="flex items-center gap-1 mt-2 md:mt-0">
                        Built with <Heart size={12} className="text-red-500 fill-red-500" /> and React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
