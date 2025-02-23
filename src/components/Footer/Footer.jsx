import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-categories">
        <li>
          <Link to="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link
            to="https://twitter.com/i/flow/login"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitterX />
          </Link>
        </li>
        <li>
          <Link to="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </Link>
        </li>
      </ul>

      <div className="footer-copyright">
        <div>Made with ❤️ by Mentor Times team.</div>
        <div>All Rights Reserved &copy; Copyright, Mentor Times.</div>
      </div>
    </footer>
  );
};

export default Footer;
