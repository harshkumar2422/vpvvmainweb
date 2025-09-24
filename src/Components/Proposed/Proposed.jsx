import React, { useState } from "react";
import "./Proposed.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaExpandAlt } from "react-icons/fa"; // icon for full view

import proposedimg1 from "../HomeImg/propsedimg1.png";
import proposedimg2 from "../HomeImg/Proposedimg2.jpg";
import proposedimg3 from "../HomeImg/Proposedimg3.jpg";
import proposedimg4 from "../HomeImg/Proposedimg4.jpg";
import proposedimg5 from "../HomeImg/Proposedimg5.png";
import proposedimg6 from "../HomeImg/Proposedimg6.png";
import proposedimg7 from "../HomeImg/Proposedimg7.jpg";
import proposedimg8 from "../HomeImg/Proposedimg8.jpg";
import proposedimg9 from "../HomeImg/Proposedimg9.jpg";
import proposedimg10 from "../HomeImg/Proposedimg10.jpg";
import proposedimg11 from "../HomeImg/Proposedimg11.jpg";
import proposedimg12 from "../HomeImg/Proposedimg12.jpg";

const images = [
  proposedimg1,
  proposedimg2,
  proposedimg3,
  proposedimg4,
  proposedimg6,
  proposedimg7,
  proposedimg8,
  proposedimg9,
  proposedimg10,
  proposedimg11,
  proposedimg12,
];

const Proposed = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Header />
      <section className="proposed-section">
        <div className="proposed-content">
          <h1>Our Project Office Building</h1>
          <h5 className="proposed-subline">
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

        {/* Lightbox Modal */}
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

export default Proposed;
