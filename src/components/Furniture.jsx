import React from 'react';
import "../styles/furniture.css";
import { Link } from "react-router-dom";



export default function Furniture() {
    return(
        <div className='fur-hero'>
            <div className="right-carousel">
                <p>5 Items</p>
                <h2>FURNITURE</h2>
                <Link to="#">Read More</Link>
            </div>

            <div className="left-carousel">
                <div className="top-carousel">
                <p>5 Items</p>
                <h3>FURNITURE</h3>
                <Link to="#">Read More</Link>
                </div>

                <div className="bottom-carousel">
                    <div className="bottom-carousel-one">
                        <p>5 Items</p>
                        <h3>FURNITURE</h3>
                        <Link to="#">Read More</Link>
                    </div>

                    <div className="bottom-carousel-two">
                        <p>5 Items</p>
                        <h3>FURNITURE</h3>
                        <Link to="#">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
}