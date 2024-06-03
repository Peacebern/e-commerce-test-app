import React from 'react';
import "../styles/about.css";
import blocks from "../assets/Images/About-images/blocks.svg";
import bluesky from "../assets/Images/About-images/bluesky.svg";
import camera from "../assets/Images/About-images/camera.svg";
import circus from "../assets/Images/About-images/circus.svg";
import dessert from "../assets/Images/About-images/dessert.svg";
import model from "../assets/Images/About-images/model.svg";
import mountain from "../assets/Images/About-images/mountain.svg";
import stars from "../assets/Images/About-images/stars.svg";
import student from "../assets/Images/About-images/student.svg";
import terrain from "../assets/Images/About-images/terrain.svg";
import userlady from "../assets/Images/About-images/userlady.svg";

function About() {
return (
    <div className='about-hero'>
        <div>
            <p className='about-p'>What they say about us</p>
            <img src={userlady}/>
            <p></p>
            <img src={stars}/>
            <p className='about-p1'>Slate helps you see how many more days you need to work to reach your financial goal.</p>
            <p className='about-p2'>Regina Miles</p>
            <p className='about-p3'>Designer</p>
        </div>

        <div className='about-img'>
            <div className='about-img-flex'>
                <img src={camera} />
                <img src={circus}/>
                <img src={blocks} />
            </div>
            <div className='about-img-flex'>
                <img src={dessert} />
                <img src={model} />
                <img src={student}/>
            </div>
            <div className='about-img-flex'>
                <img src={mountain} />
                <img src={terrain} />
                <img src={bluesky} />
            </div>
        </div>
    </div>
);
}

export default About