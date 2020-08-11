import React, { useContext } from 'react';
import { ScrollingProvider } from 'react-scroll-section';

import { themeContext } from './context/ThemeContextProvider';

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
// import NavMenu from './landing/header/NavMenu';

const App = () => {
  const { darkMode } = useContext(themeContext);
  return (
    <ScrollingProvider>
      <div
        className="body"
        style={{
          backgroundColor: darkMode ? '#101820' : '#eef2f6',
          color: darkMode ? '#eef2f6' : '#101820',
          transition: 'background-color 1s',
        }}
      >
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
        {/* <NavMenu /> */}
      </div>
    </ScrollingProvider>
  );
};

export default App;
