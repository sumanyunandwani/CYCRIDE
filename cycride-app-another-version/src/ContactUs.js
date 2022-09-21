import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function ContactUs({ title, dark, id }) {
  return (
    <div className="test_green">
      <div className="section-content" id={id}>
        <span className="aboutus_heading">{title}</span>
        <div className="contact_us_left">
          <span className="contact_us_heading">EMAIL ADDRESS</span>
          <br></br><br></br>
          <span>cycridesocial@gmail.com</span>
        </div>
        <div className="contact_us_right">
          <span className="contact_us_heading">SOCIAL MEDIA</span>
          <br></br><br></br>
          <InstagramIcon colorPrimary></InstagramIcon>
          <FacebookIcon></FacebookIcon>
        </div>
      </div>
    </div>
  );
}
