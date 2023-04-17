import React from 'react';
import './Body.css';

function Body() {
  return (
    <div className="container">
      <section>
        <h2 className="section-header">About Me</h2>
        <div className="card">
          <h3>Hi, I'm John Doe</h3>
          <p>I'm a web developer with 5 years of experience in front-end development. I specialize in React and have worked on a variety of projects, including e-commerce sites and web applications.</p>
          <a href="/about" className="btn">Learn More</a>
        </div>
      </section>
      <section>
        <h2 className="section-header">Projects</h2>
        <div className="card">
          <h3>E-commerce Website</h3>
          <p>This website was built using React and allows users to browse and purchase products online. It features a shopping cart, product search, and a user login system.</p>
          <a href="/projects" className="btn">View Project</a>
        </div>
        <div className="card">
          <h3>Task Management App</h3>
          <p>This web application was built using React and allows users to manage their tasks and projects. It features a drag-and-drop interface and real-time updates.</p>
          <a href="/projects" className="btn">View Project</a>
        </div>
      </section>
    </div>
  );
}

export default Body;
