import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <Link to="/" id="title">
        <div className="logo">
          <hr className="logo-border" />
          <h2 className="logo-text">
            <strong>MENTOR</strong> <span>TIMES</span>
          </h2>
          <hr className="logo-border" />
        </div>
      </Link>

      <div id="menu" onClick={handleClick}>
        {showMenu ? <Menu /> : <X />}
      </div>
      <ul id="nav-menu" className={showMenu ? "" : "openMenu"}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {/* <li>
          <NavLink to="/defence-anthem">Defence Anthem</NavLink>
        </li> */}
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
        {/* <li>
          <NavLink to="/create-post">Create Blog</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
