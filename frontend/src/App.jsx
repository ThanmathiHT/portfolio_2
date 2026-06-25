import "./App.css";

function App() {
const skills = [
"HTML",
"CSS",
"JavaScript",
"React.js",
"Node.js",
"Express.js",
"MongoDB",
"Git",
"Python",
"Java",
"C",
"C++",
];

const projects = [
{
title: "Smart Attendance Management System",
description:
"A full-stack MERN application that stores daily student attendance in MongoDB Atlas. Built using React.js, Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript. Features attendance tracking, automatic daily records, attendance reset functionality, and a responsive user interface.",
link: "https://attendance-system-frontend-78y0.onrender.com/",
},
{
title: "Portable Water Test Pen",
description:
"An IoT-based portable device designed to analyze water quality parameters such as pH, TDS, and temperature. The system provides quick and accurate water quality testing for drinking water safety and environmental monitoring.",
},
{
title: "Wearable Sweat Salt Monitor",
description:
"A smart wearable device that monitors salt concentration in sweat during physical activity. The system helps users track hydration levels and electrolyte balance, making it useful for athletes and health monitoring applications.",
},
{
title: "Portfolio Website",
description:
"A modern responsive portfolio website built using React.js and CSS to showcase skills, projects, achievements, and contact information with a professional user interface.",
},
];

return (
<>
{/* Navbar */}
<nav className="navbar">
<h2 className="logo">Portfolio</h2>

    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  {/* Hero Section */}
  <section id="home" className="hero">
    <h3>Hello, I'm</h3>

    <h1>Thanmathi H T</h1>

    <h2>Full Stack MERN Developer | EIE Student</h2>

    <p>
      Passionate about building responsive web applications,
      IoT solutions, and innovative engineering projects that
      solve real-world problems.
    </p>

    <button>Download Resume</button>
  </section>

  {/* About Section */}
  <section id="about" className="section">
    <h2>About Me</h2>

    <p>
      I am an Electronics and Instrumentation Engineering student with a
      strong interest in IoT, Embedded Systems and Full Stack Web Development. 
      I enjoy building modern web applications using the MERN
      stack and developing innovative hardware-based solutions for
      real-world problems.

      My areas of interest include React.js, Node.js, Express.js,
      MongoDB, Programming, IoT, and Smart Monitoring Systems.
    </p>
  </section>

  {/* Skills Section */}
  <section id="skills" className="section">
    <h2>Skills</h2>

    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          {skill}
        </div>
      ))}
    </div>
  </section>

  {/* Projects Section */}
  <section id="projects" className="section">
    <h2>Projects</h2>

    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Live Project →
            </a>
          )}

        </div>
      ))}
    </div>
  </section>

  {/* Contact Section */}
  <section id="contact" className="section">
    <h2>Contact Me</h2>

    <p>Email: thanmathi2006@gmail.com</p>

    <p>Phone: +91 9443946200</p>

    <p>Location: Tamil Nadu, India</p>
  </section>

  {/* Footer */}
  <footer>
    © 2026 Thanmathi H T | Built with React.js
  </footer>
</>

);
}

export default App;