import React from "react";
import "./PoweringCities.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import futuredusionimg from "../HomeImg/futuredusionimg.jpg";

const PoweringCities = () => {
  return (
    <>
      <Header />
      <section className="about-section">
        <div className="about-content">
          <h1>POWERING CITIES WITH FUSION</h1>
          <hr />
          <div className="fusion-container">
            <img src={futuredusionimg} alt="" className="futuredusionimg" />

            <div>
              <p>
                By 2050 the whole paradigm of India’s power would change. VPVV
                envisages to deploy Fusion plants that could deliver gigawatts
                of power—enough to power entire megacities with clean, reliable
                energy.
              </p>
              <br />
              <p>
                As a primary base-load energy source by the 2040s–2050s, fusion
                could provide consistent power regardless of weather conditions
                or time of day.
              </p>
              <br />
              <p>
                A single compact fusion plant could potentially replace multiple
                conventional power plants while requiring less land area and
                producing zero emissions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PoweringCities;
