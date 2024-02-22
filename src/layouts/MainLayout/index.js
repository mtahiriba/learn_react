import React from 'react'
import { Outlet } from 'react-router-dom';
import { NavMenuItems } from '../../Content';
import { Logo } from "../../assets/images";
import { Navbar, Footer} from '../../components/Sections'
const MainLayout = () => {
  return (
    <div>
        {/* Navbar */}
        <Navbar logo={Logo} items={NavMenuItems}/>

        {/* Routing of pages */}
        <Outlet/>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default MainLayout
