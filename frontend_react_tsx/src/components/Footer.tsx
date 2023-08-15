import { Link } from "react-router-dom";
import Logo from "../images/sver-low-resolution-logo-white-on-transparent-background.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "../pages/home/home.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            SVer allows organizations to distribute programmable grants in BSV
            that restrict spendability, thus alleviating the Moral Hazard
            problem.
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="nonreferrer noopener noreferrer"
            >
              {" "}
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="nonreferrer noopener noreferrer"
            >
              {" "}
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="nonreferrer noopener noreferrer"
            >
              {" "}
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="nonreferrer noopener noreferrer"
            >
              {" "}
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/register">Register</Link>
          <Link to="/vendors">Vendors</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Partnerships</h4>
          <Link to="/contact">Contact us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2023 SVER &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
