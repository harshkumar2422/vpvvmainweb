import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-mailcontent">
          <div className="footer-discripition">
             <h4>VPVV Techno Construction Private Limited.</h4>
          <p>CIN:U45500MH2018PTC315532</p>
          <p>
            Registered Address - SHASHI APARTMENT, P.NO.13 F.NO.101, MAA
            BAMLESHWARI, Nagpur, Maharashtra, India, 440030
          </p>
          <p>
           Headquarter Address - VPVV Techno Construction Pvt Ltd A Floor, Jaypee Vasant Continental,
            Vasant Vihar, New Delhi, Delhi - 110057
          </p>
          <p>
            ©All rights reserved, also regarding any disposal, exploitation,
            reproduction, editing, distribution, as well as in the event of
            applications for industrial property rights.
          </p>
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
