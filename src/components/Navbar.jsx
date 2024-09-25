import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
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
import menuIcon from "../assets/Images/Navbar-images/vector.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const navItems = [
	{
		label: "Home",
		route: "/",
	},
	{
		label: "Shop",
		route: "/shop",
	},
	{
		label: "About",
		route: "#",
	},
	{
		label: "Blog",
		route: "#",
	},
	{
		label: "Contact",
		route: "#",
	},
];

export default function Navbar() {
	const [widthSize, setWidthSize] = useState(window.innerWidth);
	const [drop, setDrop] = useState(false);
	const dropdown = () => {
		setDrop(!drop);
	};
	const cart = useSelector((state) => state.cart.items);

	useEffect(() => {
		const handleResize = () => setWidthSize(window.innerWidth);

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [widthSize]);

	return (
		<div className="ben">
			{widthSize > 700 ? (
				<header>
					<div>
						<div className="nav-hero-1">
							<div className="nav-hero">
								<div>
									<div className="nav-call">
										<img src={call} />
										<p className="im-mt">+234-9044739674</p>
										<img src={email} className="im-mt" />
										<p className="im-mt">peace8282bern@gmail.com</p>
									</div>
								</div>

								<div>
									<p>Follow Us and get a chance to win 80% off</p>
								</div>

								<div>
									<ul className="nav-ul">
										<p>Follow Us :</p>
										<li className="li-nav1">
											<a>
												<img src={insta} />
											</a>
										</li>
										<li className="li-nav1">
											<a>
												<img src={youtube} />
											</a>
										</li>
										<li className="li-nav1">
											<a>
												<img src={facebook} />
											</a>
										</li>
										<li className="li-nav1">
											<a>
												<img src={twitter} />
											</a>
										</li>
									</ul>
								</div>
							</div>

							<nav className="nav-2-hero full-bleed">
								<div className="nav-2">
									<div className="nav-2-ban">
										<p>Bandage</p>
									</div>
									<ul className="nav-links">
										{navItems.map(({ label, route }, index) => (
											<li key={label + index}>
												<NavLink className="nav-link" to={route}>
													{label}
													{label === "Shop" && (
														<span className="dropdown">
															<RiArrowDropDownLine />
														</span>
													)}
												</NavLink>
											</li>
										))}
									</ul>
								</div>
								<div className="nav-2-color">
									<ul className="nav-2-ul">
										<li>
											<Link className="nav-2-li" to="#">
												<img src={user} />
												<p>Login / Register</p>
											</Link>
										</li>
										<li>
											<Link className="nav-2-li" to="#">
												<img src={search} />
											</Link>
										</li>
										<li>
											<Link to="/cart">
												<span className="nav-2-li">
													<img src={shopping} />
													<p className="cart-num">{cart.length}</p>
												</span>
											</Link>
										</li>
										<li>
											<Link className="nav-2-li" to="#">
												<img src={likes} />
												<p>1</p>
											</Link>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</header>
			) : (
				<div className="cover-div">
					<div className="down-nav">
						<h1 className="nav-2-ban">Bandage</h1>
						<div className="register">
							<Link className="nav-2-li register-link-bg" to="#">
								<img src={search} />
							</Link>
							<Link to="/cart">
								<span className="nav-2-li register-link-bg">
									<img src={shopping} />
									<p className="cart-num">{cart.length}</p>
								</span>
							</Link>
							<div onClick={dropdown} className="register-link-bg">
								<img src={menuIcon} alt="menu" />
							</div>
						</div>
					</div>

					{drop === true && (
						<div
							className="droppedMenu"
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								width: "100%",
								height: "98vh",
							}}
						>
							<nav
								className="link-nav"
								style={{
									width: "100%",
									height: "100%",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
									color: "black",
									gap: "40px",
								}}
							>
								<NavLink
									className="nav-link"
									to="/home"
									style={{ fontSize: "20px" }}
								>
									Home
								</NavLink>
								<NavLink
									className="nav-link"
									to="/shop"
									style={{ fontSize: "20px" }}
								>
									Shop
								</NavLink>
								<NavLink
									className="nav-link"
									to="#"
									style={{ fontSize: "20px" }}
								>
									About
								</NavLink>
								<NavLink
									className="nav-link"
									to="#"
									style={{ fontSize: "20px" }}
								>
									Blog
								</NavLink>
								<NavLink
									className="nav-link"
									to="#"
									style={{ fontSize: "20px" }}
								>
									Contact
								</NavLink>
								<NavLink
									className="nav-link"
									to="#"
									style={{ fontSize: "20px" }}
								>
									Pages
								</NavLink>
								<Link
									className="nav-2-li"
									to="#"
									style={{ color: "#23a6f0", fontSize: "20px" }}
								>
									<img src={user} /> Login / Register
								</Link>
							</nav>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
