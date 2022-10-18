import React from 'react';
import Features from './Components/Features';
import Topbar from './Components/Topbar';
import Footer from './Components/Footer';

export default function Home() {
    return (
        <div>
            <Topbar />
            <Features />
            <Footer />
        </div>
    );
}
