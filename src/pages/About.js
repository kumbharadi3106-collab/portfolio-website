import React from 'react';
import './About.css';

const education = {
  degree: 'B.Tech in Computer Science Engineering',
  university: 'ITM Skills University',
  location: 'Kharghar, Navi Mumbai',
  year: '2025 to 2029',
  status: 'Currently in 1st Year',
};

const interests = [
  'Python Programming',
  'React JS',
  'Artificial Intelligence',
  'Web Development',
  'Data Structures and Algorithms',
  'Problem Solving',
  'Git and GitHub',
  'Open Source',
];

function About() {
  return (
    <div className="about">
      <div className="section">
        <h2 className="section-title">About Me</h2>

        <div className="bio-card glass-card">
          <div className="bio-avatar">AK</div>
          <div className="bio-text">
            <h3 className="bio-name">Aditya Kumbhar</h3>
            <p className="bio-role">B.Tech CSE Student | Curious Learner | Tech Enthusiast</p>
            <p className="bio-description">
              Hey! I am a <strong>1st year B.Tech Computer Science student</strong> at{' '}
              <strong>ITM Skills University, Kharghar, Navi Mumbai</strong>. I am passionate
              about technology, programming, and building things that solve real problems.
            </p>
            <p className="bio-description">
              I love exploring <strong>Python</strong>, <strong>React JS</strong>, and learning
              about <strong>Artificial Intelligence</strong>. I believe in learning by doing so
              I build small projects to improve my skills every day.
            </p>
            <p className="bio-description">
              Currently focused on mastering <strong>Data Structures and Algorithms</strong>,
              sharpening my web development skills, and contributing to beginner friendly
              open source projects. My goal is to become a full stack developer and AI engineer!
            </p>
          </div>
        </div>

        <div className="education-section">
          <h3 className="sub-title">Education</h3>
          <div className="education-card glass-card">
            <div className="edu-header">
              <span className="edu-icon">[Inst]</span>
              <div>
                <h4 className="edu-degree">{education.degree}</h4>
                <p className="edu-university">{education.university}</p>
                <p className="edu-location">Location: {education.location}</p>
              </div>
            </div>
            <div className="edu-footer">
              <span className="edu-year">Duration: {education.year}</span>
              <span className="edu-badge">{education.status}</span>
            </div>
          </div>
        </div>

        <div className="interests-section">
          <h3 className="sub-title">Interests</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div
                key={interest}
                className="interest-card glass-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <span className="interest-icon">&gt;</span>
                <span className="interest-label">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
