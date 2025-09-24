import React, { useState } from "react";
import "./DataCenter.css";
import { FaExpandAlt } from "react-icons/fa"; // icon for full view

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// ✅ Correct image imports
import databaseimg1 from "../HomeImg/datacenterimg1.png";
import databaseimg2 from "../HomeImg/datacenterimg2.jpg";
import databaseimg3 from "../HomeImg/datacenterimg3.png";

// ✅ Correct array reference
const images = [databaseimg1, databaseimg2, databaseimg3];

const DataCenter = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Header />
      <section className="management-section">
        <div className="management-content">
          <h1>Data Center</h1>
          <h5 className="management-subline">
            Empowering progress for a stronger India.
          </h5>
          <hr />
        </div>

        <div className="proposed-container">
          {images.map((img, index) => (
            <div className="proposed-content-container" key={index}>
              <div className="proposed-card-content">
                <div
                  className="proposed-card"
                  onClick={() => setSelectedImg(img)}
                >
                  <img src={img} alt={`proposed-${index}`} />
                  <div className="overlay">
                    <FaExpandAlt className="view-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Lightbox Modal */}
        {selectedImg && (
          <div className="lightbox" onClick={() => setSelectedImg(null)}>
            <span className="close">&times;</span>
            <img src={selectedImg} alt="full-view" className="lightbox-img" />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default DataCenter;
