import React from 'react';

const About = () => {
  const aboutStyles: React.CSSProperties = {
    padding: '6rem 0',
    background: '#f8f9fa'
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const sectionHeaderStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '4rem'
  };

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: '3rem',
    fontWeight: 700,
    color: '#333',
    marginBottom: '1rem'
  };

  const sectionDividerStyles: React.CSSProperties = {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    margin: '0 auto',
    borderRadius: '2px'
  };

  const aboutContentStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center'
  };

  const aboutTextStyles: React.CSSProperties = {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: '#666'
  };

  const aboutParagraphStyles: React.CSSProperties = {
    marginBottom: '1.5rem'
  };

  const aboutStatsStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    marginTop: '2rem'
  };

  const statStyles: React.CSSProperties = {
    textAlign: 'center',
    padding: '1.5rem',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease'
  };

  const statNumberStyles: React.CSSProperties = {
    display: 'block',
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#667eea',
    marginBottom: '0.5rem'
  };

  const statLabelStyles: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#666',
    fontWeight: 500
  };

  const aboutImageStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const imagePlaceholderStyles: React.CSSProperties = {
    position: 'relative',
    width: '300px',
    height: '300px'
  };

  const profileRingStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '4px solid',
    borderImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%) 1',
    borderRadius: '50%',
    animation: 'spin 20s linear infinite'
  };

  const profileContentStyles: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '250px',
    height: '250px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 600
  };

  return (
    <section id="about" style={aboutStyles}>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div style={containerStyles}>
        <div className="animate-section" style={sectionHeaderStyles}>
          <h2 style={sectionTitleStyles}>About Me</h2>
          <div style={sectionDividerStyles}></div>
        </div>
        <div className="animate-section" style={aboutContentStyles}>
          <div style={aboutTextStyles}>
            <p style={aboutParagraphStyles}>
              I'm a passionate frontend developer with over 3 years of experience 
              creating stunning, user-centric web applications. My journey began 
              with a curiosity about how websites work, and it has evolved into 
              a deep love for crafting seamless digital experiences.
            </p>
            <p style={aboutParagraphStyles}>
              I specialize in React.js, TypeScript, and modern CSS frameworks, 
              always staying current with the latest industry trends and best practices. 
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source projects, or mentoring aspiring developers.
            </p>
            <div style={aboutStatsStyles}>
              <div 
                style={statStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={statNumberStyles}>5+</span>
                <span style={statLabelStyles}>Projects Completed</span>
              </div>
              <div 
                style={statStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={statNumberStyles}>3+</span>
                <span style={statLabelStyles}>Years Experience</span>
              </div>
              <div 
                style={statStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={statNumberStyles}>10+</span>
                <span style={statLabelStyles}>Certifications</span>
              </div>
            </div>
          </div>
          <div style={aboutImageStyles}>
            <div style={imagePlaceholderStyles}>
              <div style={profileRingStyles}></div>
              <div style={profileContentStyles}>
                <span>Profile Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;