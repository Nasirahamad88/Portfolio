import React from 'react';
import './AboutMe.css';
import profilePic from '../nasir1-min.png';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <h2 className="section-header"> <span> Welcome To My Profile</span></h2>
        <img src={profilePic} alt="Profile Picture" className="profile-pic" />
        <p className="about-me-text">Hi, I'm Nasir Ahamad. I'm a web developer with over 7 years of experience in creating engaging and user-friendly websites. I specialize in React and have worked with clients in a variety of industries, including e-commerce, finance, and education.</p>
        <p className="about-me-text">When I'm not coding, I enjoy hiking and photography. I'm also a dog lover and spend most of my free time volunteering at my local animal shelter.</p>
        <a href="/resume" className="btn">View Resume</a>
      </div>
    </section>
  );
}

export default AboutMe;
