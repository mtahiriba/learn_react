import "./App.css";
import { Navbar, Footer } from "./components/Sections";
import { NavMenuItems } from "./Content";
import { Logo } from "./assets/images";
import { Routes, Route} from "react-router-dom";
import { Home, Login, Signup, Products, AboutUs, ContactUs } from './pages';
import { MainLayout } from './layouts';

function App() {
  return (
    <>
      {/* Routing of pages */}
      <Routes>
        <Route path="/" element={ <MainLayout/> }>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={ <Products/> } />
          <Route path='/aboutus' element={ <AboutUs/> } />
          <Route path='/contactus' element={ <ContactUs/> } />
        </Route>
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
      </Routes>
    </>
  );
}

export default App;
