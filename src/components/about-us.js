import React from 'react';
import './about-us.css';

const AboutUs = () => {
  return (
    <section className="about-us-placeholder">
      <h2>About Us!</h2>
      <h3>Who We Are</h3>
      <div className="about-us-details">
        <p>
          Risk Radar consists of a dynamic team of five undergraduate Information Science students at the University of Colorado, Boulder.
          With our shared vision to create a product that encompasses major aspects of risk within communities, we channeled our skills learned
          through technical and theoretical coursework in UX/UI, Front-End Development, GIS, and Data Management to create a cohesive dashboard 
          that uniquely and effectively communicates crime levels, cost of living, infrastructure quality, and the impact of natural disasters 
          in an interactive and visually appealing website using Figma, ArcGIS Pro & Online, JS React, and ethnographic research practices.
        </p>
        <p>Our Team Members:</p>
        <ul className="about-list">
          <li>Colm Nkposong: Data Management, GIS Development, Calculator Methodology</li>
          <li>Lucas Williamson: Data Management, GIS Development, Web Deployment</li>
          <li>Emilie Barbattini: Data Management, Front-End Development, Web Deployment</li>
          <li>Michael Vanner: UX/UI Prototyping, Front-End Development</li>
          <li>Max Gong: UX/UI Prototyping, Front-End Development</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
