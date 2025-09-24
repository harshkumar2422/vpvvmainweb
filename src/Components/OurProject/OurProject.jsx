import React from "react";
import "./OurProject.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import card1 from "../HomeImg/cardimg1.png";
import card2 from "../HomeImg/cardimg2.png";
import card3 from "../HomeImg/cardimg3.png";
import card4 from "../HomeImg/cardimg4.png";
import card5 from "../HomeImg/cardimg5.png";
// import card6 from "../HomeImg/cardimg6.png";
// import card7 from "../HomeImg/cardimg7.png";
import card8 from "../HomeImg/cardimg8.png";
import constructioncardimg from "../HomeImg/constructioncardimg.jpg";

// Recharts imports
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Link } from "react-router-dom";

const data = [
  { year: "Year-2026", value: 3 },
  { year: "Year-2027", value: 10 },
  { year: "Year-2028", value: 20 },
  { year: "Year-2029", value: 32 },
  { year: "Year-2030", value: 50 },
  { year: "Year-2031", value: 70 },
  { year: "Year-2032", value: 85 },
  { year: "Year-2033", value: 92 },
  { year: "Year-2034", value: 97 },
  { year: "Year-2035", value: 100 },
];

const OurProject = () => {
  return (
    <>
      <Header />
      <section className="ourProject-section">
        <div className="ourProject-content">
          <h1>
           VPVV - A Pivotal Role Player Bringing Heavy Technology For India, Across
            India
          </h1>
          <h5 className="ourProject-subline">
            Empowering progress for a stronger India.
          </h5>
          <hr />
        </div>

        <div className="ourProject-container">
          {/* Card 1 */}
          <div className="ourProject-content-container">
            <div className="card-content">
              <div className="card">
                <img src={card3} alt="" />
                <div className="card-description">
                  <p>THE FUTURE IS HERE</p>
                  <Link to="/futureishere" className="infoview-more">
                    View more
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="ourProject-content-container">
            <div className="card-content">
              <div className="card">
                <img src={card1} alt="" />
                <div className="card-description">
                  <p>POWERING CITIES WITH FUSION</p>
                  <Link to="/power-cities" className="infoview-more">
                    View more
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* Card 333 */}
          <div className="ourProject-content-container">
            <div className="card-content">
              <div className="card">
                <img src={constructioncardimg} alt="" />
                <div className="card-description">
                  <p>
                    FUTURISTIC CONSTRUCTION: SUPER ADVANCED TECHNOLOGY,
                    AUTOMATION & SMART MATERIALS
                  </p>
                  <Link to="/construction" className="infoview-more">
                    View more
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="ourProject-content-container">
            <div className="card-content">
              <div className="card">
                <img src={card2} alt="" />
                <div className="card-description">
                  <p>THE HEALTHCARE REVOLUTION: TECHNOLOGY MEETS MEDICINE</p>
                  <Link to="/healthcars-revolution" className="infoview-more">
                    View more
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="ourProject-content-container">
            <div className="card-content">
              <div className="card">
                <img src={card5} alt="" />
                <div className="card-description">
                  <p>COSMIC ENERGY CONVERSION</p>
                  <Link to="/cosmic-energy" className="infoview-more">
                    View more
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="ourProject-content-container">
            <div className="card-content">
              <div className="card">
                <img src={card8} alt="" />
                <div className="card-description">
                  <p>AEROSPACE & DEFENSE INTEGRATION</p>
                  <Link to="/aerospace" className="infoview-more">
                    View more
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="ourProject-content-container">
            <div className="card-content">
              <div className="card">
                <img src={card4} alt="" />
                <div className="card-description">
                  <p>
                    ADVANCED AGRICULTURE TECHNIQUES: TRANSFORMING THE FUTURE OF
                    FOOD PRODUCTION
                  </p>
                  <Link to="/agriculture" className="infoview-more">
                    View more
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* Graph Card */}
          <h1 className="mt-4 mb-4">Project Cumulative work plan (Ph-1)</h1>
          <div className="card graph-card">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="1 1" stroke="#444" />
                <XAxis dataKey="year" stroke="#aaa" />
                <YAxis stroke="#aaa" tickFormatter={(tick) => `${tick}%`} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#f97316"
                  strokeWidth={3}
                  dot={{ fill: "#f97316", r: 5 }}
                >
                  <LabelList
                    dataKey="value"
                    position="top"
                    formatter={(val) => `${val}%`}
                  />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurProject;
