import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { API_BASE_URL } from '../config';
import './Certificates.css';

const Certificates = () => {
  const { lang } = useLanguage();
  const scrollRef = useRef(null);
  const [certificates, setCertificates] = useState([]);
  const [modalCert, setModalCert] = useState(null); // Açık olan sertifika

  const fallbackCertificates = [
    {
      title: lang === 'tr'
        ? 'Sıfırdan İleri Düzey Web Geliştirme (HTML, CSS, Javascript)'
        : 'From Zero to Advanced Web Development (HTML, CSS, Javascript)',
      issuer: 'Udemy — Levent Ertunalılar',
      date: 'Ağustos 2025',
      imageUrl: '/certificates/udemy-webdev.jpg',
      link: 'https://ude.my/UC-9e7ed3ba-3935-47ae-9c4a-3771f959fb4d'
    },
    {
      title: lang === 'tr'
        ? 'İngilizce A1 Seviyesi Sertifikası'
        : 'English A1 Level Certificate',
      issuer: 'BTK Akademi',
      date: '2025',
      imageUrl: '/certificates/english-a1.pdf',
      link: ''
    },
    {
      title: lang === 'tr'
        ? 'İngilizce A2 Seviyesi Sertifikası'
        : 'English A2 Level Certificate',
      issuer: 'BTK Akademi',
      date: '2025',
      imageUrl: '/certificates/english-a2.pdf',
      link: ''
    },
    {
      title: lang === 'tr'
        ? 'İngilizce B1 Seviyesi Sertifikası'
        : 'English B1 Level Certificate',
      issuer: 'BTK Akademi',
      date: '2025',
      imageUrl: '/certificates/english-b1.pdf',
      link: ''
    },
    {
      title: lang === 'tr'
        ? 'İngilizce B2 Seviyesi Sertifikası'
        : 'English B2 Level Certificate',
      issuer: 'BTK Akademi',
      date: '2025',
      imageUrl: '/certificates/english-b2.pdf',
      link: ''
    }
  ];

  useEffect(() => {
    // Önce fallback'i hemen yükle (Skills & Projects ile aynı yaklaşım)
    setCertificates(fallbackCertificates);

    // Sonra API'yi dene, başarılı olursa güncelle
    fetch(`${API_BASE_URL}/certificates`)
      .then(response => {
        if (!response.ok) throw new Error('API error');
        return response.json();
      })
      .then(data => {
        const mapped = data.map(cert => ({
          title: lang === 'tr' ? cert.titleTr : cert.titleEn,
          issuer: cert.organization,
          date: cert.date,
          imageUrl: cert.imageUrl || '',
          link: cert.link || '#'
        }));
        if (mapped.length > 0) setCertificates(mapped);
      })
      .catch(() => { /* fallback zaten yüklendi */ });
  }, [lang]);

  // ESC tuşuyla modal kapat
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
  };

  return (
    <section id="se" className="certificates-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          <span className="gradient-text">{lang === 'tr' ? 'Sertifikalarım' : 'My Certificates'}</span>
        </h2>
        
        <div className="slider-wrapper animate-on-scroll delay-1">
          <button className="slider-btn left" onClick={scrollLeft} aria-label="Kaydır Sol">
            &#10094;
          </button>
          
          <div className="certificates-slider" ref={scrollRef}>
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-card glass">
                <div className="certificate-content">
                  <div className="cert-header">
                     <h3>{cert.title}</h3>
                     <span className="cert-date">{cert.date}</span>
                  </div>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <button
                    className="cert-link"
                    onClick={() => setModalCert(cert)}
                    aria-label={lang === 'tr' ? 'Sertifikayı Gör' : 'View Certificate'}
                  >
                    {lang === 'tr' ? 'Sertifikayı Gör' : 'View Certificate'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn right" onClick={scrollRight} aria-label="Kaydır Sağ">
            &#10095;
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {modalCert && (
        <div
          className="cert-modal-overlay"
          onClick={() => setModalCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Sertifika Görüntüleyici"
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-modal-close"
              onClick={() => setModalCert(null)}
              aria-label="Kapat"
            >
              &#10005;
            </button>

            <div className="cert-modal-header">
              <h3>{modalCert.title}</h3>
              <p>{modalCert.issuer} &bull; {modalCert.date}</p>
            </div>

            {modalCert.imageUrl ? (
              modalCert.imageUrl.endsWith('.pdf') ? (
                <iframe
                  src={modalCert.imageUrl}
                  className="cert-modal-pdf"
                  title={modalCert.title}
                />
              ) : (
                <img
                  src={modalCert.imageUrl}
                  alt={modalCert.title}
                  className="cert-modal-image"
                />
              )
            ) : (
              <div className="cert-modal-no-image">
                <span>🎓</span>
                <p>{lang === 'tr' ? 'Görsel mevcut değil' : 'No image available'}</p>
              </div>
            )}

            {modalCert.link && modalCert.link !== '#' && (
              <a
                href={modalCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-modal-verify-btn"
              >
                🔗 {lang === 'tr' ? 'Udemy\'den Doğrula' : 'Verify on Udemy'}
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
