import React from "react";
import insta_icon from '../images/instagram_icon.svg';
import facebook_icon from '../images/facebook_icon.svg';
import mail_icon from '../images/mail_envelope.svg';
import socialmedia_icon from '../images/contactus_people_connected.svg';

export default function CONTACTUS({ title, id }) {
  return (
    <div className="contactus_container" id={id}>
        <span className="contactus_heading">{title}</span>
        <div className="contactus_content_container">
          <span className="contactus_para_block">If you have any questions or issues, a member of staff will always be happy to help. Feel free to contact us by Email or our social media and we will be sure to get back to you as soon as possible.</span>
        </div>
        
        <div className="contactus_divide_block_blue">
          <span className="contactus_block_heading">Write To Us At</span>
          <span className="contactus_block_content">EMAIL ADDRESS</span>
          <img className="contactus_svg" src={mail_icon}></img>
          
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cycridesocial@gmail.com&su=CYCRIDE | Help" rel="noopener noreferrer" target="_blank" className="contactus_email">cycridesocial@gmail.com</a>
          
          
        </div>
        <div className="contactus_divide_block_white">
          <span className="contactus_block_heading">Visit Us At</span>
          <span className="contactus_block_content">SOCIAL MEDIA</span>
          <img className="contactus_svg" src={socialmedia_icon}></img>
          <div className="social_media_icons">
            <a href="https://www.instagram.com/cycridesocial/" rel="noopener noreferrer" target="_blank" className="contactus_icon"><img src={insta_icon} alt="" className="icon"></img></a>
            <a href="https://www.facebook.com/Cycridesocial" rel="noopener noreferrer" target="_blank" className="contactus_icon"><img src={facebook_icon} alt="" className="icon"></img></a>
          </div>
        </div>
    </div>
  );
}
