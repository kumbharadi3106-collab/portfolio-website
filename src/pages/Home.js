import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const typingRoles = [
  'Python Developer',
  'React JS Learner',
  'AI Enthusiast',
  'DSA Enthusiast',
];

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = typingRoles[roleIndex];
    let speed = isDeleting ? 60 : 110;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typingRoles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content fade-in">
          <div className="avatar-container">
            <div className="avatar">
              <span className="avatar-initials">AK</span>
            </div>
            <div className="avatar-ring"></div>
          </div>

          <p className="greeting">Hello, World!</p>

          <h1 className="hero-name">
            Hi, I'm <span className="name-highlight">Aditya Kumbhar</span>
          </h1>

          <p className="hero-subtitle">B.Tech Computer Science Student</p>

          <div className="typing-container">
            <span className="typing-prefix">I'm a </span>
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>

          <div className="social-links">
            <a href="https://github.com/kumbharadi3106-collab" target="_blank" rel="noreferrer" className="social-link">
              [GitHub]
            </a>
            <a href="https://www.linkedin.com/in/aditya-kumbhar-51195b284" target="_blank" rel="noreferrer" className="social-link">
              [LinkedIn]
            </a>
            <a href="mailto:kumbharadi3106@gmail.com" className="social-link">
              [Email]
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
