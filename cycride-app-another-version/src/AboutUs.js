import React from "react";

export default function AboutUs({ title, dark, id }) {
  return (
    <div className="test_back" id={id}>
      <div className="test_front">
          <span className="aboutus_heading">{title}</span>
          <div className="black">
            <span className="aboutus_para1"><b>CYCRIDE</b> is a ride sharing platform which provides Cycle Riders with <b>hassle-free renting</b> by giving them a unique access to the Cycle Owners in their neighbourhood.</span>
            <span className="aboutus_para1">The average life of a cycle is 5-7 years which increases with maintenance. But is any cycle ever utilized completely, or has anyone committed to their Cycling routine? To this, our research says <b>“NO”.</b></span>
            <span className="aboutus_para1">Therefore, we provide a unique opportunity for cycle owners to <b>earn with your cycle and give life to other’s moments, and for cyclists to rent a cycle with no additional baggage.</b></span>  
          </div>
      </div>
    </div>
  );
}
