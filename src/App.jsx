import './App.css'
import Navbar from '../src/components/Navbar.jsx';
import Furniture from "./components/Furniture.jsx";
import Products from "./components/Products.jsx";
import BestServices from "./components/BestServices.jsx";

import FeauturedPosts from './components/FeauturedPosts.jsx';
import About from './components/About.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div>
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

export default App;



