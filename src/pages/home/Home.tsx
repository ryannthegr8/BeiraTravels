import "./home.css";

function Home() {
  return (
    <>
      <div>
        <main>
          {/* <!-- A welcoming message and brief description of the company --> */}
          <section className="hero">
            <div className="hero-slideshow">
              <img src="./assets/banner/banner-1.jpg" alt="Banner 1" />
              {/* <!-- <img src="./assets/banner/banner-2.jpg" alt="Banner 2" />
          <img src="./assets/banner/banner-3.jpg" alt="Banner 3" /> --> */}
            </div>
            <div className="hero-text">
              <h1>Discover the World with Beira Travels</h1>
              <div className="tagline-typewriter">
                Experience the adventure of a lifetime
              </div>
              <a href="./html/destinations.html">
                <button className="hero-button">More info</button>
              </a>
            </div>
          </section>

          {/* <!-- Featured destinations    
                                  =========================================================--> */}
          <section id="destinations">
            <div className="heading-destinations">
              <h2>Popular Destinations</h2>
            </div>
            <div className="container-destinations">
              <div className="destination">
                <img src="./assets/maasai-mara.jpg" alt="destination 1" />
                <h3>Maasai Mara</h3>
                <p>
                  Enjoy the beautiful beaches of Hawaii with this all-inclusive
                  package!
                </p>
                <a href="#">More info</a>
              </div>
              <div className="destination">
                <img src="./assets/amboseli.jpg" alt="destination 2" />
                <h3>Amboseli</h3>
                <p>
                  Explore the historic streets of Rome with this affordable
                  package!
                </p>
                <a href="#">More info</a>
              </div>
              <div className="destination">
                <img src="./assets/lake-nakuru.jpg" alt="destination 3" />
                <h3>Lake Nakuru</h3>
                <p>
                  Experience the magic of Disney World with this family-friendly
                  package!
                </p>
                <a href="#">More info</a>
              </div>
              <div className="destination">
                <img src="./assets/watamu.jpg" alt="destination 3" />
                <h3>Watamu</h3>
                <p>
                  Experience the magic of Disney World with this family-friendly
                  package!
                </p>
                <a href="#">More info</a>
              </div>
              <div className="destination">
                <img src="./assets/mt. Kenya.jpg" alt="destination 3" />
                <h3>Mount Kenya</h3>
                <p>
                  Experience the magic of Disney World with this family-friendly
                  package!
                </p>
                <a href="#">More info</a>
              </div>
              <div className="destination">
                <img src="./assets/tsavo.jpeg" alt="destination 3" />
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
                <img
                  src="./assets/packages/package-mombasa.jpg"
                  alt="Package 1"
                />
                <h3>5 Days in Watamu</h3>
                <p>
                  Enjoy the beautiful beaches of Hawaii with this all-inclusive
                  package!
                </p>
                <a href="#">More info</a>
              </div>
              <div className="package">
                <img src="./assets/packages/package-2.jpg" alt="Package 2" />
                <h3>Package 2</h3>
                <p>
                  Explore the historic streets of Rome with this affordable
                  package!
                </p>
                <a href="#">More info</a>
              </div>
              <div className="package">
                <img src="./assets/packages/package-1.jpg" alt="Package 3" />
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
        <footer
        // style="background-image: url()"
        >
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
              <div className="footer-col">
                <h4>follow us</h4>
                <div className="footer-socials">
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
                </div>
              </div>
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
