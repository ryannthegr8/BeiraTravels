//icons
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//images
import Banner from "../../assets/banner/banner-packages-leopard.png";
import Amboseli from "../../assets/amboseli.jpg";
import package3 from "../../assets/packages/package-3.jpg";
import package4 from "../../assets/packages/package-4.jpg";
import package5 from "../../assets/packages/package-5.jpg";
import package6 from "../../assets/packages/package-6.jpg";
import package7 from "../../assets/packages/package-7.jpg";

//css
import "../../index.css";
import "./packages.css";

export default function Packages() {
  return (
    <div>
      {/* Top Image area */}
      <section className="hero-other-pages">
        <div className="hero-bg-other-pages">
          <img src={Banner} alt="Banner 1" />
        </div>
        <div className="hero-text-other-pages">
          <h2 className="intro1">Packages</h2>
          <h2 className="intro2-light">Get The Personal Touch</h2>
        </div>
      </section>

      {/* Intro to the subject */}
      <section className="home-intro">
        <p className="intro1">Hello Dear</p>
        <p className="intro2-dark">We are Beira Travels!</p>
        <p className="intro3-dark">
          Experience paradise with our all-inclusive packages: pristine beaches,
          luxurious accommodations, thrilling excursions, and unforgettable
          cultural encounters.
        </p>
      </section>

      {/* Page content */}
      <section className="packagesOverlay">
        <div className="containerOverlay">
          <img src={Amboseli} alt="" />
          <div className="boxOverlay">
            <h2>Abadare to maasai mara</h2>

            <p>
              Experience paradise with our all-inclusive package: luxurious
              accommodations, thrilling excursions, and unforgettable cultural
              encounters.<br></br>
              Nairobi (1N)→Aberdare National Park (1N)→Lake Elmenteita
              (1N)→Masai Mara (2N) 5 Nights 6 Days
            </p>
            <p>
              <b>Price: ksh. 175,130</b>
            </p>

            <a href="/booking">Book now</a>
          </div>
        </div>
        <div className="containerOverlay">
          <img src={package3} alt="" />
          <div className="boxOverlay">
            <h2>Amboseli</h2>

            <p>
              Experience paradise with our all-inclusive package: luxurious
              accommodations, thrilling excursions, and unforgettable cultural
              encounters.<br></br>
              Nairobi (1N)→Masai Mara (2N)→Lake Elmenteita (1N)→Aberdare (1N)
            </p>
            <p>
              <b>Price: ksh 245,400</b>
            </p>

            <a href="/booking">Book Now</a>
          </div>
        </div>
        <div className="containerOverlay">
          <img src={package4} alt="" />
          <div className="boxOverlay">
            <h2>Amboseli</h2>

            <p>
              Experience paradise with our all-inclusive package: luxurious
              accommodations, thrilling excursions, and unforgettable cultural
              encounters.<br></br>
              Nairobi (1N)→Masai Mara (2N)→Lake Elmenteita (1N)→Aberdare (1N)
            </p>
            <p>
              <b>Price: ksh 245,400</b>
            </p>

            <a href="/booking">Book Now</a>
          </div>
        </div>
        <div className="containerOverlay">
          <img src={package5} alt="" />
          <div className="boxOverlay">
            <h2>Amboseli</h2>

            <p>
              Experience paradise with our all-inclusive package: luxurious
              accommodations, thrilling excursions, and unforgettable cultural
              encounters.<br></br>
              Nairobi (1N)→Masai Mara (2N)→Lake Elmenteita (1N)→Aberdare (1N)
            </p>
            <p>
              <b>Price: ksh 245,400</b>
            </p>

            <a href="/booking">Book Now</a>
          </div>
        </div>
        <div className="containerOverlay">
          <img src={package6} alt="" />
          <div className="boxOverlay">
            <h2>Maasai mara- Aberdare</h2>

            <p>
              Experience paradise with our all-inclusive package: luxurious
              accommodations, thrilling excursions, and unforgettable cultural
              encounters.<br></br> Nairobi (1N)→Masai Mara (2N)→Lake Elmenteita
              (1N)→Aberdare (1N)
            </p>
            <p>
              <b>Price: ksh 245,400</b>
            </p>

            <a href="/booking">Book Now</a>
          </div>
        </div>
        <div className="containerOverlay">
          <img src={package7} alt="" />
          <div className="boxOverlay">
            <h2>Abedare</h2>

            <p>
              Immerse yourself in the captivating wonders of Aberdare: lush
              forests, cascading waterfalls, exotic wildlife, luxury lodges, and
              exhilarating nature treks.
              <br /> Nairobi (1N)→Aberdare (1N)→Lake Naivasha (2N)→Masai Mara
              (2N) 6 night , 7 deays
            </p>
            <p>
              <b>Price: ksh 245,400</b>
            </p>

            <a href="/booking">Book Now</a>
          </div>
        </div>
      </section>
      {/* End of content */}

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
    </div>
  );
}
