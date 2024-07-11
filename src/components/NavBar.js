import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


export const NavBar = ({ disabled }) => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Intro', 'Projects', 'Fun', 'Contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        return element.offsetTop <= scrollPosition && element.offsetTop + element.clientHeight > scrollPosition;
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (disabled) {
    return null; // Render nothing if disabled
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shadow-lg rounded-pill m-1 m-auto" style={{ position: 'fixed', top: 20}}>
      <Container>
          <Nav className="me-auto">
            {['Intro', 'Projects', 'Fun', 'Contact'].map((section) => (
              <Nav.Link
                key={section}
                onClick={() => scrollToSection(section)}
                className={`${activeLink === section ? 'active' : ''}`}
              >
                {section}
              </Nav.Link>
            ))}
          </Nav>
      </Container>
    </Navbar>
  );
};
