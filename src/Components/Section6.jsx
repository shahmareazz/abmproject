import React from "react";
import "../Section6.css";
import { FaGlobe, FaUser, FaLock, FaCalendar } from "react-icons/fa";

const Section6 = () => {
  const items = [
    { icon: <FaGlobe />, title: "Shipping All Over The World", text:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, at delectus! Magni blanditiis eius deserunt sint odit debitis amet voluptas, repellendus, neque, autem nemo incidunt dolor libero vel accusantium reiciendis! "},
    { icon: <FaCalendar />, title: "Make Confirm Your Orders",text:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, at delectus! Magni blanditiis eius deserunt sint odit debitis amet voluptas, repellendus, neque, autem nemo incidunt dolor libero vel accusantium reiciendis! "},
  ];

  return (
    <div className="icon-grid-container">
     
      <div className="grid">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section6;
