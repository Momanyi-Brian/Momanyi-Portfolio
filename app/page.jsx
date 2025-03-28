'use client'

import React, { useState, useEffect } from 'react'

import { workItems, benefits, services, technologies, processes, faqs } from './lib/portfolioData';

import Hero from './components/Hero'
import Work from './components/Work'
import Benefits from './components/Benefits';
import Approach from './components/Approach';
import About from './components/About';
import Faq from './components/Faq';
import Footer from './components/Footer';

import Preload from './components/Preload';

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (replace with your actual loading logic)
        const timeoutId = setTimeout(() => {
        setLoading(false);
        }, 1000); // Adjust the time as needed

        return () => clearTimeout(timeoutId); // Cleanup timeout
    }, []);

    if (loading) {
        return <Preload />; // Render Preload if loading is true
    }

    return (
        <>
            {/* Hero Section */}
            < Hero />

            {/* Work Section */}
            < Work workItems={workItems} />

            {/* Benefits Section */}
            < Benefits benefits={benefits} services={services} technologies={technologies} />

            {/* Approach Section */}
            < Approach processes={processes} />

            {/* About Section */}
            < About />

            {/* Faq Section */}
            < Faq faqs={faqs} />

            {/* Footer Section */}
            < Footer />
        </>
    )
}
