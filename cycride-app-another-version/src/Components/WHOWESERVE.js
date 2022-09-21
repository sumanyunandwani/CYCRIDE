import React from "react";
import image from "../images/Service.png";

export default function WHOWESERVE({ title, id }) {
  return (
      <div className="whoweare-container" id={id}>
        <span className="section_heading">{title}</span>
        <img src={image} className="whoweserve_image"></img>
      </div>
  );
}
