import React from 'react'
import Navbar from './Header/Navbar'
import SectionA from './Header/SectionA'
import './Header/Style.css';
import SectionB from './Header/SectionB';
import Section3 from './Header/Section3';
import Footer from './Footer/Footer';
import Product from '../Product.jsx';

import Section6 from './Section6.jsx';

function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar/>
      <SectionA/>
      <SectionB/>
    <Section3/>
   
    <Product/>
<Section6/>
  <Footer/>
    </div>
  )
}

export default Home