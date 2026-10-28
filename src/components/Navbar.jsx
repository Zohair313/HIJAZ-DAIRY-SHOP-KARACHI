import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/923002539947?text=Assalam-o-Alaikum%20Hijaz%20Dairy%20Shop%2C%20I%20would%20like%20to%20place%20an%20order%20%2F%20inquire.";

  const navItems = [
    {
      title: 'Our Products',
      href: '#products',
      children: [
        'Pure Desi Ghee',
        'Fresh White Butter (Makhan)',
        'Fresh Dairy Paneer',
        'Pure Thick Yogurt (Dahi)',
        '100% Pure Fresh Milk'
      ]
    },
    {
      title: 'Desi Ghee & Butter',
      href: '#products',
      children: [
        '100% Khallas Desi Ghee',
        'Daily Churned White Butter',
        'Bulk Orders & Catering'
      ]
    },
    {
      title: 'Paneer & Dahi',
      href: '#products',
      children: [
        'Fresh Soft Paneer',
        'Sweet & Plain Thick Dahi',
        'Daily Home Supply'
      ]
    },
    {
      title: 'About Us',
      href: '#story',
      children: [
        'Our Story & Tradition',
        'Purity & Hygienic Standards',
        'Saddar Karachi Store'
      ]
    },
    {
      title: 'Contact & Order',
      href: '#contact',
      children: [
        'Call / WhatsApp: 0300-2539947',
        'Store Location in Saddar',
        'Home Delivery in Karachi'
      ]
    }
  ];

  return (
    <header className={`main-header ${isScrolled ? 'is-sticky' : ''}`}>
      <div className="container nav-inner">
        {/* Brand Name / Logo */}
        <a href="#" className="nav-logo" aria-label="Hijaz Dairy Shop Home">
          <div className="brand-badge-box">
            <span className="brand-title">HIJAZ</span>
            <span className="brand-subtitle">DAIRY SHOP • KARACHI</span>
          </div>
        </a>

        {/* Primary Desktop Navigation */}
        <nav className="nav-primary">
          <ul className="nav-menu">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className="nav-menu-item"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href={item.href} className="nav-menu-link">
                  <span>{item.title}</span>
                  <ChevronDown size={14} className={`arrow ${activeDropdown === idx ? 'arrow-up' : ''}`} />
                </a>

                {activeDropdown === idx && (
                  <div className="sub-menu-dropdown">
                    <ul>
                      {item.children.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sub-menu-link"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="mobile-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-panel">
          <ul className="mobile-menu-list">
            {navItems.map((item, idx) => (
              <li key={idx} className="mobile-item">
                <button
                  type="button"
                  className="mobile-item-title"
                  onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                >
                  <span>{item.title}</span>
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === idx && (
                  <ul className="mobile-sub-list">
                    {item.children.map((sub, sIdx) => (
                      <li key={sIdx}>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mobile-sub-link"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

        </div>
      )}

      <style>{`
        .main-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: #ffffff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
          transition: box-shadow var(--transition-fast);
        }
        .main-header.is-sticky {
          box-shadow: var(--shadow-md);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          padding-bottom: 0.85rem;
        }
        .brand-badge-box {
          display: flex;
          flex-direction: column;
          border-left: 4px solid var(--color-accent);
          padding-left: 0.75rem;
        }
        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1;
          letter-spacing: 0.04em;
        }
        .brand-subtitle {
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--color-accent);
          margin-top: 0.2rem;
        }
        .nav-primary {
          display: flex;
          align-items: center;
        }
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 1.8rem;
          list-style: none;
        }
        .nav-menu-item {
          position: relative;
        }
        .nav-menu-link {
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 700;
          color: var(--color-primary);
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.5rem 0;
        }
        .nav-menu-link:hover {
          color: var(--color-accent);
        }
        .arrow {
          transition: transform var(--transition-fast);
        }
        .arrow-up {
          transform: rotate(180deg);
        }
        .sub-menu-dropdown {
          position: absolute;
          top: 100%;
          left: -1rem;
          background: #ffffff;
          border-radius: var(--radius-md);
          min-width: 250px;
          box-shadow: var(--shadow-lg);
          padding: 0.8rem 0;
          border: 1px solid var(--color-border);
          animation: fadeIn 0.2s ease;
        }
        .sub-menu-dropdown ul {
          list-style: none;
        }
        .sub-menu-link {
          display: block;
          padding: 0.6rem 1.4rem;
          font-size: 14.5px;
          font-weight: 600;
          color: var(--color-primary);
          transition: background-color var(--transition-fast), color var(--transition-fast);
        }
        .sub-menu-link:hover {
          background-color: var(--color-cream);
          color: var(--color-accent);
          padding-left: 1.6rem;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .nav-whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #25D366;
          color: #ffffff;
          font-weight: 700;
          font-size: 14px;
          padding: 0.65rem 1.4rem;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
        }
        .nav-whatsapp-btn:hover {
          background-color: #1eb956;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(37, 211, 102, 0.4);
        }
        .mobile-btn {
          display: none;
          color: var(--color-primary);
        }
        .mobile-nav-panel {
          background: #ffffff;
          border-top: 1px solid var(--color-border);
          padding: 1.5rem;
          box-shadow: var(--shadow-xl);
        }
        .mobile-menu-list {
          list-style: none;
        }
        .mobile-item {
          border-bottom: 1px solid var(--color-border);
        }
        .mobile-item-title {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          font-size: 17px;
          font-weight: 700;
          color: var(--color-primary);
        }
        .mobile-sub-list {
          list-style: none;
          padding-left: 1rem;
          padding-bottom: 0.8rem;
        }
        .mobile-sub-link {
          display: block;
          padding: 0.4rem 0;
          font-size: 15px;
          color: var(--color-text-muted);
        }
        .mobile-drawer-cta {
          margin-top: 1.5rem;
        }
        @media (max-width: 1080px) {
          .nav-primary {
            display: none;
          }
          .mobile-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
