import React from 'react';
import sectionnew from "../../assets/sectionnew.png";
import dis from "../../assets/dis.png";
import "./Section3.css";
import { motion } from 'framer-motion';
import Section5 from '../../Section5';
const Section3 = () => {
  return (
    <div style={{ marginTop: "50px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>

<section className="process-section" style={{marginBottom:"60px"}}>
      <div className="contentNew">
        <h2 style={{fontWeight:"bold",textAlign:"center", fontSize:"60px",color:"#5d6d7e"}}>WE PROVIDE THE BEST!!!</h2>
        <div className="process-step">
          <div className="step-number">01</div>
          <div className="step-text">
            <h3>Briefing</h3>
            <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1}}
    >
      First thing you determine the concept and model you want, then
              choose what colors and materials you want to use in your furniture.
    </motion.p>
          
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">02</div>
          <div className="step-text">
            <h3>Processing</h3>
            {/* <motion.p
      className="text-lg text-gray-700 p-4 rounded-xl shadow-md bg-white max-w-xl mx-auto"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      whileHover={{ scale: 1.05, color: "#1f2937" }}
    > */}
              When the briefing process is complete and what the client wants
              has been achieved, then we carry out the execution of the desired
              concept.
            {/* </motion.p> */}
          </div>
        </div>
        <div className="process-step">
          <div className="step-number">03</div>
          <div className="step-text">
            <h3>Finishing</h3>
            <p>
              After the process is complete, we will immediately carry out the
              finishing stage carefully and ensure there are no mistakes.
            </p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="https://i0.wp.com/www.thirteenthoughts.com/wp-content/uploads/2017/03/stop-buying-so-much-makeup.jpg?fit=1100%2C1603&ssl=1" alt="Process" />
      </div>
    </section>
 <Section5/>
      {/* Background Section image */}
      <div className="promo-section">
  <div className="promo-image">
    <img
      src={sectionnew}
      alt="Sofa"
    />
  </div>

  <div className="promo-text">
    <img src={dis} alt="Discount" className="promo-discount-img" />
    <h1>25% OFF</h1>
    <h2>ON ALL ORDERS ABOVE $230</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit repellendus quis, quia veritatis culpa enim necessitatibus?</p>
    <button>GRAB THIS OFFER</button>
  </div>
</div>

    </div>
  );
};

export default Section3;
