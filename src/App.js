import "./App.css";
import { Navbar, Footer } from "./components/Sections";
import { NavMenuItems } from "./Content";
import { Logo } from "./assets/images";
import { Routes, Route} from "react-router-dom";
import { Home, Login, Signup, Products, AboutUs, ContactUs } from './pages';

function App() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar logo={Logo} items={NavMenuItems} />
      
      {/* Routing of pages */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path='/products' element={ <Products/> } />
        <Route path='/aboutus' element={ <AboutUs/> } />
        <Route path='/contactus' element={ <ContactUs/> } />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
