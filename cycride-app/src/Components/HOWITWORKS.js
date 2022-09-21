import React from "react";
import Registration from "../images/Registration.svg";
import Booking from "../images/Booking.svg";
import SafetySecurity from "../images/safety_and_security.svg";
import Payment from "../images/Payment.svg";

export default function HOWITWORKS({ title, id }) {
    return (
        <div className="howitworks-container" id={id}>
            <span className="section_heading">{title}</span>
            <div className="howitworks_content_container">
                <span className="howitworks_content_number">1</span>
                <img className="howitworks_content_icon" src={Registration}></img>
                <span className="howitworks_content_header">Registration</span>
                <span className="howitworks_content">Registration is absolutely free. Share your details on the homepage and we will contact you to complete the process. Once we receive the details, we verify them and only the verified profiles are listed on the platform.</span>
            </div>
            <div className="howitworks_content_container">
                <span className="howitworks_content_number">2</span>    
                <img className="howitworks_content_icon" src={Booking}></img>
                <span className="howitworks_content_header">Booking</span>
                <span className="howitworks_content">Your cycle, your schedule.<br></br> Cycle owners can either accept or decline a ride if they are busy and can't rent out.<br></br><br></br> Cycle renters can find cycles available in their neighbourhood to suit their schedule. They have to pick up from and drop the cycle at the meeting location within the stipulated time period.</span>
            </div>
            <div className="howitworks_content_container">
                <span className="howitworks_content_number">3</span>
                <img className="howitworks_content_icon" src={SafetySecurity}></img>
                <span className="howitworks_content_header">Safety and Security</span>
                <span className="howitworks_content">Both cycle owners and the cycle renters are requested to sanitize themselves and the cycles before and after use to ensure safety amidst these times.<br></br><br></br> The cycle renters will also have to share their location with us while using the platform to ensure safety.</span>
            </div>
            <div className="howitworks_content_container">
                <span className="howitworks_content_number">4</span>
                <img className="howitworks_content_icon" src={Payment}></img>
                <span className="howitworks_content_header">Payment</span>
                <span className="howitworks_content">Cycle renters will pay the charges applicable to us via available alternatives at the time of the booking and penalties (if any) after the ride. <br></br><br></br>We then deduct our fee and pay back the cycle owners within a week of the ride. Remember, we only make money when you do!</span>
            </div>
        </div>
        
    );
}
  