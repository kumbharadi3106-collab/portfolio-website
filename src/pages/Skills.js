import React, { useState } from 'react';
import './Skills.css';

const skills = [
  { name: 'Python', category: 'Programming' },
  { name: 'HTML', category: 'Web' },
  { name: 'CSS', category: 'Web' },
  { name: 'JavaScript', category: 'Web' },
  { name: 'React JS', category: 'Web' },
  { name: 'Data Structures and Algorithms', category: 'CS Fundamentals' },
  { name: 'Git and GitHub', category: 'Tools' },
  { name: 'Artificial Intelligence Basics', category: 'AI/ML' },
  { name: 'Problem Solving', category: 'CS Fundamentals' },
];

const categories = ['All', ...new Set(skills.map((s) => s.category))];

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <div className="skills">
      <div className="section">
        <h2 className="section-title">My Skills</h2>

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

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="skill-card-wrapper fade-in"
            >
              <div className="skill-card glass-card">
                <div className="skill-header">
                  <span className="skill-icon">&gt;</span>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-category">{skill.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="learning-note glass-card">
          <span className="note-icon">[Note]</span>
          <p>
            I am always learning! These skills reflect my current understanding as a{' '}
            <strong>1st year CSE student</strong>. Every day I am improving through practice,
            projects, and online resources.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
