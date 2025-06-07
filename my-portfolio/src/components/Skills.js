import React from 'react';
import './Skills.css';

const skills = [
  'HTML',
  'CSS',
  'React',
  'Python',
  'Java',
  'C',
  'Data Structures & Algorithms'
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>💡 My Core Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
