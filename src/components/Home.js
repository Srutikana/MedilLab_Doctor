import React from 'react';
import './Home.css'; // Import the custom CSS file

const Home = () => {
  return (
    <div>
      {/* Full-screen Carousel */}
      <div className="carousel">
        <div className="carousel-slide active">
          <div className="slide-content">
            <h2>MediLab</h2>
            <p>Medilab is committed to advancing healthcare through cutting-edge diagnostics and personalized medical solutions. Our state-of-the-art laboratory and expert team ensure precise, reliable results for your health and well-being</p>
            <button className="btn-primary">Learn more</button>
          </div>
        </div>
      </div>

      {/* Section Below Carousel */}
      <div className="content-section">
        <div className="content-box">
          <img src="/assets/med.png" alt="Description 1" className="circle-image" />
          <h5>Medicine</h5>
          <p>Medicine that heals with precision, backed by science and compassion at Medilab.</p>
        </div>
        <div className="content-box">
          <img src="/assets/lab.jpg" alt="Description 2" className="circle-image" />
          <h5>Laboratory</h5>
          <p>Advanced laboratory services providing accurate and reliable results for better healthcare solutions at Medilab</p>
        </div>
        <div className="content-box">
          <img src="/assets/doctor.jpg" alt="Description 3" className="circle-image" />
          <h5>Doctor</h5>
          <p>Expert doctors dedicated to delivering personalized care and innovative treatments at Medilab</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
