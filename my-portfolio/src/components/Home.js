import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Hi, I’m Vishwajith</h1>
        <p>A passionate Web developer crafting beautiful websites.</p>
        <a href="#projects" className="btn-primary">See My Work</a>
      </div>
    </section>
  );
}

export default Home;
