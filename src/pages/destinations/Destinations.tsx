//css
import "./destinations.css";
import "../../index.css";

//icons
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//images
import Banner from "../../assets/banner/banner-destinations-lioness.png";
import Amboseli from "../../assets/amboseli.jpg";
import package14 from "../../assets/packages/package-14.jpg";
import package8 from "../../assets/packages/package-8.jpg";

export default function Destinations() {
  return (
    <>
      {/* Top Image area */}
      <section className="hero-other-pages">
        <div className="hero-bg-other-pages">
          <img src={Banner} alt="Banner 1" />
        </div>
        <div className="hero-text-other-pages">
          <h2 className="intro1">Destinations</h2>
          <h2 className="intro2-light">Get To Explore</h2>
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
      <section className="packagesOverlay">
        <div className="containerOverlay">
          <img src={package14} alt="" />
          <div className="boxOverlay">
            <h2>Kenya Coast</h2>

            <p>
              Discover the enchantment of Kenya's coastline: golden beaches,
              turquoise waters, vibrant markets, historic sites, and indulgent
              beachfront resorts.
            </p>
            <p>
              <b>Price: ksh 52,000</b>
            </p>
            <a href="/booking">Book now</a>
          </div>
        </div>
        <div className="containerOverlay">
          <img src={package8} alt="" />
          <div className="boxOverlay">
            <h2>Mt kenya</h2>

            <p>
              "Embark on an awe-inspiring journey to Mount Kenya: majestic
              peaks, breathtaking hikes, wildlife encounters, serene landscapes,
              and cozy mountain lodges."
            </p>
            <p>
              <b>Price: ksh 50,000</b>
            </p>

            <a href="/booking">Book Now</a>
          </div>
        </div>
      </section>
      {/* End of Page content */}

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
                  <a href="/contact">Hotel Reservatins</a>
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
