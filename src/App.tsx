import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { siteConfig } from './config/siteConfig';

function App() {
  return (
    <div className="App">
      <Header 
        siteName={siteConfig.siteName}
        navigation={siteConfig.navigation}
      />
      <Hero data={siteConfig.hero} />
      <Features data={siteConfig.features} />
      <Services data={siteConfig.services} />
      {siteConfig.team && <Team data={siteConfig.team} />}
      {siteConfig.testimonials && <Testimonials data={siteConfig.testimonials} />}
      <Contact data={siteConfig.contact} />
      <Footer data={siteConfig.footer} />
    </div>
  );
}

export default App;
