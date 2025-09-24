import React from "react";
import "./interact.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Interaction = () => {
  return (
    <>
      <Header />

      <section className="about-section">
        <div className="about-content" style={{ height: "50vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <h2>
            If You Have Any query You Can Contact us queries@vpvvindia.com
          </h2>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Interaction;
