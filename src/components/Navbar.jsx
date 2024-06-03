import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import call from "../assets/Images/Navbar-images/call.svg";
import email from "../assets/Images/Navbar-images/email.svg";
import insta from "../assets/Images/Navbar-images/insta.svg";
import youtube from "../assets/Images/Navbar-images/youtube.svg";
import facebook from "../assets/Images/Navbar-images/facebook.svg";
import twitter from "../assets/Images/Navbar-images/twitter.svg";
import search from "../assets/Images/Navbar-images/search.svg";
import shopping from "../assets/Images/Navbar-images/shopping.svg";
import likes from "../assets/Images/Navbar-images/likes.svg";
import user from "../assets/Images/Navbar-images/user.svg";

export default function Navbar() {
return (
<div className="ben">
    <header>
    <nav>
        <div className="nav-hero-1">
            <div className="nav-hero">
                <div>
                    <div className="nav-call">
                        <img src={call} />
                        <p>+234-9044739674</p>
                        <img src={email} className="im-mt"/>
                        <p>peace8282bern@gmail.com</p>
                    </div>

                </div>

                <div>
                    <p>Follow Us  and get a chance to win 80% off</p>
                </div>

                <div>
                    <ul className="nav-ul">
                        <p>Follow Us  :</p>
                        <li className="li-nav1"><a><img src={insta}/></a></li>
                        <li className="li-nav1"><a><img src={youtube}/></a></li>
                        <li className="li-nav1"><a><img src={facebook}/></a></li>
                        <li className="li-nav1"><a><img src={twitter}/></a></li>
                    </ul>
                </div>
            </div>

            <div className="nav-2-hero">
                <div className="nav-2">
                    <div className="nav-2-ban">
                        <p>Bandage</p>
                    </div>
                    <div className="nav-2-sub">
                        <Link to="/home">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/about">About</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/pages">Pages</Link>
                    </div>
                </div>
                <div className="nav-2-color">
                    <ul className="nav-2-ul">
                        <li className="nav-2-li">
                            <img src={user}/>
                            <p>Login / Register</p>
                        </li>
                        <li className="nav-2-li">
                            <img src={search}/>
                        </li>
                        <li className="nav-2-li">
                            <img src={shopping}/>
                            <p>1</p>
                        </li>
                        <li className="nav-2-li">
                            <img src={likes}/>
                            <p>1</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </header>
</div>
);
}
