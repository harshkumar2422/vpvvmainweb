import React from "react";
import "./TownshipPerspective.css";
import pmoimg1 from "../HomeImg/pmo-img.jpg";
import pmoimg2 from "../HomeImg/pmoimg2.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const TownshipPerspective = () => {
  return (
    <>
      <Header />
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="mb-5">Design & Planning Data for Township and PMO at Glance </h1>
        </div>
        <div className="township-img">
          <div className="township-pmo-img">
            <img src={pmoimg1} alt="" />
          </div>
          <div className="township-pmo-img">
            <img src={pmoimg2} alt="" />
          </div>
        </div>
        <h1 className="mt-5 mb-4 "> Project :Cluster Of Villas & Township (Per location) </h1>
              
        <ul className="township-ul">
          <li>Capacity of Township – 10,000 people</li>
          <li>Plot Area to be considered for Villa's -350 acre</li>
          <li> Total Area for Township – 500 Acres</li>
          <li>No;s of Villa – 171</li>
          <li>Built-up-Area of Each Villa – 50,000 sqft</li>
          <li>Built-up area of 171 Villa's -85,50,000 sqft</li>
          <li>
            Built-up area of other Infrastructure Building = 20 % of gross BUA
            of Villas
          </li>
          <li>
            Total Built-up-area of Township - 10,260,000.00 sqft (10.26 Million)
          </li>
          <li>Estimated Budget for project @Rs2600/sqft= INR 3600 Crores</li>
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default TownshipPerspective;
