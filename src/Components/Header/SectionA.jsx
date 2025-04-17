import React from "react";
import { motion } from "framer-motion";
import "./SectionA.css";


const SectionA = () => {
  return (
    <header className="header">
      <div className="content">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          We help you make modern interior
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{color:"white"}}
        >
          We will help you to make an elegant and luxurious interior designed by professional interior designers.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Explore Collection
        </motion.button>
      </div>
      <img src="https://www.decorsnob.com/wp-content/uploads/36-grey-living-room-ideas.jpg"alt="Interior Design" />
    </header>
  );
};

export default SectionA;
