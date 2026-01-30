import React from 'react';
import { FooterSection } from '../types';
import './Footer.css';

interface FooterProps {
  data: FooterSection;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-about">
            <h3 className="footer-logo">{data.companyName}</h3>
            {data.description && (
              <p className="footer-description">{data.description}</p>
            )}
          </div>
          
          {data.links.map((linkGroup, index) => (
            <div key={index} className="footer-links-group">
              <h4 className="footer-links-title">{linkGroup.title}</h4>
              <ul className="footer-links">
                {linkGroup.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith('#')) {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
