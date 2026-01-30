import React, { useState } from 'react';
import { NavigationItem } from '../types';
import './Header.css';

interface HeaderProps {
  siteName: string;
  navigation: NavigationItem[];
}

export const Header: React.FC<HeaderProps> = ({ siteName, navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1>{siteName}</h1>
        </div>
        
        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            {navigation.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="header-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
