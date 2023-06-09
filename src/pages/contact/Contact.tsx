//icons
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//css
import "./contact.css";
import "../../index.css";

//images
import Banner from "../../assets/banner/banner-contact-crocodile.png";

export default function Contact() {
  return (
    <>
      {/* Top Image area */}
      <section className="hero-other-pages">
        <div className="hero-bg-other-pages">
          <img src={Banner} alt="Banner 1" />
        </div>
        <div className="hero-text-other-pages">
          <h2 className="intro1">Contact Us</h2>
          <h2 className="intro2-light">Get In Touch</h2>
        </div>
      </section>

      {/* Intro to the subject */}
      <section className="home-intro">
        <p className="intro1">Hello Dear</p>
        <p className="intro2-dark">We are Beira Travels!</p>
        <p className="intro3-dark">
          "Got questions or ready to embark on your next adventure? Contact our
          dedicated team today. We're here to assist you every step of the way."
        </p>
      </section>

      {/* Contact and details */}
      <section id="contacts">
        <div className="container-contacts">
          <div className="contact">
            <h2>Beira Travels</h2>
            <p>A short description of the company.</p>
            <h2>Our Address</h2>
            <p>Address: 123 Main St, Anytown, USA</p>
            <a href="">GET DIRECTIONS</a>
            <h2>Our Email</h2>
            <p>Email: info@company.com</p>
            <a href="">EMAIL US</a>
            <h2>Our Phone</h2>
            <p>Phone: (123) 456-7890</p>
            <a href="">Call us</a>
            <h2>Follow us:</h2>
            <ul className="socials-contact">
              <li>
                <a href="#">
                  <FaFacebookF />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/beira_travels_/">
                  <FaInstagram />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* contact form */}
          {/* <div className="contact">
            <h2>Need a travel Expert?</h2>
            <form action="#" method="POST">
              <div className="form-group-contact">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" required />
              </div>
              <div className="form-group-contact">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" required />
              </div>
              <div className="form-group-contact">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group-contact">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group-contact">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button className="btn-contact" type="submit">
                SEND
              </button>
            </form>
          </div> */}
        </div>
      </section>
      {/* End of contact and details content */}

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
