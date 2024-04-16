import React from "react";
import Save from "../Assets/saving-data.svg";
import Reminder from "../Assets/caring.svg";
import Monitorhis from "../Assets/help.svg";

const Work = () => {
  const workInfoData = [
    {
      image: Save,
      title: "Users History",
      text: "Securely store and access your medical records anytime, anywhere for a comprehensive view of your health journey.",
    },
    {
      image: Reminder,
      title: "Reminders",
      text: "Stay on top of your medications and appointments with timely alerts and notifications.",
    },
    {
      image: Monitorhis,
      title: "Monitorings",
      text: "Track your symptoms and health metrics over time to gain valuable insights and trends for better health management.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Getting started with Medimate is simple. Create an account and
          securely add your medical history. Easily input your health
          information, track symptoms, and manage your medications. View your
          medical records at a glance and receive personalized health insights.
          Medimate keeps you connected to your healthcare, making health
          management a breeze.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
