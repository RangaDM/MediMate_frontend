import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
    name: "John Doe",
    image: ProfilePic
  },
  {
    text: "Medimate has revolutionized how I manage my health. It's incredibly user-friendly and convenient.",
    name: "Jane Smith",
    image: ProfilePic // Replace with the actual image reference for Jane Smith
  },
  {
    text: "I love the reminders feature! It's made staying on top of my medication so much easier.",
    name: "Michael Brown",
    image: ProfilePic // Replace with the actual image reference for Michael Brown
  },
  // Add more testimonials here
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
      <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-section-bottom">
          <img src={testimonial.image} alt="" className="tes-img"/>
          <p>{testimonial.text}</p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>{testimonial.name}</h2>
        </div>
      ))}
    </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
