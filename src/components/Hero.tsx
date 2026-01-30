import React from 'react';
import { HeroSection } from '../types';
import './Hero.css';

interface HeroProps {
  data: HeroSection;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{data.title}</h1>
          <p className="hero-subtitle">{data.subtitle}</p>
          <div className="hero-buttons">
            <button 
              className="hero-button primary"
              onClick={() => handleClick(data.ctaButton.link)}
            >
              {data.ctaButton.text}
            </button>
            {data.secondaryButton && data.secondaryButton.link && (
              <button 
                className="hero-button secondary"
                onClick={() => handleClick(data.secondaryButton?.link || '#')}
              >
                {data.secondaryButton.text}
              </button>
            )}
          </div>
        </div>
        <div className="hero-graphic">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};
