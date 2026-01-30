import React from 'react';
import { FeaturesSection } from '../types';
import './Features.css';

interface FeaturesProps {
  data: FeaturesSection;
}

export const Features: React.FC<FeaturesProps> = ({ data }) => {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">{data.title}</h2>
          {data.subtitle && <p className="features-subtitle">{data.subtitle}</p>}
        </div>
        <div className="features-grid">
          {data.features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
