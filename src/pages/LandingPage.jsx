import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Furniture from "../components/Furniture.jsx";
import Products from "../components/Products.jsx";
import BestServices from "../components/BestServices.jsx";
import "../styles/landingpage.css";
import FeauturedPosts from '../components/FeauturedPosts.jsx';
import About from '../components/About.jsx';
import CallToAction from '../components/CallToAction.jsx';
import Footer from '../components/Footer.jsx';

function LandingPage() {
  return (
    <div className='container'>
      <Navbar />
      <Furniture />
      <Products />
      <BestServices />
      <FeauturedPosts />
      <About />
      <CallToAction />
      <Footer />

    </div>
  )
}

export default LandingPage;