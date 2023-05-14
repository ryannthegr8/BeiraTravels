import "./contact.css";
import Banner from "../../assets/banner/banner-1.png";

export default function Contact() {
  return (
    <>
      <section className="hero-contact">
        <div className="hero-bg-contact">
          <img src={Banner} alt="Banner 1" />
        </div>
        <div className="hero-text-contact">
          <h2>Contact Us</h2>
          <h2>Get In Touch</h2>
        </div>
      </section>
      <div className="container-contact">
        <div className="left-contact">
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
          CALL US
          <h2>Follow us:</h2>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="right-contact">
          <h2>Contact Us</h2>
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
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
