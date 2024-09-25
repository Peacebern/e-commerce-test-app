import React from 'react';
import "../styles/footer.css";
import fb from "../assets/Images/Footer-images/fb.svg";
import ig from "../assets/Images/Footer-images/ig.svg";
import x from "../assets/Images/Footer-images/x.svg";


function Footer() {
return (
	<div className="footer-max">
		<div>
			<div className="footer-bg1">
				<div className="footer-hero">
					<div>
						<p>Bandage</p>
					</div>
					<div className="footer-img">
						<img src={fb} />
						<img src={ig} />
						<img src={x} />
					</div>
				</div>
			</div>
			<div className="footer-2">
				<div>
					<h5>Company Info</h5>
					<p>About Us</p>
					<p>Carrier</p>
					<p>We are hiring</p>
					<p>Blog</p>
				</div>
				<div>
					<h5>Legal</h5>
					<p>About Us</p>
					<p>Carrier</p>
					<p>We are hiring</p>
					<p>Blog</p>
				</div>
				<div>
					<h5>Features</h5>
					<p>Business Marketing</p>
					<p>User Analytic</p>
					<p>Live Chat</p>
					<p>Unlimited Support</p>
				</div>
				<div>
					<h5>Resources</h5>
					<p>Ios & Android</p>
					<p>Watch a Demo</p>
					<p>Customers</p>
					<p>API</p>
				</div>
				<div>
					<h5>Get In Touch</h5>
					<div action="/submit" method="post">
						<input
							type="email"
							id="email"
							name="email"
							value="Your Email"
							className="footer-input"
							required
						/>
						<input type="submit" value="Subscribe" className="footer-input2" />
					</div>
					<p>Lore imp sum dolor Amit</p>
				</div>
			</div>
			<div className="footer-foot">
				<p>Made With Love By Finland All Right Reserved </p>
			</div>
		</div>
	</div>
);
}

export default Footer