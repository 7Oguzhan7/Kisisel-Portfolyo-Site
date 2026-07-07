import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import heroImg from '../assets/hero.png';
import './About.css';

const About = () => {
  const { lang } = useLanguage();
  
  const skills = [
    { name: 'React', color: '#61DAFB' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Figma', color: '#F24E1E' },
    { name: 'Git', color: '#F05032' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <h2 className="section-title animate-on-scroll">
          <span className="gradient-text">{lang === 'tr' ? 'Hakkımda' : 'About Me'}</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text animate-on-scroll delay-1">
            <p>{lang === 'tr' ? 'Merhaba! Ben Oğuzhan, modern web teknolojileri üzerine çalışan bir geliştiriciyim. Hem frontend hem backend kısmına büyük ilgi duyuyorum dolayısıyla ileride Full Stack Developer olmak istiyorum. Aynı zamanda ileride mobil uygulama geliştirme alanında da ilerlemek istiyorum.' : 'Hello! I am Oguzhan, a developer working on modern web technologies. I have a great interest in both frontend and backend, so I want to become a Full Stack Developer in the future. I also aim to advance in the field of mobile app development.'}</p>
            <p>{lang === 'tr' ? 'Boş zamanlarımda yeni teknolojiler öğrenmeye çalışıyor ve kullanıcı deneyimini ön planda tutan projeler yapmaya özen gösteriyorum.' : 'In my free time, I focus on learning new technologies and creating projects that prioritize user experience.'}</p>
            
    { /* Skills moved to dedicated section */ }
          </div>
          
          <div className="about-image animate-on-scroll delay-2">
            <div className="image-wrapper glass" style={{ background: 'var(--surface-color)', display: 'flex', flexDirection: 'column', padding: '1rem' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                {/* Dev Oİ Monogramı */}
                <h1 style={{ 
                  margin: 0, 
                  fontFamily: '"Outfit", sans-serif', 
                  fontSize: 'clamp(5rem, 12vw, 9rem)', 
                  fontWeight: '900', 
                  lineHeight: '1',
                  letterSpacing: '-2px',
                  color: 'var(--text-primary)'
                }}>
                  O<span className="gradient-text">İ</span>
                </h1>
                
                {/* İsim ve Unvan */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '-10px' }}>
                  <h2 style={{
                    margin: 0,
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    letterSpacing: '4px',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    textAlign: 'center'
                  }}>
                    Oğuzhan İnce
                  </h2>
                  <span style={{
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    letterSpacing: '6px',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    marginRight: '-6px'
                  }}>
                    Developer
                  </span>
                  <div style={{ width: '40px', height: '4px', background: 'var(--text-secondary)', borderRadius: '2px', opacity: 0.3, marginTop: '5px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
