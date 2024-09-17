
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScrollButtons } from './components/ScrollButtons';
import { handleScroll, projectImages, useProjectIndexes } from './scripts/scrollHandler'; // Import functions and states


function App() {
  const [currentSection, setCurrentSection] = useState('Intro');
  const { project1Index, project2Index, project3Index, handlePreviousProject1, handleNextProject1, handlePreviousProject2, handleNextProject2, handlePreviousProject3,handleNextProject3, handlePreviousProject4,handleNextProject4} = useProjectIndexes();

  // Initialize AOS library and refresh on component mount
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // Scroll event handler to update current section
  useEffect(() => {
    const scrollHandlerFunc = handleScroll(setCurrentSection);
    window.addEventListener('scroll', scrollHandlerFunc);
    return () => {
      window.removeEventListener('scroll', scrollHandlerFunc);
    };
  }, []);

  
  return (
    <div className="App">
      <NavBar />
      <ScrollButtons />

      <div className="centered-text-area">
        <h1 className={`centered-text ${currentSection === 'Intro' && 'show'}`}> <span className='not-bold-robo-slab'>Welcome, I'm</span> <span className='bold-robo-slab'>Omar</span></h1>
        <h1 className={`centered-text  ${currentSection === 'Projects' && 'show'}`}>  
          <span className='not-bold-robo-slab'>Here are some</span> <span className='bold-robo-slab'>projects</span> <span className='not-bold-robo-slab' > I've worked on </span></h1>
        <h1 className={`centered-text ${currentSection === 'Fun' && 'show'}`}> <span className='not-bold-robo-slab'>Now, let's have some </span> <span className='bold-robo-slab'>fun</span></h1>
        <h1 className={`centered-text ${currentSection === 'Contact' && 'show'}`}> <span className='not-bold-robo-slab' >Here's how you can </span> <span className='bold-robo-slab'>contact</span> <span className='not-bold-robo-slab' > me</span></h1>
      </div>

      <section id="Intro" className="intro-section">
        <div className="intro-panel"></div>
        <div className="intro-panel">
        <div className="intro-text-container">
          <div className="about-section" data-aos="fade-up" data-aos-duration="1800">
            <p className='DM'>I'm 21 years old and I grew up in Egypt. I got introduced to coding 
              through a fun stint at a hardware store early on and loved it. 
              I'm currently attending <span className='bold-DM'>The University of Minnesota 
              Twin Cities </span> for <span className='bold-DM'>Computer Science</span>. I also love space and movies 
              so I'll be minoring in Physics and Film. I'm looking forward to becoming an intern this coming summer!</p>
          </div>
          <div className="location-section" data-aos="fade-up" data-aos-duration="1800">
            <h3 className='header-3'>📍 Location</h3>
            <p className='grey'>Minneapolis, MN</p>
          </div>

          <div className="graduating-section" data-aos="fade-up" data-aos-duration="1800">
            <h3 className='header-3'>🎓 Graduating</h3>
            <p className='grey'>May 2025</p>
          </div>

          <div className="courses-section" data-aos="fade-up" data-aos-duration="1800">
            <h3 className='header-3'>📖 Courses Taken</h3>
            <p className='grey'>Algorithms & Data structures, Discrete Structures, Statistics and Probability, Functional Programming, Machine Architecture, Internet Programming, Object Oriented Programming, Computational Linear Algebra, Program Design, Operating Systems, UI Design, Machine Learning Fundamentals, Applied Machine Learning, Robotics</p>
          </div>

          <div className="skills-section" data-aos="fade-up" data-aos-duration="1800">
            <h3 className='header-3'>💪 Skills</h3>
            <p className='grey'>Languages: Python, C, JavaScript, SQL, Java, GraphQL, C++<br />Frameworks: Django, React, Flask, NumPy, Pandas, Swagger, Scrum, Agile, Docker<br />Tools: GIT, MySQL, CloudPilot, PostgreSQL, Bootstrap 4, CSS<br />Microservices: REST, JSON, WebAPI<br />Platforms: Linux, Windows, Azure SQL, Azure DevOps</p>
          </div>
        </div>

        </div>
      </section>

      <section id="Projects" className='project-section'>
        <div className="project-panel">
        </div>
        <div className="project-panel">
          <div className="projects-area">

             <div className='project'>
              <div className="project-image-container">
              <img src={projectImages.project1[project1Index]} alt="Project" className="project-image" />
              <button className="prev-button" onClick={handlePreviousProject1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-left-short" viewBox="0 0 16 17">
                <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                </svg>
              </button>
              <button className="next-button" onClick={handleNextProject1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-right-short" viewBox="0 0 16 17">
                <path  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
              </button>

              </div>
              <div className='click' onClick={() => window.location.href = "https://github.com/omarOG1010/Amazon-Drone-Simulation"}>
                <h3 className='proj-name'>Drone Delivery Simulation</h3>
                <p className='proj-text'>
                  A simulation of an Amazone-style drone delivery service. Also, has a 3D map of campus!
                </p>

                <div className="proj-perks">
                  <div className="proj-perk">JavaScript</div>
                  <div className="proj-perk">C++</div>
                  <div className="proj-perk">jQuery</div>
                  <div className="proj-perk">Docker</div>
                </div>
                
              </div>
            </div>

            <div className='project'>
              <div className="project-image-container">
            
              <img src={projectImages.project2[project2Index]} alt="Project" className="project-image" />
              <button className="prev-button" onClick={handlePreviousProject2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-left-short" viewBox="0 0 16 17">
                <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                </svg>
              </button>
              <button className="next-button" onClick={handleNextProject2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-right-short" viewBox="0 0 16 17">
                <path  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
              </button>

              </div>
              <div className='click' onClick={() => window.location.href = "https://github.com/omarOG1010/ASA_newsletter_Public"}>
                <h3 className='proj-name'>ASA Newsletter</h3>
                <p className='proj-text'>
                  A Newsletter for the Arab Student Association that offers quick sign up with mass emails sent biweekly.
                </p>
                <div className="proj-perks">
                  <div className="proj-perk">JavaScript</div>
                  <div className="proj-perk">Django</div>
                  <div className="proj-perk">SQL</div>
                  <div className="proj-perk">400+ Users</div>
                </div>
                
              </div>
            </div>

            <div className='project'>
              <div className="project-image-container">
              <img src={projectImages.project3[project3Index]} alt="Project" className="project-image" />
              <button className="prev-button" onClick={handlePreviousProject3}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-left-short" viewBox="0 0 16 17">
                <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                </svg>
              </button>
              <button className="next-button" onClick={handleNextProject3}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-right-short" viewBox="0 0 16 17">
                <path  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
              </button>

              </div>
              <div className='click' onClick={() => window.location.href = "https://github.com/omarOG1010/Space-Explorers-Alg"}>
                <h3 className='proj-name'>Space Explorers</h3>
                <p className='proj-text'>
                  A game created by TA's and I to help students learn Algorithms and Data structures.
                </p>

                <div className="proj-perks">
                  <div className="proj-perk">Java</div>
                  <div className="proj-perk">PublicAPI</div>
                  <div className="proj-perk">TA Project</div>
                  <div className="proj-perk">CSCI 1933</div>
                </div>
                
              </div>
            </div>

            <div className='project'>
              <div className="project-image-container">
                <img src="imgs/hennepin-proj.PNG" alt="Project" className="project-image" />
              </div>
              <div className='click' onClick={() => window.location.href = "https://github.com/omarOG1010/Hennepin-County-Internship-Projects/tree/main"}>
                <h3 className='proj-name'>License Management</h3>
                <p className='proj-text'>
                  A software that helps manage licenses for Hennepin County IT. Can't show full code for obvious reasons.
                </p>
                <div className="proj-perks">
                  <div className="proj-perk">Python</div>
                  <div className="proj-perk">Azure DevOps</div>
                  <div className="proj-perk">GraphQL</div>
                </div>
              </div>
            </div>

            <div className='project'>
              <div className="project-image-container">
              <img src="imgs/hennepin-proj.PNG" alt="Project" className="project-image" />
              <button className="prev-button" onClick={handlePreviousProject4}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-left-short" viewBox="0 0 16 17">
                <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                </svg>
              </button>
              <button className="next-button" onClick={handleNextProject4}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-right-short" viewBox="0 0 16 17">
                <path  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
              </button>

              </div>
              <div className='click' onClick={() => window.location.href = "https://github.com/omarOG1010/Amazon-Drone-Simulation"}>
                <h3 className='proj-name'>NBA Player Point Prediction</h3>
                <p className='proj-text'>
                  Using a Web Scraper + LLM libraries in order to better predict points scored by a player
                </p>

                <div className="proj-perks">
                  <div className="proj-perk">Python</div>
                  <div className="proj-perk">Sklearn</div>
                  <div className="proj-perk">Pandas</div>
                  <div className="proj-perk">BeautifulSoup</div>
                </div>
                
              </div>
            </div>

            <div className='project'>
              <div className="project-image-container">
                <img src="imgs/didit.png" alt="Project" className="project-image" />
              </div>
              <div className='click' onClick={() => window.location.href = "https://github.com/omarOG1010/my-portfolio"}>
                <h3 className='proj-name'>whodidit.dev</h3>
                <p className='proj-text'>
                  Oh well you're on it silly!
                </p>
                <div className="proj-perks">
                  <div className="proj-perk">JavaScript</div>
                  <div className="proj-perk">React</div>
                  <div className="proj-perk">Bootstrap</div>
                  <div className="proj-perk">Railway</div>
                </div>
              </div>
            </div>

            
            
          </div>
        </div>
    </section>

      <section id="Fun" className='fun-section'>
        <div className="fun-panel"></div>
        <div className="fun-panel">
          <div className="fun-area">
            <div className="fun"  data-aos-duration="2000" data-aos-delay="500">
           

              <p className='fun-text'> Whenever I see a <span className='bold-DM'>film</span> I dissolve myself in it - <span className='bold-DM'>Abbas Kairostami</span></p>
              <p className='fun-text'> <span className='bold-DM'>Cinema</span> is the ultimate pervert art. It doesn't give you what you desire it tells you how to desire. -<span className='bold-DM'>Slavoj Žižek</span> </p>
              <img src="imgs/collage1.jpg" alt="Cinema" className="fun-image" />

              <p className='fun-text'>I'll forever be in debt to this medium. So, I've decided to contribute to it by writing a couple of short films
                Until they're done here's a bunch of my favorite films and Tv shows</p>

                <div className="movie-list">
                  <div className="list-container">
                    <ol className="list-half">
                      <li>City of God</li>
                      <li>Django</li>
                      <li>La Haine</li>
                      <li>Hot Fuzz</li>
                      <li>Manchester by The Sea </li>
                    </ol>
                    <ol className="list-half">
                      <li>The Sopranos</li>
                      <li>Succession</li>
                      <li>Wild Wild Country</li>
                      <li>F is for Family</li>
                      <li>Atlanta</li>
                    </ol>
                    <ol className="list-half">
                      <li>Ramy</li>
                      <li>Castlevania</li>
                      <li>Love Death Robots</li>
                      <li>Top Boy</li>
                      <li>The Death of Stalin</li>
                    </ol>
                  </div>
                </div>

            </div>

            <div className="fun"  data-aos-duration="2000" data-aos-delay="1000">
              <p className='fun-text'>An emotional debt is hard to square - <span className='bold-DM'> Iceberg Slim</span></p>
              <p className='fun-text'> It is we who fabricate our truths and it is not reality that makes us believe - <span className='bold-DM'>Paul Veyne</span></p>
              <img src="imgs/books.jpg" alt="books" className="fun-image" />

              <p className='fun-text'>I used to hate reading books, since I'm primarily a visual learner, but overtime I changed. 
                I faced many challenges towards my goals and mentality with which led me to the books listed here. </p>
              
                <div className="book-list">
                  <ul className="horizontal-list">
                    <li>Did The Greeks Believe in Their Myths</li>
                    <li>Pimp: The Story of My Life</li>
                    <li>Egypt's Housing Crisis</li>
                    
                  </ul>
                </div>
              
            </div>

            <div className="fun"  data-aos-duration="2000" data-aos-delay="2000">
              <p className='fun-text'> <span className='bold-DM'>Football</span> or Soccer is more than a sport. It's a moment, a vibe, a culture that's in all of us. 
                If you're lucky like me you got to unlock it with friends on a beach, in the streets, on a pitch, or in a stadium if you're really lucky
              </p>

              <img src="imgs/barca.jpg" alt="football" className="fun-image"/>
              <img src="imgs/foot.jpg" alt="football" className="fun-image"/>

              
                    
                
              
            </div>
          </div>
        </div>

      </section>
      <section id="Contact" className='contact-section'>
        <div className="contact-panel"></div>
        <div className="contact-panel">
          <div className="contact-area">
            <div className="contact-info">
              <div className="contact-info-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" className="bi bi-mailbox2-flag" viewBox="0 0 16 16">
                  <path d="M10.5 8.5V3.707l.854-.853A.5.5 0 0 0 11.5 2.5v-2A.5.5 0 0 0 11 0H9.5a.5.5 0 0 0-.5.5v8z"/>
                  <path d="M4 3h4v1H6.646A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m.585 4.157C4.836 7.264 5 7.334 5 7a1 1 0 0 0-2 0c0 .334.164.264.415.157C3.58 7.087 3.782 7 4 7s.42.086.585.157"/>
                </svg>
                <a className='contact-word' href="mailto:omarahmedggg@gmail.com">omarahmedggg@gmail.com</a>
              </div>
              <div className="contact-info-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
                <a className='contact-word' href="https://www.linkedin.com/in/omar-elgohary/">linkedin.com/in/omar-elgohary/</a>
              </div>
              <div className="contact-info-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
                <a className='contact-word' href="https://github.com/omarOG1010">github.com/omarOG1010</a>
              </div>
              <div className="contact-info-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
                <a href="https://www.instagram.com/accounts/login/?hl=en" className='contact-word'>@omargohary1</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default App;







// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { NavBar } from './components/NavBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ScrollButtons } from './components/ScrollButtons';

// function App() {
//   const [currentSection, setCurrentSection] = useState('Intro');
//   const [currentPanel, setCurrentPanel] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section');
//       const scrollPosition = window.scrollY + window.innerHeight / 2;

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;

//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//           setCurrentSection(section.id);
//         }
//       });

//       const panels = document.querySelectorAll('.intro-panel');
//       panels.forEach((panel, index) => {
//         const panelTop = panel.offsetTop;
//         const panelHeight = panel.offsetHeight;

//         if (scrollPosition >= panelTop && scrollPosition < panelTop + panelHeight) {
//           setCurrentPanel(index + 1);
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const getText = () => {
//     if (currentSection === 'Intro') {
//       if (currentPanel === 1) return 'Welcome to the Intro Section';
//       if (currentPanel === 2) return 'This is the second panel of the Intro Section';
//     } else if (currentSection === 'Projects') {
//       return 'Projects Section';
//     } else if (currentSection === 'Fun') {
//       return 'Fun Section';
//     } else if (currentSection === 'Contact') {
//       return 'Contact Section';
//     }
//     return '';
//   };

//   return (
//     <div className="App">
//       <NavBar />
//       <ScrollButtons />
//       <div className="dynamic-text">
//         <h2>{getText()}</h2>
//       </div>
//       <section id="Intro" className="intro-section">
//         <div className="intro-panel">
//           <h2>Welcome</h2>
//         </div>
//         <div className="intro-panel"></div>
//       </section>

//       <section id="Projects" style={{ height: '100vh' }}>
//         <h1>Projects</h1>
//       </section>
//       <section id="Fun" style={{ height: '100vh' }}>
//         <h1>Fun</h1>
//       </section>
//       <section id="Contact" style={{ height: '100vh' }}>
//         <h1>Contact</h1>
//       </section>
//     </div>
//   );
// }

// export default App;

