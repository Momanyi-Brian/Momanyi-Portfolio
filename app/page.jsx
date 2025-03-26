import React from 'react'

import { workItems, benefits, services, technologies, processes, faqs } from './lib/portfolioData';

import Hero from './components/Hero'
import Work from './components/Work'
import Benefits from './components/Benefits';
import Approach from './components/Approach';
import About from './components/About';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function Home() {
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
