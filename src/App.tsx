//router
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

//images
import logo from "./assets/logo.png";

//css
import "./index.css";

// pages
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Destinations from "./pages/destinations/Destinations";
import Packages from "./pages/packages/Packages";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
//rfce
//App is the parent component
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          {/* <!-- Navigation bar with links to other pages and logo 
                                  =====================================================--> */}
          <nav>
            <NavLink to="/">
              <img className="logo" src={logo} alt="Beira Travels logo" />
            </NavLink>

            <div className="nav-links">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/destinations">DESTINATIONS</NavLink>
              <NavLink to="/packages">PACKAGES</NavLink>
              <NavLink to="/services">OUR SERVICES</NavLink>
              <NavLink to="/about">ABOUT</NavLink>
              <NavLink to="/contact">CONTACT US</NavLink>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
