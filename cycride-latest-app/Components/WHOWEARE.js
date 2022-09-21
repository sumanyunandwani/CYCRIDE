import React from "react";

export default function WHOWEARE({ title, id }) {
  return (
    <div className="whoweare-container">
        <span className="section_heading" id={id}>{title}</span>
        <div className="whoweare_content_container">
          <span className="whoweare_content"><b className="text_highlight">CYCRIDE</b> is a ride sharing platform which provides Cycle Riders with <span>hassle-free renting</span> by giving them a unique access to the Cycle Owners in their neighbourhood.</span>
          <span className="whoweare_content">The average life of a cycle is 5-7 years which increases with maintenance. But is any cycle ever utilized completely, or has anyone committed to their Cycling routine? To this, our research says <b className="text_highlight">“NO”.</b></span>
          <span className="whoweare_content">Therefore, we provide a unique opportunity for cycle owners to <b className="text_highlight">earn</b> with your cycle and give life to other’s moments, and for cyclists to rent a cycle with <b className="text_highlight">"no additional baggage".</b></span>  
        </div>
    </div>
  );
}

