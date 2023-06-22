//icons
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//images
import Banner from "../../assets/banner/banner-about-lioness.png";
import about1 from "../../assets/about-1.png";
import about2 from "../../assets/about-2.jpg";

//css
import "../../index.css";
import "./about.css";

function About() {
  return (
    <>
      {/* Top Image area */}
      <section className="hero-other-pages">
        <div className="hero-bg-other-pages">
          <img src={Banner} alt="Banner 1" />
        </div>
        <div className="hero-text-other-pages">
          <h2 className="intro1">About Us</h2>
          <h2 className="intro2-light">Get To Know Us</h2>
        </div>
      </section>

      {/* Intro to the subject */}
      <section className="home-intro">
        <p className="intro1">Hello Dear</p>
        <p className="intro2-dark">We are Beira Travels!</p>
        {/* <p className="intro3-dark">
          
        </p> */}
      </section>

      {/* Page content */}
      <section className="packagesOverlay">
        <div className="containerOverlay">
          <img src={about1} alt="" />
          <div className="boxOverlay">
            <h2>About Beira</h2>

            <p>
              At Beira Travel , we are passionate about creating exceptional
              travel experiences that leave a lasting impression.As a leading
              tour and travel company, we specialize in crafting personalized
              journeys that cater to the unique preferences and interests of our
              clients. With a commitment to excellence and a deep understanding
              of the travel industry, we strive to exceed expectations and
              deliver unforgettable adventures.
            </p>
          </div>
        </div>
        <div className="containerOverlay">
          <img src={about2} alt="" />
          <div className="boxOverlay">
            <h2>Our Mission</h2>
            <p>
              To perform and deliver excellent quality service to our clients.
              Providing them unforgettable travel, enjoyable, with guaranteed
              services that exceed their expectations With this objective, we
              aim to earn the reputation as "Your Preferred Travel Agency". The
              satisfaction of our customers and extraordinaryservice is the main
              aim, saving your time and money while providing the best value for
              your trip
            </p>
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

export default About;
