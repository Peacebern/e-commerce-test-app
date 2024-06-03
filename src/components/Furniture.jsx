import React from 'react';
import "../styles/furniture.css";
import cookware from "../assets/Images/hero-fur-images/cookware.svg";
import bowel from "../assets/Images/hero-fur-images/bowel.svg";
import chandelier from "../assets/Images/hero-fur-images/chandelier.svg";
import vase from "../assets/Images/hero-fur-images/vase.svg";



export default function Furniture() {
    return(
        <div className='fur-hero'>
            <div>
                <img src={cookware} />
            </div>
            <div className='fur-hero-flex'>
                <div><img src={bowel}/></div>
                <div className='fur-hero-flex1'>
                    <img src={chandelier} />
                    <img src={vase}/>
                </div>
            </div>
        </div>
    );
}