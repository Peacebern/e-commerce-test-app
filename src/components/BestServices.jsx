import React from 'react'
import "../styles/bestservices.css";
import easy from "../assets/Images/services-images/easy.svg";
import concrete from "../assets/Images/services-images/concrete.svg";
import hack from "../assets/Images/services-images/hack.svg";

function BestServices() {
    return(
        <div className="best-hero">
            <div className="best-p-flex">
                <p className="best-p">Featured Products</p>
                <p className="best-p1">THE BEST SERVICES</p>
                <p className="best-p2">Problems trying to resolve the conflict between </p>
            </div>

            <div className='best-hero-sub'>
                <div>
                    <img src={easy}/>
                    <p className='best-p1'>Easy Wins</p>
                    <p className='best-p2'>Get your best looking smile now!</p>
                </div>
                <div className='tex'>
                    <img src={concrete}/>
                    <p className='best-p1'>Concrete</p>
                    <p className='best-p2'>
                        Defalcate is most focused in helping you discover your most beautiful smile
                    </p>
                </div>
                <div>
                    <img src={hack}/>
                    <p className='best-p1'>Hack Growth</p>
                    <p className='best-p2'>Overcame any hurdle or any other problem.</p>
                </div>
            </div>
        </div>

    );
}

export default BestServices