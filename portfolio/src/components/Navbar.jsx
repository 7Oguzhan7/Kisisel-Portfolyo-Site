import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const [theme, setTheme] = useState(localStorage.getItem('portfolio-theme') || 'dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled glass' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo" style={{ letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          OĞUZHAN <span className="gradient-text" style={{ fontWeight: '800' }}>İNCE</span>
        </a>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</a></li>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>{lang === 'tr' ? 'Hakkımda' : 'About'}</a></li>
          <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>{lang === 'tr' ? 'Yeteneklerim' : 'Skills'}</a></li>
          <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>{lang === 'tr' ? 'Projelerim' : 'Projects'}</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>{lang === 'tr' ? 'İletişim' : 'Contact'}</a></li>
          <li><a href="#se" onClick={() => setMobileMenuOpen(false)}>{lang === 'tr' ? 'Sertifikalarım' : 'Certificates'}</a></li>
        </ul>        
        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleLanguage} aria-label="Toggle Language" title={`Switch to ${lang === 'tr' ? 'English' : 'Turkish'}`}>
            {lang.toUpperCase()}
          </button>
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle Theme" title="Toggle Dark/Light Mode">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="btn btn-primary d-none-mobile">{lang === 'tr' ? 'Özgeçmiş' : 'Resume'}</button>
          <button className="icon-btn mobile-toggle d-none-desktop" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
