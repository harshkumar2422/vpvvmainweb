import React from "react";
import "./HomePage.css";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";

// import logoo from "../Components/HomeImg/logoo.png";
// import loogo from "../Components/HomeImg/loogo.png";
// import logotook from "../Components/HomeImg/logotook.png";

// Carousel images

import slide3 from "../HomeImg/carousel1.png";
import slide1 from "../HomeImg/carousel2.png";
import slide2 from "../HomeImg/carousel3.png";

import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Footer from "./../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      {/* ===== Carousel Start ===== */}
      <div className="carousel-wrapper">
        <Carousel fade interval={3000} controls indicators>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={slide1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Innovation for the Future</h3>
              <p>Driving technology that empowers people everywhere.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={slide2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Building Together</h3>
              <p>Collaboration is the key to sustainable success.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={slide3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Smart Solutions</h3>
              <p>Transforming ideas into impactful products.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* ===== Carousel End ===== */}
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Fostering sustainable growth for a prosperous India</h1>
          <p>Empowering progress for a stronger India.</p>
        </div>
      </section>

      {/* Other Sections (your existing code) */}
      <div className="fixes-section">
        <div className="content-container">
          <div className="text-content">
            <p>
              <span>Apply fixes in seconds. </span>
              Spend less time fixing vulnerabilities and more time building
              features with Copilot Autofix.
            </p>
            <div className="link-box">
              <Link to="#" className="explore-link">
                Explore BlvckOut Advanced Security &rarr;
              </Link>
            </div>
          </div>

          <div className="card-content">
            <div className="card">{/* <img src={logoo} alt="" /> */}</div>
          </div>
        </div>
      </div>

      <div className="fixes-section">
        <div className="content-container">
          <div className="card-content">
            <div className="card">{/* <img src={loogo} alt="" /> */}</div>
          </div>
          <div className="text-content">
            <p>
              <span>Work together, achieve more. </span>
              Collaborate with your teams, use management tools that sync with
              your projects, and code from anywhere—all on a single, integrated
              platform.
            </p>
            <div className="link-box">
              <Link to="#" className="explore-link">
                Explore BlvckOut Advanced Work &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="fixes-section">
        <div className="content-container">
          <div className="text-content">
            <p>
              <span>
                Millions of developers and businesses call BlvckOut home.
              </span>
              Join the world’s most widely adopted AI-powered developer platform
              to build the technologies that redefine what’s possible.
            </p>
            <div className="link-box">
              <Link to="#" className="explore-link">
                Explore BlvckOut World's &rarr;
              </Link>
            </div>
          </div>
          <div className="card-content">
            <div className="card">{/* <img src={logotook} alt="" /> */}</div>
          </div>
        </div>
      </div>

      <div className="fixes-section">
        <div className="content-container">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className="card-content">
            <div className="card">{/* <img src={logotook} alt="" /> */}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
