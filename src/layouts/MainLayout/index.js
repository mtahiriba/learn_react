import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { NavMenuItems } from '../../Content';
import { Logo } from "../../assets/images";
import { Navbar, Footer} from '../../components/Sections'
import { Home, Products, AboutUs, ContactUs } from '../../pages'
const MainLayout = () => {
  return (
    <div>
        {/* Navbar */}
        <Navbar logo={Logo} items={NavMenuItems}/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={ <Products/> } />
            <Route path='/aboutus' element={ <AboutUs/> } />
            <Route path='/contactus' element={ <ContactUs/> } />
        </Routes>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default MainLayout
