import React from "react";
import BannerImage from "../Assets/home-banner-image.svg";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Medical History at Your Fingertips
          </h1>
          <p className="primary-text">
          Empower your health journey with a comprehensive medical timeline.
          </p>
          <button className="secondary-button">
            Register here <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
