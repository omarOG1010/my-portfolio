// scrollHandler.js

import { useState } from 'react';

// Function to handle scroll and update current section
export const handleScroll = (setCurrentSection) => {
  return () => {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = 'Intro';
    const offset = window.innerHeight * 1.2;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - offset) {
        currentSection = section.id;
      }
    });
    setCurrentSection(currentSection);
  };
};

// Example arrays of image sources for each project
export const projectImages = {

  project1: [
    'imgs/drone-pic3.png',
    'imgs/drone-pic4.png',
    'imgs/drone-pic1.png',
    'imgs/drone-pic2.png',
    'imgs/drone-pic5.png',
  ],

  project2: [
    'imgs/asa-pic2.png',
    'imgs/asa-pic.png',
    'imgs/asa-pic3.png',
  ],

  project3: [
    'imgs/planet-pic1-edited.png',
    'imgs/planet-pic2.png',
    'imgs/planet-pic3.png',
    'imgs/planet-pic4.png',
  ],

  // Add more projects as needed
};

// Custom hook to manage project image indexes and navigation functions
export const useProjectIndexes = () => {
  const [project1Index, setProject1Index] = useState(0);
  const [project2Index, setProject2Index] = useState(0);
  const [project3Index, setProject3Index] = useState(0);
  // Add more state variables for additional projects as needed

  // Function to handle previous image for Project 1
  const handlePreviousProject1 = () => {
    setProject1Index((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectImages.project1.length - 1));
  };

  // Function to handle next image for Project 1
  const handleNextProject1 = () => {
    setProject1Index((prevIndex) => (prevIndex < projectImages.project1.length - 1 ? prevIndex + 1 : 0));
  };

  // Function to handle previous image for Project 2
  const handlePreviousProject2 = () => {
    setProject2Index((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectImages.project2.length - 1));
  };

  // Function to handle next image for Project 2
  const handleNextProject2 = () => {
    setProject2Index((prevIndex) => (prevIndex < projectImages.project2.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePreviousProject3 = () => {
    setProject3Index((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectImages.project2.length - 1));
  };

  // Function to handle next image for Project 2
  const handleNextProject3 = () => {
    setProject3Index((prevIndex) => (prevIndex < projectImages.project2.length - 1 ? prevIndex + 1 : 0));
  };


  return {
    project1Index,
    project2Index,
    project3Index,
    handlePreviousProject1,
    handleNextProject1,
    handlePreviousProject2,
    handleNextProject2,
    handlePreviousProject3,
    handleNextProject3,
  };
};
