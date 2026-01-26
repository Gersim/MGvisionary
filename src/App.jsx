import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Router>
        </GoogleReCaptchaProvider>
    );
}

export default App;
