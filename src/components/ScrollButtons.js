import React, { useState, useEffect, useMemo } from 'react';
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

export const ScrollButtons = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sections = useMemo(() => ['Intro', 'Projects', 'Fun', 'Contact'], []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const currentSection = sections.findIndex((section) => {
        const element = document.getElementById(section);
        return element.offsetTop <= scrollPosition && element.offsetTop + element.clientHeight > scrollPosition;
      });
      setCurrentSectionIndex(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPreviousSection = () => {
    if (currentSectionIndex > 0) {
      scrollToSection(sections[currentSectionIndex - 1]);
    }
  };

  const scrollToNextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      scrollToSection(sections[currentSectionIndex + 1]);
    }
  };

  return (
    <div className="scroll-buttons-container">
      <div className="scroll-buttons">
        <FaChevronCircleUp className="scroll-button" onClick={scrollToPreviousSection} />
        <FaChevronCircleDown className="scroll-button" onClick={scrollToNextSection} />
      </div>
    </div>
  );
};