import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faLanguage, faLocationArrow, faUser, faBriefcase, faTools } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { skillsData } from '../data/translations';

const Sidebar = ({ lang, setLang, theme, setTheme, t, isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="profile-section">
        <div className="profile-img-container">
          <img src="/image/asım.jpeg" alt="Asım" className="profile-pic" />
          <div className="status-dot"></div>
        </div>
        <h2>Asim Karabulut</h2>
        <p className="sidebar-role">{t.role}</p>
      </div>

      <nav className="sidebar-nav">
        <a href="#about" className="side-nav-link" onClick={() => window.innerWidth < 900 && setIsSidebarOpen(false)}>
          <FontAwesomeIcon icon={faUser} /> {t.navAbout}
        </a>
        <a href="#projects" className="side-nav-link" onClick={() => window.innerWidth < 900 && setIsSidebarOpen(false)}>
          <FontAwesomeIcon icon={faBriefcase} /> {t.navProjects}
        </a>
      </nav>

      <div className="sidebar-divider"></div>

      <div className="sidebar-social-wrapper">
        <p className="section-subtitle">{lang === 'tr' ? 'Bağlantılar' : 'Connect'}</p>
        <div className="sidebar-social-grid">
          <a href="https://github.com/asmss" target="_blank" rel="noreferrer" className="social-icon github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/asimkarabulut" target="_blank" rel="noreferrer" className="social-icon linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/asm_karabulut?igsh=Z2ZiMWsybTlzdGJm&utm_source=qr" target="_blank" rel="noreferrer" className="social-icon instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <div className="sidebar-actions">
        <button className="side-btn" onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}>
          <FontAwesomeIcon icon={faLanguage} /> {lang.toUpperCase()}
        </button>
        <button className="side-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </button>
        <a href="mailto:asimkarblt07@gmail.com" className="side-btn primary contact-direct">
          <FontAwesomeIcon icon={faLocationArrow} /> {t.contact}
        </a>
      </div>

      <div className="sidebar-skills-list">
         <p className="section-subtitle"><FontAwesomeIcon icon={faTools} /> {t.skillsTitle}</p>
         <div className="mini-skills-tag">
           {skillsData.slice(0, 6).map((s, i) => <span key={i}>{s}</span>)}
         </div>
      </div>
    </aside>
  );
};

export default Sidebar;