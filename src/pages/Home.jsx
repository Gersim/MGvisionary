import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Home"
                description="MGVisionary provides premium web development, SaaS, and university system solutions. Specializing in React, Django, Python, and scalable architecture for businesses in Albania, Italy, Germany, France, and Worldwide."
                keywords="Web Development, Software Engineer, University System, Django Project, Python, PHP, Symfony, React, SaaS, Albania, Italy, Germany, France, UK, Offshore, Nearshore, Enterprise Systems"
            />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Process />
                <Projects />
                <TechStack />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
