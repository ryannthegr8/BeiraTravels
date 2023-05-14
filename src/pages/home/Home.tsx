//css
import "./home.css";

//images
import Banner from "../../assets/banner/banner-3.png";
import MaasaiMara from "../../assets/maasai-mara.jpg";
import Amboseli from "../../assets/amboseli.jpg";
import lNakuru from "../../assets/lake-nakuru.jpg";
import Watamu from "../../assets/watamu.jpg";
import Tsavo from "../../assets/tsavo.jpeg";
import MtKenya from "../../assets/mt. Kenya.jpg";
import MombasaPackage from "../../assets/packages/package-mombasa.jpg";
import Package1 from "../../assets/packages/package-1.jpg";
import Package2 from "../../assets/packages/package-2.jpg";

function Home() {
  return (
    <>
      <div className="container-home">
        <main>
          {/* <!-- A welcoming message and brief description of the company --> */}
          <section className="hero">
            <div className="hero-slideshow">
              <img src={Banner} alt="Banner 1" />
              {/* <!-- <img src="./assets/banner/banner-2.jpg" alt="Banner 2" />
          <img src="./assets/banner/banner-3.jpg" alt="Banner 3" /> --> */}
            </div>
            <div className="hero-text">
              <p className="hero1">Feel The Love of Exploring</p>
              <p className="hero2">Journey of Adventure and Memories</p>
              <p className="hero3">
                Planning a trip can be overwhelming, which is why we're here to
                take care of everything for you.
              </p>
              <a href="">
                <button className="hero-button">Book now</button>
              </a>
            </div>
          </section>

          <section className="home-intro">
            <p className="intro1">Hello Dear</p>
            <p className="intro2-dark">We are Beira Travels!</p>
            <p className="intro3-dark">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              nostrum, quidem modi corporis illum sint ullam voluptate nobis!
              Amet, ea necessitatibus numquam impedit cupiditate asperiores eum
              reprehenderit fugiat debitis neque.
            </p>
          </section>

          {/* Section divider - Destinations intro [With parallax] */}
          <section className="parallax parallax-home">
            <div className="container-parallax">
              <h2 className="intro1">Memorable Experience</h2>
              <h1 className="intro2-light">Popoular Destinations</h1>
            </div>
          </section>

          {/* <!-- Featured destinations    
                                  =========================================================--> */}
          <section id="destinations">
            <div className="container-destinations">
              <div className="destination">
                <img src={MaasaiMara} alt="destination 1" />
                <h3>Maasai Mara</h3>
                <p>
                  Enjoy the beautiful beaches of Hawaii with this all-inclusive
                  package!
                </p>
                <a href="#">More info</a>
              </div>
              <div className="destination">
                <img src={Amboseli} alt="destination 2" />
                <h3>Amboseli</h3>
                <p>
                  Explore the historic streets of Rome with this affordable
                  package!
                </p>
                <a href="#">More info</a>
              </div>
              <div className="destination">
                <img src={lNakuru} alt="destination 3" />
                <h3>Lake Nakuru</h3>
                <p>
                  Experience the magic of Disney World with this family-friendly
                  package!
                </p>
                <a href="#">More info</a>
              </div>
              <div className="destination">
                <img src={Watamu} alt="destination 3" />
                <h3>Watamu</h3>
                <p>
                  Experience the magic of Disney World with this family-friendly
                  package!
                </p>
                <a href="#">More info</a>
              </div>
              <div className="destination">
                <img src={MtKenya} alt="destination 3" />
                <h3>Mount Kenya</h3>
                <p>
                  Experience the magic of Disney World with this family-friendly
                  package!
                </p>
                <a href="#">More info</a>
              </div>
              <div className="destination">
                <img src={Tsavo} alt="destination 3" />
                <h3>Tsavo national park</h3>
                <p>
                  Experience the magic of Disney World with this family-friendly
                  package!
                </p>
                <a href="#">More info</a>
              </div>
            </div>
          </section>
          {/* <!-- End of featured destiations -->

      <!-- Popular packages 
                            =====================================================--> */}
          <section id="popular-packages">
            <div className="heading-packages">
              <h2>Popular Packages</h2>
            </div>
            <div className="container-packages">
              <div className="package">
                <img src={MombasaPackage} alt="Package 1" />
                <h3>5 Days in Watamu</h3>
                <p>
                  Enjoy the beautiful beaches of Hawaii with this all-inclusive
                  package!
                </p>
                <a href="#">More info</a>
              </div>
              <div className="package">
                <img src={Package2} alt="Package 2" />
                <h3>Package 2</h3>
                <p>
                  Explore the historic streets of Rome with this affordable
                  package!
                </p>
                <a href="#">More info</a>
              </div>
              <div className="package">
                <img src={Package1} alt="Package 3" />
                <h3>Package 3</h3>
                <p>
                  Experience the magic of Disney World with this family-friendly
                  package!
                </p>
                <a href="#">More info</a>
              </div>
            </div>
          </section>
          {/* <!-- End of popular packages --> */}
        </main>

        {/* <!-- Footer [Copied on each page] 
                                      =====================================================--> */}
        <footer>
          <div className="container-footer">
            <div className="footer-row">
              <div className="footer-col">
                <h4>company</h4>
                <ul>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">our services</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#">affiliate program</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>get help</h4>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">returns</a>
                  </li>
                  <li>
                    <a href="#">order status</a>
                  </li>
                  <li>
                    <a href="#"> payment options</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>online shop</h4>
                <ul>
                  <li>
                    <a href="#">Watch</a>
                  </li>
                  <li>
                    <a href="#">bag</a>
                  </li>
                  <li>
                    <a href="#">shoes</a>
                  </li>
                  <li>
                    <a href="#">dress</a>
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
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
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
        {/* <!-- Script files 
                      ==========================================================--> */}
        {/* <script src="./js/slideshow-jquery.js"></script> */}
      </div>
    </>
  );
}

export default Home;
