import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Task Tracker using React JS',
    description: 'A web application to add, delete, and manage tasks, built to practice state management and event handling.',
    tech: ['React JS', 'CSS', 'JavaScript'],
    github: 'https://github.com/kumbharadi3106-collab/Task-Tracker-using-React-JS',
    category: 'React',
  },
  {
    id: 2,
    title: 'Online Appointment Booking System',
    description: 'A reservation system allowing users to select slots, schedule bookings, and view current availability.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/kumbharadi3106-collab/Online-Appointment-Booking-System',
    category: 'Web',
  },
  {
    id: 3,
    title: 'Emoji Guess Web Game',
    description: 'A simple browser game where players guess phrases from emoji clues, featuring score tracking.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/kumbharadi3106-collab/Emoji-Guess-Web-Game',
    category: 'Web',
  },
  {
    id: 4,
    title: 'Exam Result Analyzer using C++',
    description: 'A utility program that processes student grades, calculates averages, and generates simple result sheets.',
    tech: ['C++'],
    github: 'https://github.com/kumbharadi3106-collab/Exam-Result-Analyzer-using-C-',
    category: 'C++',
  },
  {
    id: 5,
    title: 'Restaurant Popularity Chart Using Python',
    description: 'A Python script using data analysis libraries to read restaurant metrics and plot visual bar charts of popularity.',
    tech: ['Python', 'Matplotlib'],
    github: 'https://github.com/kumbharadi3106-collab/Restaurant-Popularity-Chart-Using-Python',
    category: 'Python',
  },
  {
    id: 6,
    title: 'SVG Animations in HTML and CSS',
    description: 'A visual web project showcasing paths and inline SVG shapes animated with CSS transitions.',
    tech: ['HTML', 'CSS', 'SVG'],
    github: 'https://github.com/kumbharadi3106-collab/SVG-animations-in-html-and-css',
    category: 'Web',
  },
];

const categories = ['All', ...new Set(projects.map((p) => p.category))];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="projects">
      <div className="section">
        <h2 className="section-title">My Projects</h2>

        <div className="github-banner glass-card">
          <span className="github-icon">[Git]</span>
          <div>
            <p className="github-text">
              All my projects are available on GitHub. I am continuously working on new ideas!
            </p>
            <a
              href="https://github.com/kumbharadi3106-collab"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              Visit GitHub Profile ->
            </a>
          </div>
        </div>

        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card glass-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <span className="project-icon">&gt;</span>
                <span className="project-category-badge">{project.category}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-desc">{project.description}</p>

              <div className="tech-tags">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="view-code-btn"
              >
                [View Code]
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
