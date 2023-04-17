import React from "react";
import "./SkillSection.css";

const SkillSection = () => {
  return (
    <section className="skill-section">
      <div className="container">
        <h2 className="section-header">My Skills</h2>
        <div className="skills">
          <div className="skill">
            <i className="fab fa-html5"></i>
            <h3>HTML5</h3>
            <p>Proficient</p>
          </div>
          <div className="skill">
            <i className="fab fa-css3-alt"></i>
            <h3>CSS3</h3>
            <p>Proficient</p>
          </div>
          <div className="skill">
            <i className="fab fa-js"></i>
            <h3>JavaScript</h3>
            <p>Proficient</p>
          </div>
          <div className="skill">
            <i className="fab fa-react"></i>
            <h3>React</h3>
            <p>Intermediate</p>
          </div>
          <div className="skill">
            <i className="fab fa-node-js"></i>
            <h3>Node.js</h3>
            <p>Intermediate</p>
          </div>
          <div className="skill">
            <i className="fab fa-git"></i>
            <h3>Git</h3>
            <p>Proficient</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
