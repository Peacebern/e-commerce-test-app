import React from "react";
import "../styles/furniture.css";
import { Link } from "react-router-dom";

export default function Furniture() {
	return (
		<div className="fur-hero">
			<div className="right-carousel">
				<div className="hero_text_cont">
					<p>5 Items</p>
					<h2>FURNITURE</h2>
					<Link to="#">Read More</Link>
				</div>
				<div className="hero_image_container">
					<img src="/Images/hero-fur-images/furcookware.svg" />
				</div>
			</div>

			<div className="top-carousel">
				<div className="hero_image_container">
					<img src="/Images/hero-fur-images/furbowel.svg" />
				</div>
				<div className="hero_text_cont">
					<p>5 Items</p>
					<h2>FURNITURE</h2>
					<Link to="#">Read More</Link>
				</div>
			</div>

			<div className="bottom-carousel-one">
				<div className="hero_image_container">
					<img src="/Images/hero-fur-images/furchandelier.svg" />
				</div>
				<div className="hero_text_cont">
					<p>5 Items</p>
					<h2>FURNITURE</h2>
					<Link to="#">Read More</Link>
				</div>
			</div>

			<div className="bottom-carousel-two">
				<div className="hero_image_container">
					<img src="/Images/hero-fur-images/furvase.svg" />
				</div>
				<div className="hero_text_cont">
					<p>5 Items</p>
					<h2>FURNITURE</h2>
					<Link to="#">Read More</Link>
				</div>
			</div>
		</div>
	);
}
