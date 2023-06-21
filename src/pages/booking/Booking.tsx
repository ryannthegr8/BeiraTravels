//emailjs
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

//icons
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//css
import "./booking.css";

function Booking() {
  const form = useRef<any | null | HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_29ysabq",
        "template_tp58fbm",
        form.current,
        "GM4LWkf4VNj_Rs-rp"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent to agent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section id="popular-booking">
        <div className="container-booking">
          <div className="book">
            <div className="form-container">
              {/* Intro to the subject */}
              <section className="home-intro">
                <p className="intro1">Hello Dear</p>
                <p className="intro2-dark">We are Beira Travels!</p>
                <p className="intro3-dark">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Atque nostrum
                </p>
              </section>
              <div className="main-booking">
                {/* Beggining of the form */}
                <form
                  action="http://localhost:3000/book_trip"
                  method="POST"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div>
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="mail">E-mail Address</label>
                    <input
                      type="email"
                      name="mail"
                      id="mail"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="IDcard">ID Image (Optional)</label>
                    <input
                      type="file"
                      name="IDcard"
                      id="IDcard"
                      placeholder="Your ID"
                    />
                  </div>
                  <div>
                    <label htmlFor="residence">Residence</label>
                    <input
                      type="text"
                      name="residence"
                      id="residence"
                      placeholder="Your recidence"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="Number"
                      name="phone"
                      id="phone"
                      placeholder="Your number"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="bookedDestination">Subject</label>
                    <input
                      type="text"
                      name="bookedDestination"
                      id="bookedDestination"
                      placeholder="Your destination"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="startDate">Start Date</label>
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      placeholder="Starting date"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="endDate">End Date</label>
                    <input
                      type="date"
                      name="endDate"
                      id="endDate"
                      placeholder="End date"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="adults">Adults</label>
                    <input
                      type="text"
                      name="adults"
                      id="adults"
                      placeholder="Adults"
                    />
                  </div>
                  <div>
                    <label htmlFor="children">
                      Number of Children (With age)
                    </label>
                    <input
                      type="text"
                      name="children"
                      id="children"
                      placeholder="Children"
                    />
                  </div>
                  <div>
                    <label htmlFor="messageBooking">Message</label>
                    <textarea
                      name="messageBooking"
                      id="messageBooking"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div id="submit">
                    <input type="submit" value="SUBMIT" id="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                      <a
                        href="https://www.instagram.com/beira_travels_/"
                        target="_blank"
                      >
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

export default Booking;
