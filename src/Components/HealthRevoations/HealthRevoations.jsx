import React from "react";
import "./HealthRevoations.css";
import healthcareimg1 from "../HomeImg/healthcareimg1.png";
import healthcareimg2 from "../HomeImg/healthcareimg2.png";
import healthcareimg3 from "../HomeImg/healthcareimg3.png";
import healthcareimg4 from "../HomeImg/healthcareimg4.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const HealthRevoations = () => {
  return (
    <>
      <Header />
      <section className="about-section">
        <div className="about-content">
          <h1>THE HEALTHCARE REVOLUTION: TECHNOLOGY MEETS MEDICINE</h1>
          <hr />

          <div className="health-container">
            <img src={healthcareimg1} alt="" />
            <div>
              <h5 className="linecard">Predictive Diagnostics </h5>
              <p>
                Advanced and Intelligent algorithms would analyze medical images
                with greater accuracy than human specialists, detecting subtle
                patterns invisible to the naked eye. Use of advanced algorithms
                would facilitate early detection of dreaded diseases like cancer
                through thermal imaging, making screening more accessible and
                comfortable.
              </p>
            </div>
          </div>
          <br />
         
          <div className="health-container">
            <div>
              <h5 className="linecard">Personalized Treatment </h5>
               <p>
              VPVV has a vision to deploy Big data analytics to revolutionize
              treatment protocols by analyzing millions of patient records to
              identify the most effective approaches. This healthcare platform
              will use Advanced Technology to analyze patient data and provide
              personalized healthcare recommendations, improving outcomes across
              diverse populations.
            </p>
            </div>
           
            <img src={healthcareimg2} alt="" />
          </div>
          <br />
         
          <div className="health-container">
            <img src={healthcareimg3} alt="" />
            <div>
              <h5 className="linecard">Tech -Assisted Surgery </h5>
              <p>
              Robotic surgical systems guided by a highly advanced Technology
              will perform complex procedures with unprecedented precision. It’s
              an endeavor to use advanced robotic surgery across several
              specialties, reducing complications and recovery time while
              expanding access to advanced surgical techniques.
            </p>
            </div>
            
          </div>
          <br />
         
          <div className="health-container">
            <div>
               <h5 className="about-subline">
            Ship Hospitals: Healthcare That Navigates to Need
              </h5>
               <p>
              <ul>
                <li>
                  Fully equipped operating theatres capable of complex surgeries
                </li>
                <li>
                  ICU facilities with ventilator support and advanced monitoring
                </li>
                <li>Diagnostic laboratories for comprehensive testing</li>
                <li>Blood banks and pharmaceutical compounding capabilities</li>
                <li>
                  Telemedicine links to mainland specialists for consultation
                </li>
                <li>
                  Helicopter landing pads for emergency medical evacuations
                </li>
              </ul>
            </p>
            </div>
           
            <img src={healthcareimg4} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HealthRevoations;
