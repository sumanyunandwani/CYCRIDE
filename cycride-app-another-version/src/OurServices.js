import React from "react";
import SecurityIcon from '@material-ui/icons/Security';
import RoomServiceSharpIcon from '@material-ui/icons/RoomServiceSharp';
import DirectionsBikeSharpIcon from '@material-ui/icons/DirectionsBikeSharp';
import FilterHdrSharpIcon from '@material-ui/icons/FilterHdrSharp';
import ThumbsUpDownSharpIcon from '@material-ui/icons/ThumbsUpDownSharp';

export default function OurService({ title, dark, id }) {
  return (
    <div className="test_green">
      <div className="what_we_offer" id={id}>
        <span className="aboutus_heading">{title}</span>
        <div className="ourservice_contianer">
            <SecurityIcon /><br></br>
            <span className="ourservice_header">Security</span>
            <br></br><br></br>
            <span className="ourservice_para">Safe and secure cycle sharing with verified profiles.</span>
        </div>
        <div className="ourservice_contianer">
            <ThumbsUpDownSharpIcon /><br></br>
            <span className="ourservice_header">No commitment</span>
            <br></br><br></br>
            <span className="ourservice_para">Accept a ride when you like. Struggle for fitness and fun, not for maintenance.</span>
        </div>
        <div className="ourservice_contianer">
            <RoomServiceSharpIcon /><br></br>
            <span className="ourservice_header">Unique service</span>
            <br></br><br></br>
            <span className="ourservice_para">We provide a unique ride-sharing platform for a cycle community that shares.</span>
        </div>
        <div className="ourservice_contianer">
            <DirectionsBikeSharpIcon /><br></br>
            <span className="ourservice_header">Diverse range of cycles</span>
            <br></br><br></br>
            <span className="ourservice_para">New cycle everyday. We have it all.</span>
        </div>
        <div className="ourservice_contianer">
            <DirectionsBikeSharpIcon /><br></br>
            <span className="ourservice_header">Cycle utilization</span>
            <br></br><br></br>
            <span className="ourservice_para">Don’t work for your cycle, let your cycle run for you.</span>
        </div>
        <div className="ourservice_contianer">
            <FilterHdrSharpIcon /><br></br>
            <span className="ourservice_header">Close to nature</span>
            <br></br><br></br>
            <span className="ourservice_para">Just don’t roll your chair, roll the pedal. Forget the walls when the nature calls.</span>
        </div>
      </div>
    </div>
  );
}
