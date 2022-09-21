import React from "react";
import RoomService from '../images/service.svg';
import Cycle from '../images/cycle.svg';
import Asset from '../images/asset_utilize.svg';
import Nature from '../images/nature.svg';
import Security from '../images/security.svg';
import Thumbs from '../images/thumbs.svg';

export default function WHATWEOFFER({ title, id }) {
  return (
    <div className="whatweoffer-container" id={id}>
        <span className="whatweoffer_heading">{title}</span>
        <div className="whatweoffer_content_container">
          <img className="whatweoffer_icon" src={RoomService}></img>
          <br></br>
          <span className="whatweoffer_header">Unique service</span>
          <span className="whatweoffer_content">We provide a unique ride-sharing platform for a cycle community that shares.</span>
        </div>
        <div className="whatweoffer_content_container">
          <img className="whatweoffer_icon" src={Asset}></img>
          <br></br>
          <span className="whatweoffer_header">Cycle utilization</span>
          <span className="whatweoffer_content">Don’t work for your cycle, let your cycle run for you.</span>
        </div>
        <div className="whatweoffer_content_container">
          <img className="whatweoffer_icon" src={Security}></img>
          <br></br>
          <span className="whatweoffer_header">Security</span>
          <span className="whatweoffer_content">Safe and secure cycle sharing with verified profiles.</span>
        </div>
        <div className="whatweoffer_content_container">
          <img className="whatweoffer_icon" src={Thumbs}></img>
          <br></br>
          <span className="whatweoffer_header">No commitment</span>
          <span className="whatweoffer_content">Accept a ride when you like. Struggle for fitness and fun, not for maintenance.</span>
        </div>
        <div className="whatweoffer_content_container">
          <img className="whatweoffer_icon" src={Cycle}></img>
          <br></br>
          <span className="whatweoffer_header">Diverse range of cycles</span>
          <span className="whatweoffer_content">New cycle everyday. We have it all.</span>
        </div>
        <div className="whatweoffer_content_container">
          <img className="whatweoffer_icon" src={Nature}></img>
          <br></br>
          <span className="whatweoffer_header">Close to nature</span>
          <span className="whatweoffer_content">Just don’t roll your chair, roll the pedal. Forget the walls when the nature calls.</span>
        </div>
    </div>
  );
}
