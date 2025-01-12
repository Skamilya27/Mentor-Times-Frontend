import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-categories">
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/i/flow/login" target="_blank" rel="noreferrer">
            <BsTwitterX />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        </li>
      </ul>

      <div className="footer-copyright">
        <div>
          Made with ❤️ by Mentor Times team.
        </div>
        <div>
          All Rights Reserved &copy; Copyright, Mentor Times.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
