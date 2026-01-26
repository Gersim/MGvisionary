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
                schema={{
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": "MGVisionary",
                    "url": "https://mgvisionary.com",
                    "image": "https://mgvisionary.com/og-image.jpg",
                    "description": "Premium Web Development and System Architecture Agency based in Albania. We build University Systems, SaaS, and Individual Projects using React, Django, Python, and PHP.",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Tirana",
                        "addressCountry": "AL"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "41.3275",
                        "longitude": "19.8187"
                    },
                    "sameAs": [
                        "https://github.com/mgvisionary",
                        "https://linkedin.com/in/mgvisionary",
                        "https://twitter.com/mgvisionary"
                    ],
                    "areaServed": [
                        { "@type": "City", "name": "Tirana" },
                        { "@type": "City", "name": "Durres" },
                        { "@type": "City", "name": "Vlore" },
                        { "@type": "City", "name": "Shkoder" },
                        { "@type": "City", "name": "Pristina" },
                        { "@type": "Country", "name": "Albania" },
                        { "@type": "Country", "name": "Kosovo" },
                        { "@type": "Country", "name": "Germany" },
                        { "@type": "Country", "name": "Italy" },
                        { "@type": "Country", "name": "Switzerland" },
                        { "@type": "Country", "name": "France" },
                        { "@type": "Country", "name": "United Kingdom" },
                        { "@type": "continent", "name": "Europe" }
                    ],
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Software & Web Development Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Web Development",
                                    "description": "Custom websites and web applications using React and Tailwind."
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "University Management Systems",
                                    "description": "Scalable ERP solutions for educational institutions."
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Python & Django Development",
                                    "description": "Backend architecture and API development."
                                }
                            },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Platform Development" } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nearshore Outsourcing Albania" } }
                        ]
                    },
                    "knowsAbout": ["Python", "Django", "React", "Symfony", "PHP", "Software Architecture", "AI Integration", "Full Stack Development"]
                }}
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
