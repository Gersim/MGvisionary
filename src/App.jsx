import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
}

export default App;
