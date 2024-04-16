import React, { useState } from "react";
import BannerImage from "../Assets/home-banner-image.svg";
import { FiArrowRight } from "react-icons/fi";
import DialogBox from "./DialogBox";

const Home = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
    document.body.classList.add('no-scroll');
  
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleCloseDialog = () => {
    setDialogOpen(false);
    document.body.classList.remove('no-scroll');
  };
  
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
          <div>
            <button className="secondary-button" onClick={handleButtonClick}>
              Register here <FiArrowRight />{" "}
            </button>
            {isDialogOpen && (
              <div className="overlay">
                <DialogBox onClose={handleCloseDialog} />
              </div>
            )}
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
