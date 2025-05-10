import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../styles/animatednormalmenubutton.css';

function AnimatedNavMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(prev => !prev);

  // Close the menu, wait for the animation, then navigate internally
  const handleNavClick = (to, external = false) => (e) => {
    if (!external) {
      e.preventDefault();
      setIsOpen(false);
      // match this duration to your CSS transition (e.g. 300ms)
      setTimeout(() => navigate(to), 300);
    }
    // If external, let the browser handle it immediately
  };

  const menuItems = [
    { index: '01.', text: 'Home', link: '/', external: false },
    { index: '02.', text: 'History', link: '/history', external: false },
    { index: '03.', text: 'Publications', link: '/publications', external: false },
    { index: '04.', text: 'Team', link: '/team', external: false },
    { index: '05.', text: 'Sponsors', link: '/sponsors', external: false },
    { index: '06.', text: 'Contact', link: '/contact', external: false }
  ];

  const footerLinks = [
    { text: 'Legal Mentions', link: '/legal-mentions' },
    { text: 'Privacy Policy', link: '/privacy-policy' }
  ];

  return (
    <div className={`animated-menu-nav ${isOpen ? 'open' : ''}`}>
      {/* Header with the toggle button */}
      <div className="menu-header-nav">
        <button
          className={`menu-toggle-button-nav ${isOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
        >
          {isOpen ? (
             <>
      <span className="button-text-nav">Close</span>

      {/* Cross Icon only visible on small screens */}
      <svg
        className="close-icon-nav"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2d2c2c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </>
          ) : (
            <>
              <img src="/menu2.svg" alt="Menu Icon" className="menu-icon-nav" />
              <span className="button-text-nav">Menu</span>
            </>
          )}
        </button>
      </div>

      <div className="menu-content-nav">
        <ul className="menu-items-nav">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="menu-item-nav"
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              <NavLink
                to={item.link}
                onClick={handleNavClick(item.link, item.external)}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="menu-link-nav"
              >
                <span className="item-index-nav">{item.index}</span>
                <span className="item-text-nav">{item.text}</span>
                {item.external && (
                  <svg className="external-icon-nav" viewBox="0 0 21 22">
                    <path d="M21 1.667v15.166a1.167 1.167 0 11-2.333 0V4.483L1.993 21.158a1.167 1.167 0 11-1.651-1.65L17.017 2.832H4.667a1.167 1.167 0 110-2.333h15.166A1.167 1.167 0 0121 1.667z" />
                  </svg>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="footer-nav">
          {/* Static social link as before (remains an <a>) */}
          <div
            className="social-link-nav"
            style={{ transitionDelay: `${(menuItems.length + footerLinks.length) * 75}ms` }}
          >
            <a
              href="https://www.linkedin.com/company/alex-eagles-aero-design/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20">
                <g fill="#888">
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

export default AnimatedNavMenuButton;
