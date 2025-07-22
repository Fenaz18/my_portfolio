import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
 

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

 

  return (
    <div className="app">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="icons">
            <a href="https://github.com/Fenaz18" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/fenaz-833455267/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            {/* <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <BsSun /> : <BsMoon />}
            </button> */}
          </div>
        </nav>
      </header>

      <main className="main-content" >
        <section id="home" className="intro-section" >
          <div className="intro-container">
            <img src="\yourphoto.png" alt="Your Photo" className="center-photo" />
            <div className="intro-text">
              <h1 className="intro-heading">Hi, I am Fenaz</h1>
              <p className="plain-role">Full Stack Web Developer</p>
              <a href="/resume.pdf" className="resume-button" download>Download Resume</a>
            </div>
          </div>
        </section>
      </main>

      <section id="about" className="about-section">
        <h2>ABOUT</h2>
<p>
  I am a final-year Computer Science Engineering student at PES College of Engineering, with a passion for building impactful digital experiences. I enjoy developing both frontend and backend systems and am always eager to learn and work with modern web technologies. Currently, I am exploring AI-based development methods and applying prompt engineering techniques to build projects more efficiently — focusing on logic, innovation, and user experience. I strive to blend creativity with functionality to deliver meaningful tech solutions.
</p>

<p>I have completed multiple certifications that complement my academic and project work:<br/>
    <b>Eduskills - AI/ML Virtual Internship:</b> Gained hands-on exposure to real-world applications of Artificial Intelligence and Machine Learning through guided projects and curated learning modules.<br/>
    <b>Infosys Springboard - Basics of Python Certification:</b> Completed a foundational certification in Python programming from Infosys Springboard.<br/>
    <b>Infosys Springboard – Java Foundation Certification:</b> Certified in Java Foundation by Infosys Springboard, covering essential Java programming principles.<br/>

</p>

  <div className="education-container">
  <h3>Education</h3>
  <ul>
    <li className="education-item">
      <div className="education-content">
        <strong>Bachelor of Engineering (Computer Science)</strong><br />
        PES College of Engineering, Mandya<br />
        CGPA: 8.37
      </div>
      <div className="education-year">2022 – 2026</div>
    </li>

    <li className="education-item">
      <div className="education-content">
        <strong>12th Grade (PUC)</strong><br />
        Sadvidya PU College, Mandya<br />
        Percentage: 89%
      </div>
      <div className="education-year">2020 – 2022</div>
    </li>

    <li className="education-item">
      <div className="education-content">
        <strong>10th Grade (SSLC)</strong><br />
        Chinmaya English High School, Mandya<br />
        Percentage: 83%
      </div>
      <div className="education-year">2020</div>
    </li>
  </ul>
</div>
</section>


<section className="skills-section" id="skills">
  <h2 className="text-3xl font-bold text-center mb-6">MY SKILLS</h2>
  <div className="flex flex-wrap justify-center gap-9">
  
   <div className="flex gap-8 flex-wrap justify-center">
    <span className="skill-badge bg-blue-600"><i className="devicon-react-plain colored"></i> React</span>
    <span className="skill-badge bg-green-700"><i className="devicon-spring-plain colored"></i>SpringBoot</span>
    <span className="skill-badge bg-gray-600"><i className="devicon-nodejs-plain colored"></i>Node.js</span>
    <span className="skill-badge bg-gray-200 dark:bg-gray-800 dark:text-white text-black">
    <i className="devicon-html5-plain colored"></i>
    <i className="devicon-css3-plain colored" ></i>HTML/CSS
    </span>
    <span className="skill-badge bg-yellow-500"><i className="devicon-mongodb-plain colored"></i>MongoDB</span>
    <span className="skill-badge bg-orange-600"><i className="devicon-mysql-plain colored"></i>MySQL</span>
</div>
    
    <div className="flex gap-4 flex-wrap justify-center mt-4">
    <span className="skill-badge bg-red-600"><i className="devicon-java-plain colored"></i>Java</span>
    <span className="skill-badge bg-blue-500"><i className="devicon-c-plain colored"></i>C</span>
    <span className="skill-badge bg-[#02569B]"><i className="devicon-cplusplus-plain colored"></i> C++</span>
    <span className="skill-badge bg-yellow-600"><i className="devicon-python-plain colored"></i>Python</span>
    <span className="skill-badge bg-gray-600"><i className="devicon-javascript-plain colored"></i>javascript</span>
    <span className="skill-badge bg-purple-600"><i className="devicon-figma-plain colored"></i>Figma</span>
    <span className="skill-badge bg-gray-600"><i className="devicon-github-plain colored"></i>Git/GitHub</span>
  </div>
  </div>
</section>


<section class="projects-section" id="projects">
  <h2>PROJECTS</h2>

  <div class="projects-container">
   
    <div class="project-card">
      <div class="project-image"></div>
      <div class="project-content">
        <h3>Library Management System </h3>
        <p>
A full-stack library management system with secure user authentication and intuitive book handling interface.

        </p>
        <div class="tech-stack">
          <span>HTML/CSS</span>
          <span>JavaScript</span>
          <span>MySQL</span>
          <span>Java with JSP</span>
        </div>
        <a href="https://github.com/Fenaz18/LibraryManagementSystem" class="github-btn">GitHub</a>
      </div>
    </div>

    
    <div class="project-card">
      <div class="project-image"></div>
      <div class="project-content">
        <h3>Educational Learning Platform </h3>
        <p>
Built a learning app with quizzes, videos, and real-time collaboration.<br/> Added JWT auth and a clean, responsive UI for all devices.       </p>
        <div class="tech-stack">
          <span>HTML/CSS</span>
          <span>JavaScript</span>
          <span>MySQL</span>
          <span>Java with JSP</span>
        </div>
        <a href="https://github.com/Fenaz18/EducationalLearningPlatform" class="github-btn">GitHub</a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-image"></div>
      <div class="project-content">
        <h3>Rice Pest Prediction System</h3>
        <p>
Built a rice pest detector using ResNet18 & YOLOv8 (97% accuracy).<br/>Deployed interactive prediction UI using Gradio with Grad-CAM visualization.

        </p>
        <div class="tech-stack">
          <span>Python</span>
          <span>PyTorch</span>
          <span>ResNet18</span>
          <span>YOLOv8</span>
          <span>Grad-CAM</span>
          <span>Gradio</span>
        </div>
        <a href="https://github.com/Fenaz18/crop_project01" class="github-btn">GitHub</a>
      </div>
    </div>


    <div class="project-card">
      <div class="project-image"></div>
      <div class="project-content">
        <h3>Customer Feedback Management System</h3>
        <p>
          Collects user feedback via ratings and comments<br/>Enabled submission, editing, deleting, viewing and insights via average rating and secure APIs.
        </p>
        <div class="tech-stack">
          <span>HTML/CSS</span>
          <span>SpringBoot</span>
          <span>MySQL</span>
         
          
        </div>
        <a href="https://github.com/Fenaz18/Customer-feedback-" class="github-btn">GitHub</a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-image"></div>
      <div class="project-content">
        <h3>GreenBasket: Grocery Ordering Platform</h3>
        <p>
          Built a Farmer-to-Consumer e-commerce platform eliminating third-party intermediaries<br/>Ensured smooth ordering, secure login.
        </p>
        <div class="tech-stack">
          <span>HTML/CSS</span>
          <span>SpringBoot</span>
          <span>MySQL</span>
          <span>RESTful APIs</span>
          

         
          
        </div>
        <a href="https://github.com/Fenaz18/GreenBascket" class="github-btn">GitHub</a>
      </div>
    </div>


    
  </div>
</section>

<section class="contact-container" id="contact">
  <h2>Contact Me</h2>
  

  <div class="contact-box">
    <p class="contact-text">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>

    <div class="contact-details">
      <p><i class="fas fa-envelope"></i> fenazshereen@gmail.com</p>
      <p><i class="fas fa-phone"></i> +91 8197343857</p>
      <p><i class="fas fa-map-marker-alt"></i> Mandya, Karnataka, India</p>
    </div>

    <p class="social-title">Find me on social media:</p>
    <div class="social-links">
      <a href="https://github.com/Fenaz18" class="github"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/fenaz-833455267/" class="linkedin"><i class="fab fa-linkedin"></i></a>
      <a href="https://www.instagram.com/finaz6373/" class="instagram"><i class="fab fa-instagram"></i></a>
      {/* <a href="https://leetcode.com/u/Fenaz_Fin/" class="code"><i class="fas fa-code"></i></a> */}
    </div>
  </div>
</section>





    </div>
  );
}

export default App;
