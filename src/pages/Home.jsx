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

const Home = () => {
    return (
        <div className="bg-white min-h-screen">
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
