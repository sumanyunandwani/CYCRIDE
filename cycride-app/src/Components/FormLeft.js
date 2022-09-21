
import React from "react";
import { Link } from "react-scroll";
import {scrollUpButton} from './Home';


const form_image = require('../images/form_image.jpg');

export default function UseFormLeft({ func }) {

    const onClickfunc = () => {
        scrollUpButton();
        func();
    };

    return (
    <div className="form_left">
        <span className="form_font">How it works?</span>
        <img className="form_image" src={form_image}></img>
        <Link
            activeClass="active"
            to="section5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            underlineAlways
            onClick={onClickfunc}
            className="know_more"
        >
            <u>Know more</u>
        </Link>
    </div>
    );
}

