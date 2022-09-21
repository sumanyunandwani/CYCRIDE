import React from "react";
import image from "./Service.png";

export default function OurPurpose({ title, dark, id }) {
  return (
    
      <div className="test_back_service" id={id}>
        <span className="aboutus_heading">{title}</span>
        <img src={image} className="image_service"></img>
        
      </div>
  );
}
