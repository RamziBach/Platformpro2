import React from 'react';
import { ScrollingProvider } from 'react-scroll-section';

import '../styles/app.css';

import Landing from './landing/Landing';
import Header from './landing/header/Header';
import Hero from './landing/hero/Hero';
import About from './about/About';
import Builder from './builder/Builder';
import Features from './features/Features';
import MoreFeatures from './features/MoreFeatures';
import Cta from './cta/Cta';
import Footer from './footer/Footer';

const App = () => {
  return (
    <ScrollingProvider>
      <div className="body">
        <Landing>
          <Header />
          <Hero />
        </Landing>
        <About />
        <Builder />
        <Features />
        <MoreFeatures />
        <Cta />
        <Footer />
      </div>
    </ScrollingProvider>
  );
};

export default App;
