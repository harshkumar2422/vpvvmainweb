import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import aerospaceimg1 from "../HomeImg/aerospaceimg1.png";
import aerospaceimg2 from "../HomeImg/aerospaceimg2.png";
const Aerospace = () => {
  return (
    <>
      <Header />
      <section className="about-section">
        <div className="about-content">
          <h1>AEROSPACE & DEFENSE INTEGRATION</h1>
          <hr />
          <p>
            The project has integration of advanced technology and intelligence
            with Aerospace platforms, creating systems with unprecedented
            capabilities, forcing a reevaluation of defense doctrines worldwide.
          </p>
          <br />
          <h5 className="about-subline">The Sky Is Just the Beginning</h5>
          <div className="health-container">
            <img src={aerospaceimg1} alt="" />
            <p>
              We stand at the edge of an aerospace renaissance – a
              transformative period where boundaries between Earth and space,
              human and machine, imagination and reality are being redefined.
            </p>
          </div>
          <br />

          <br />
          <div className="health-container">
            <p className="futureimg-container">
              <div>
                <h5 className="linecard">
                  Miniaturization & Military Nano/Micro-Satellites Manufacturing
                </h5>

                <p>
                  Modern defense strategy increasingly relies on miniaturized
                  satellite technology to create resilient, distributed networks
                  for intelligence gathering and tactical operations.
                </p>
                <ul>
                  <li>
                    CubeSats and PocketQubes provide rapid deployment capability
                    for ISR missions
                  </li>
                  <li>
                    Distributed satellite constellations create redundant
                    infrastructure resilient to ASAT attacks
                  </li>
                  <li>
                    DARPA Blackjack program exemplifies tactical ISR
                    capabilities in compact packages
                  </li>
                </ul>
              </div>

              <img src={aerospaceimg2} alt="" />
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Aerospace;
