import React from 'react';
import { ServicesSection } from '../types';
import './Services.css';

interface ServicesProps {
  data: ServicesSection;
}

export const Services: React.FC<ServicesProps> = ({ data }) => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">{data.title}</h2>
          {data.subtitle && <p className="services-subtitle">{data.subtitle}</p>}
        </div>
        <div className="services-grid">
          {data.services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card ${service.highlighted ? 'highlighted' : ''}`}
            >
              {service.highlighted && <div className="service-badge">แนะนำ</div>}
              <h3 className="service-name">{service.name}</h3>
              <div className="service-price">{service.price}</div>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-button">เลือกแพ็คเกจนี้</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
