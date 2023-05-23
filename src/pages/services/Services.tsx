//icons
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//images
import Banner from "../../assets/banner/banner-services-van.png";

//css
import "../../index.css";
import "./services.css";

import { BsAirplane } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";

export default function Services() {
  return (
    <>
      {/* Top Image area */}
      <section className="hero-other-pages">
        <div className="hero-bg-other-pages">
          <img src={Banner} alt="Banner 1" />
        </div>
        <div className="hero-text-other-pages">
          <h2 className="intro1">Our Services</h2>
          <h2 className="intro2-light">We Are Happy To Serve You</h2>
        </div>
      </section>

      {/* Intro to the subject */}
      <section className="home-intro">
        <p className="intro1">Hello Dear</p>
        <p className="intro2-dark">We are Beira Travels!</p>
        <p className="intro3-dark">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
          nostrum, quidem modi corporis illum sint ullam voluptate nobis! Amet,
          ea necessitatibus numquam impedit cupiditate asperiores eum
          reprehenderit fugiat debitis neque.
        </p>
      </section>

      {/* Page content */}
      {/* <!-- All services    
                                  =========================================================--> */}
      <section id="services">
        <div className="container-services">
          <div className="service-card">
            <div className="icon">
              <BsAirplane />
            </div>
            <h3>Air Ticketing</h3>
            <p>
              Enjoy the beautiful beaches of Hawaii with this all-inclusive
              package!
            </p>
          </div>
          <div className="service-card">
            <div className="icon">
              <FaHotel />
            </div>
            <h3>Hotel Reservation</h3>
            <p>
              Explore the historic streets of Rome with this affordable package!
            </p>
          </div>
          <div className="service-card">
            <div className="icon">
              <FaHospital />
            </div>
            <h3>Medical Tourism</h3>
            <p>
              Experience the magic of Disney World with this family-friendly
              package!
            </p>
          </div>
          <div className="service-card">
            <div className="icon">
              <FaCcVisa />
            </div>
            <h3>Visa processing</h3>
            <p>
              Experience the magic of Disney World with this family-friendly
              package!
            </p>
          </div>
          <div className="service-card">
            <div className="icon">
              <IoSchoolSharp />
            </div>
            <h3>Educational Tourism</h3>
            <p>
              Experience the magic of Disney World with this family-friendly
              package!
            </p>
          </div>
          <div className="service-card">
            <div className="icon">
              <BsFillPeopleFill />
            </div>
            <h3>Honeymoon packages</h3>
            <p>
              Experience the magic of Disney World with this family-friendly
              package!
            </p>
          </div>
        </div>
      </section>
      {/* <!-- End of Page contet --> */}

      {/* <!-- Footer [Copied on each page] 
                                      =====================================================--> */}
      <footer>
        <div className="container-footer">
          <div className="footer-row">
            <div className="footer-col">
              <h4>Quick Access</h4>
              <ul>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/services">Our Services</a>
                </li>
                <li>
                  <a href="/contact">Destinations</a>
                </li>
                <li>
                  <a href="/packages">Packages</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="/contact">Contact us</a>
                </li>
                <li>
                  <a href="/contact">Reschedule booking</a>
                </li>
                <li>
                  <a href="/contact">Cancel Booking</a>
                </li>
                <li>
                  <a href="/contact">Booking status</a>
                </li>
                <li>
                  <a href="/contact"> payment options</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Frequent services</h4>
              <ul>
                <li>
                  <a href="/contact">Business Tours</a>
                </li>
                <li>
                  <a href="/contact">Hotel Reservations</a>
                </li>
                <li>
                  <a href="/contact">Flight Booking</a>
                </li>
                <li>
                  <a href="/contact">Tours and services</a>
                </li>
              </ul>
            </div>
            {/* <!-- social links --> */}
            <section className="">
              <div className="footer-col">
                <h4>follow us</h4>
                <div className="footer-socials">
                  <ul>
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/beira_travels_/">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaPinterest />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="footer-bottom">
            <p>
              <a href="http://">Terrms of service </a>
              <a href="http://">| Privacy policy </a>| &copy; 2023 Beira
              Travels. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
