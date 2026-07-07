import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTypewriterList } from '../hooks/useTypewriterList';
import './Home.css';

const trRoles = ["Full Stack Web Geliştiricisi", "Web Tasarımcısı", "Yazılım Geliştirme Öğrencisi"];
const enRoles = ["Full Stack Web Developer", "Web Designer", "Software Development Student"];

const Home = () => {
  const { lang } = useLanguage();
  
  const currentRoles = lang === 'tr' ? trRoles : enRoles;
  const typedText = useTypewriterList(currentRoles, 100, 50, 2000);

  return (
    <section id="home" className="home-section">
      <div className="container home-container">
        <h3 className="animate-on-scroll delay-1">{lang === 'tr' ? 'Merhaba, Ben' : 'HI, I AM'}</h3>
        <h1 className="animate-on-scroll delay-2">
          Oğuzhan <span className="gradient-text">İnce</span>
        </h1>
        <p className="subtitle animate-on-scroll delay-3" style={{ fontSize: '1.5rem', fontWeight: '500', height: '30px', margin: '1rem 0' }}>
          <span className="gradient-text">{typedText}</span><span className="cursor">|</span>
        </p>
        <div className="action-buttons animate-on-scroll delay-3">
          <a href="#projects" className="btn btn-primary">{lang === 'tr' ? 'Projelerim' : 'My Projects'}</a>
          <a href="#contact" className="btn btn-outline">{lang === 'tr' ? 'İletişime Geç' : 'Contact Me'}</a>
        </div>
      </div>
    </section>
  );
};
export default Home;