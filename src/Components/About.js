import React from "react";
import AboutBackgroundImage from "../Assets/about-background-image.svg";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" className="about-img"/>
      </div>
      <div className="middel-sec"></div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Your Health at a Glance
        </h1>
        <p className="primary-text">
        Medimate puts your medical history at your fingertips. Securely store and organize your health records, track your symptoms, and access personalized health insights. Stay informed and take control of your health journey with ease.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
