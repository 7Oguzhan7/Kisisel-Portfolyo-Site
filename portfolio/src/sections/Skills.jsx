import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { API_BASE_URL } from '../config';
import './Skills.css';

const Skills = () => {
  const { lang } = useLanguage();
  const [skillCategories, setSkillCategories] = useState(null);

  const fallbackCategories = [
    {
      title: lang === 'tr' ? 'Frontend Geliştirme' : 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', color: '#61DAFB' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'HTML5', color: '#E34F26' },
        { name: 'CSS3', color: '#1572B6' },
        { name: 'Tailwind', color: '#38B2AC' }
      ]
    },
    {
      title: lang === 'tr' ? 'Backend & Veritabanı' : 'Backend & Database',
      icon: '⚙️',
      skills: [
        { name: 'PHP', color: '#777BB4' },
        { name: 'CodeIgniter', color: '#EF4223' },
        { name: 'MySQL', color: '#4479A1' },
        { name: 'ASP.NET Core', color: '#512BD4' },
        { name: 'Entity Framework', color: '#68217A' },
        { name: 'SQLite', color: '#003B57' }
      ]
    },
    {
      title: lang === 'tr' ? 'Araçlar & Diğer' : 'Tools & Other',
      icon: '🚀',
      skills: [
        { name: 'Git', color: '#F05032' },
        { name: 'GitHub', color: '#181717' },
        { name: 'Figma', color: '#F24E1E' },
        { name: 'Visual Studio', color: '#5C2D91' },
        { name: 'VS Code', color: '#007ACC' }
      ]
    },
    {
      title: lang === 'tr' ? 'Yapay Zeka & API' : 'AI & API',
      icon: '🤖',
      skills: [
        { name: 'ChatGPT-4o', color: '#10A37F' },
        { name: 'Gemini', color: '#8E75FF' },
        { name: 'Claude', color: '#D97757' },
        { name: 'Cursor', color: '#2B2B2B' },
        { name: 'CodeFormer', color: '#FF3366' }
      ]
    }
  ];

  useEffect(() => {
    setSkillCategories(fallbackCategories);

    fetch(`${API_BASE_URL}/skills`)
      .then(response => {
        if (!response.ok) throw new Error('API error');
        return response.json();
      })
      .then(data => {
        const categories = [
          { title: lang === 'tr' ? 'Frontend Geliştirme' : 'Frontend Development', icon: '🎨', key: 'frontend', skills: [] },
          { title: lang === 'tr' ? 'Backend & Veritabanı' : 'Backend & Database', icon: '⚙️', key: 'backend', skills: [] },
          { title: lang === 'tr' ? 'Araçlar & Diğer' : 'Tools & Other', icon: '🚀', key: 'tools', skills: [] },
          { title: lang === 'tr' ? 'Yapay Zeka & API' : 'AI & API', icon: '🤖', key: 'ai', skills: [] }
        ];
        data.forEach(skill => {
          const category = categories.find(c => c.key === skill.category.toLowerCase());
          if (category) category.skills.push({ name: skill.name, color: skill.color });
        });
        const filled = categories.filter(c => c.skills.length > 0);
        if (filled.length > 0) setSkillCategories(filled);
      })
      .catch(() => { /* fallback zaten yüklendi */ });
  }, [lang]);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          <span className="gradient-text">{lang === 'tr' ? 'Yeteneklerim' : 'Skills'}</span>
        </h2>
        
        <div className="skills-category-grid">
          {(skillCategories || []).map((category, idx) => (
            <div key={idx} className="skill-category-card glass fade-in-card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-tag-container">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="skill-tag-modern"
                    style={{ '--hover-color': skill.color }}
                  >
                    <span className="skill-dot" style={{ backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}` }}></span>
                    <span className="skill-name notranslate" translate="no">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
