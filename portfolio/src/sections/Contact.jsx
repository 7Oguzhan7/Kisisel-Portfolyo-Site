import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { API_BASE_URL } from '../config';
import './Contact.css';

const Contact = () => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ 
        type: 'error', 
        text: lang === 'tr' ? 'Lütfen tüm alanları doldurun.' : 'Please fill all fields.' 
      });
      return;
    }

    setStatus({ 
      type: 'loading', 
      text: lang === 'tr' ? 'Mesajınız iletiliyor...' : 'Sending message...' 
    });

    fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: 'Portfolyo İletişim Formu',
        message: formData.message
      })
    })
    .then(response => {
      if (!response.ok) throw new Error('API error');
      return response.json();
    })
    .then(data => {
      setStatus({ 
        type: 'success', 
        text: lang === 'tr' ? 'Mesajınız başarıyla iletildi!' : 'Your message has been sent successfully!' 
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(error => {
      console.error(error);
      setStatus({ 
        type: 'error', 
        text: lang === 'tr' ? 'Bağlantı hatası! Mesaj gönderilemedi.' : 'Connection error! Message could not be sent.' 
      });
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-header animate-on-scroll">
          <h2 className="section-title">
            {lang === 'tr' ? 'Benimle ' : 'Get In '}<span className="gradient-text">{lang === 'tr' ? 'İletişime Geç' : 'Touch'}</span>
          </h2>
          <p className="contact-subtitle">
            {lang === 'tr' ? 'Bir projeniz veya fikriniz mi var? Bana mesaj bırakın!' : 'Have a project in mind or just want to say hi? Leave me a message!'}
          </p>
        </div>

        <div className="contact-content animate-on-scroll delay-1">
          <form className="contact-form glass" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{lang === 'tr' ? 'İsim' : 'Name'}</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder={lang === 'tr' ? 'Adınız' : 'Your Name'} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{lang === 'tr' ? 'E-posta' : 'Email'}</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder={lang === 'tr' ? 'E-posta adresiniz' : 'Your Email'} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{lang === 'tr' ? 'Mesaj' : 'Message'}</label>
              <textarea 
                id="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                placeholder={lang === 'tr' ? 'Mesajınız...' : 'Your message...'}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              {lang === 'tr' ? 'Gönder' : 'Send Message'}
            </button>

            {status.text && (
              <div className={`status-message ${status.type} mt-3 text-center fw-bold`}>
                {status.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
