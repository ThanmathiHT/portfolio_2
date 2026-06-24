import "./App.css";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "Python",
  ];

  const projects = [
    {
      title: "Smart Attendance System",
      description:
        "A MERN stack attendance management system with student and admin dashboards.",
    },
    {
      title: "Plant Disease Detection",
      description:
        "AI-based system that detects plant diseases using image processing.",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern responsive portfolio built using React and CSS.",
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

      {/* Hero */}

      <section id="home" className="hero">

        <h3>Hello, I'm</h3>

        <h1>Thanmathi</h1>

        <h2>MERN Stack Developer</h2>

        <p>
          Passionate about building responsive websites,
          full stack applications and solving real-world problems.
        </p>

        <button>Download Resume</button>

      </section>

      {/* About */}

      <section id="about" className="section">

        <h2>About Me</h2>

        <p>
          I am an engineering student passionate about web development,
          full stack applications and creating modern user interfaces.

          I enjoy learning new technologies and building projects that
          solve practical problems.
        </p>

      </section>

      {/* Skills */}

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

      {/* Projects */}

      <section id="projects" className="section">

        <h2>Projects</h2>

        <div className="projects-container">

          {projects.map((project, index) => (

            <div key={index} className="project-card">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

            </div>

          ))}

        </div>

      </section>

      {/* Contact */}

      <section id="contact" className="section">

        <h2>Contact Me</h2>

        <p>Email: thanmathi2006@gmail.com</p>

        <p>Phone: +91 9443946200</p>

        <p>Location: Tamil Nadu, India</p>

      </section>

      {/* Footer */}

      <footer>

        © 2026 Thanmathi | Built with React

      </footer>
    </>
  );
}

export default App;