import "../styles/shop.css";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { MdKeyboardArrowRight } from "react-icons/md";
import Products from "../components/Products.jsx";
import reading from "../assets/Images/Shop-Images/reading.png";
import hooli from "../assets/Images/Shop-Images/fa-brands-1.png";
import lyft from "../assets/Images/Shop-Images/fa-brands-2.png";
import pirate from "../assets/Images/Shop-Images/fa-brands-3.png";
import stripe from "../assets/Images/Shop-Images/fa-brands-4.png";
import aws from "../assets/Images/Shop-Images/fa-brands-5.png";
import antenna from "../assets/Images/Shop-Images/fa-brands-6.png";
import Footer from "../components/Footer";



function Shop() {
return (
    <div>
        <Navbar />

        <div className='home'>
            <Link to="/home">Home</Link>
            <MdKeyboardArrowRight className='arrow'/>
            <p>shop</p>
        </div>
        
        <ProductCard />

        <div className="info">
            <h5>Description</h5>
            <h5>Additional Information</h5>
            <h5>
            Reviews <span>(0)</span>
            </h5>
        </div>

        <div className="write-up">
            <div className="text">
            <h3>the quick fox jumps over </h3>
            <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                consequent sent nostrum met.
            </p>
            <p className="colored">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                consequent sent nostrum met.
            </p>
            <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                consequent sent nostrum met.
            </p>
            </div>

            <img src={reading} alt="Reading desk" />
        </div>

        <div className="mobile-hide">
            <Products />
        </div>

        <div className="brands">
            <img src={hooli} alt="hoo" />
            <img src={lyft} alt="left" />
            <img src={pirate} alt="leaf" />
            <img src={stripe} alt="Stripe" />
            <img src={aws} alt="aws" />
            <img src={antenna} alt="dot" />
        </div>

        <Footer />
    </div>
);
}

export default Shop;