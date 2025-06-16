import React from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const headerStyles = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    padding: '1rem 0',
    transition: 'all 0.3s ease'
  };

  const headerContentStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyles = {
    fontSize: '1.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const navStyles = {
    display: 'flex',
    gap: '2rem'
  };

  const getNavItemStyles = (isActive: boolean) => ({
    background: 'none',
    border: 'none',
    color: isActive ? '#667eea' : '#666',
    fontSize: '1rem',
    fontWeight: isActive ? '600' : '500',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    overflow: 'hidden',
    transform: isActive ? 'translateY(-2px)' : 'none',
    boxShadow: isActive ? '0 4px 15px rgba(102, 126, 234, 0.2)' : 'none'
  });

  return (
    <header style={headerStyles}>
      <div style={headerContentStyles}>
        <div style={logoStyles}>
          <span>Portfolio</span>
        </div>
        <nav style={navStyles}>
          {navItems.map((item) => (
            <button
              key={item.id}
              style={getNavItemStyles(activeSection === item.id)}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = '#667eea';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = '#666';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
