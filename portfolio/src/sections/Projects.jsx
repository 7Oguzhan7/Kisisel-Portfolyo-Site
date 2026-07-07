import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { API_BASE_URL } from '../config';
import './Projects.css';

const Projects = () => {
  const { lang } = useLanguage();
  const [projects, setProjects] = useState(null);
  
  const fallbackProjects = [
    {
      title: lang === 'tr' ? 'Akıllı Kütüphane ve Rezervasyon Sistemi' : 'Smart Library & Reservation System',
      description: lang === 'tr'
        ? 'PHP ve CodeIgniter 4 ile geliştirilen; kitap yönetimi, kullanıcı rezervasyonu ve kapsamlı admin paneli içeren tam donanımlı kütüphane yönetim sistemi. Ekip projesi olarak geliştirildi.'
        : 'A full-featured library management system built with PHP and CodeIgniter 4, featuring book management, user reservations, and a comprehensive admin panel. Developed as a team project.',
      tags: ['PHP', 'CodeIgniter 4', 'MySQL', 'JavaScript'],
      link: 'https://github.com/7Oguzhan7/grup-proje'
    },
    {
      title: lang === 'tr' ? 'Kişisel Portfolyo Sitesi' : 'Personal Portfolio Website',
      description: lang === 'tr'
        ? 'React ve ASP.NET Core Web API kullanılarak geliştirilen, SQLite veritabanı ile dinamik içerik yönetimi sağlayan modern kişisel portfolyo sitesi.'
        : 'A modern personal portfolio website built with React and ASP.NET Core Web API, featuring dynamic content management via a SQLite database.',
      tags: ['React', 'ASP.NET Core', 'SQLite', 'CSS'],
      link: '#'
    }
  ];

  useEffect(() => {
    setProjects(fallbackProjects);

    fetch(`${API_BASE_URL}/projects`)
      .then(response => {
        if (!response.ok) throw new Error('API error');
        return response.json();
      })
      .then(data => {
        const mapped = data.map(proj => ({
          title: lang === 'tr' ? proj.titleTr : proj.titleEn,
          description: lang === 'tr' ? proj.descriptionTr : proj.descriptionEn,
          tags: proj.technologies ? proj.technologies.split(',').map(t => t.trim()) : [],
          link: proj.gitHubUrl || '#'
        }));
        if (mapped.length > 0) setProjects(mapped);
      })
      .catch(() => { /* fallback zaten yüklendi */ });
  }, [lang]);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          <span className="gradient-text">{lang === 'tr' ? 'Projelerim' : 'Projects'}</span>
        </h2>
        
        <div className="projects-grid">
          {(projects || []).map((project, index) => (
            <div key={index} className="project-card glass fade-in-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">{lang === 'tr' ? 'İncele' : 'View Project'}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
