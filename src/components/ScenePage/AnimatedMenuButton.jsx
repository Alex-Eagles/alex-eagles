/* AnimatedMenuButton.jsx */
import React, { useState } from 'react';
import "../../styles/animatedmenubutton.css"
function AnimatedMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  const menuItems = [
    { index: '01.', text: 'Home', link: '/' },
    { index: '02.', text: 'History', link: '/one' },
    { index: '03.', text: 'Publications', link: '/prototypes' },
    { index: '04.', text: 'Team', link: '/careers' },
    { index: '05.', text: 'Sponsers', link: '/press' },
    { index: '06.', text: 'Contact', link: 'https://example.com', external: true }
  ];

  const footerLinks = [
    { text: 'Legal Mentions', link: '/legal-mentions' },
    { text: 'Privacy Policy', link: '/privacy-policy' }
  ];

  return (
    <div className={`animated-menu ${isOpen ? 'open' : ''}`}>
      {/* Header: a centered button */}
      <div className="menu-header">
        <button className={`menu-toggle-button ${isOpen ? 'is-open' : ''}`} onClick={toggleMenu}>
          {isOpen ? (
            <>
              <span className="button-text">Close</span>
            </>
          ) : (
            <>
              <img src="/menu2.svg" alt="Menu Icon" className="menu-icon" />
              <span className="button-text">Menu</span>
            </>
          )}
        </button>
      </div>

      <div className="menu-content">
        <ul className="menu-items">
          {menuItems.map((item, i) => (
            <li key={i} className="menu-item" style={{ transitionDelay: `${i * 75}ms` }}>
              <a
                href={item.link}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                <span className="item-index">{item.index}</span>
                <span className="item-text">{item.text}</span>
                {item.external && (
                  <svg className="external-icon" viewBox="0 0 21 22">
                    <path d="M21 1.667v15.166a1.167 1.167 0 11-2.333 0V4.483L1.993 21.158a1.167 1.167 0 11-1.651-1.65L17.017 2.832H4.667a1.167 1.167 0 110-2.333h15.166A1.167 1.167 0 0121 1.667z" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer">
          <div
            className="social-link"
            style={{ transitionDelay: `${(menuItems.length + footerLinks.length) * 75}ms` }}
          >
            <a href="https://www.linkedin.com/company/alex-eagles-aero-design/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 20 20">
                <g fill="888">
                  <path d="M4.152 5.997a1.823 1.823 0 100-3.646 1.823 1.823 0 000 3.646zM7.697 7.379v10.116h3.141v-5.003c0-1.32.249-2.598 1.885-2.598 1.614 0 1.634 1.51 1.634 2.682v4.92H17.5v-5.548c0-2.725-.587-4.82-3.772-4.82-1.529 0-2.554.84-2.973 1.634h-.043V7.38H7.697zm-5.118 0h3.146v10.116H2.579V7.379z" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedMenuButton;