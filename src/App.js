import React, { useState, useEffect, useRef } from 'react'; 
import './App.css';
import { translations, skillsData } from './data/translations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSun, faMoon, faLanguage, 
  faExternalLinkAlt, faUser, faBriefcase, faPaperPlane, faBars, faTimes, faTools 
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser'; 

function App() {
  const [lang, setLang] = useState('tr');
  const [theme, setTheme] = useState('dark');
  const [filter, setFilter] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const formRef = useRef(); 

  const t = translations[lang];
useEffect(() => {
  document.title = lang === 'tr' ? 'Asım Karabulut | Portfolyo' : 'Asim Karabulut | Portfolio';
}, [lang]);
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
  }, [theme]);

  const sendEmail = (e) => {
    e.preventDefault();

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          alert(lang === 'tr' ? "Mesajınız başarıyla gönderildi! ✅" : "Message sent successfully! ✅");
          formRef.current.reset(); 
      }, (error) => {
          alert(lang === 'tr' ? "Bir hata oluştu, lütfen tekrar deneyin. ❌" : "An error occurred, please try again. ❌");
          console.log(error.text);
      });
  };

  const closeSidebarIfOpen = () => {
  if (isSidebarOpen && window.innerWidth < 900) {
    setIsSidebarOpen(false);
  }
};
  const filteredProjects = filter === 'all' 
    ? t.projects 
    : t.projects.filter(p => p.category === filter);

  const handleNavLinkClick = () => {
    if (window.innerWidth < 900) setIsSidebarOpen(false);
  };

  return (
    <div className={`app-layout ${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
      
      <button className="sidebar-toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
      </button>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="profile-section">
          <img src="/image/asım.jpeg" alt="Asım" className="profile-pic" />
          <h2>Asım Karabulut</h2>
          <p className="sidebar-role">{t.role}</p>
        </div>

        <nav className="sidebar-nav">
          <a href="#about" className="side-nav-link" onClick={handleNavLinkClick}>
            <FontAwesomeIcon icon={faUser} /> {t.navAbout}
          </a>
          <a href="#skills" className="side-nav-link" onClick={handleNavLinkClick}>
            <FontAwesomeIcon icon={faTools} /> {t.skillsTitle}
          </a>
          <a href="#projects" className="side-nav-link" onClick={handleNavLinkClick}>
            <FontAwesomeIcon icon={faBriefcase} /> {t.navProjects}
          </a>
          <a href="#contact" className="side-nav-link" onClick={handleNavLinkClick}>
            <FontAwesomeIcon icon={faPaperPlane} /> {t.navContact}
          </a>
        </nav>

        <div className="sidebar-actions">
          <button className="side-btn" onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}>
            <FontAwesomeIcon icon={faLanguage} /> {lang.toUpperCase()}
          </button>
          <button className="side-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
          </button>
        </div>

        <div className="sidebar-social">
          <a href="https://github.com/asmss" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="http://linkedin.com/in/asım-karabulut-6a874b326" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://www.instagram.com/asm_karabulut?igsh=Z2ZiMWsybTlzdGJm&utm_source=qr" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </aside>

      <main className="main-content"onClick={closeSidebarIfOpen}>
        <section id="about" className="content-card">
          <h1>Asım Karabulut</h1>
          <p className="job-title" style={{color: 'var(--accent)', fontWeight: 'bold'}}>{t.role}</p>
          <div className="divider"></div>
          <h3>{t.aboutTitle}</h3>
          <p className="about-p">{t.aboutText}</p>
        </section>

        <section id="skills" className="content-card">
          <h3>{t.skillsTitle}</h3>
          
          {Object.entries(skillsData).map(([category, items]) => (
            <div key={category} className="skill-category-wrapper" style={{marginBottom: '20px'}}>
              <h4 style={{
                color: 'var(--accent)', 
                fontSize: '0.9rem', 
                textTransform: 'uppercase', 
                marginBottom: '10px',
                borderBottom: '1px solid var(--border)',
                display: 'inline-block'
              }}>
                {category.replace('_', ' & ')}
              </h4>
              <div className="skills-grid">
                {items.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="projects">
          <div className="section-header">
            <h2>{t.projectsTitle}</h2>
            <div className="filter-bar">
              {['all', 'mobile', 'web', 'ai'].map(cat => (
                <button 
                  key={cat} 
                  className={`filter-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {t[`filter${cat.charAt(0).toUpperCase() + cat.slice(1)}`]}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-container">
            {filteredProjects.map((p, i) => (
              <div key={i} className="project-wide-card">
                <div className="p-img-wrapper">
                  <img src={p.img} alt={p.title} />
                </div>
                <div className="p-info">
                  <h3>{p.title}</h3>
                  <div className="p-tags">
                    {p.tags?.map((tag, idx) => (
                      <span key={idx} className="tech-badge">{tag}</span>
                    ))}
                  </div>
                  <p>{p.desc}</p>
                  
                  <a href={p.link} target="_blank" rel="noreferrer" className="p-link-btn">
                    <FontAwesomeIcon icon={p.link.includes('github') ? faGithub : faExternalLinkAlt} /> {p.type || "View"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="content-card">
          <h2>{t.contactTitle}</h2>
          <div className="divider"></div>
          <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder={t.formName} 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder={t.formEmail} 
                required 
              />
            </div>
            <textarea 
              name="message" 
              placeholder={t.formMsg} 
              required
            ></textarea>
            
            <button type="submit" className="form-submit-btn">
              <span>{t.formBtn}</span>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </section>

        <footer style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
          <p>© 2025 Asım Karabulut | asimkarblt07@gmail.com </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
