import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoutBtn } from "../index";
import { useSelector } from "react-redux";

//TODO: Use container for rendering 

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const adminAuthStatus = useSelector((state) => state.adminAuth.isAuthenticated);
  const authorAuthStatus = useSelector((state) => state.authorAuth.isAuthenticated);
  const isAuthenticated = adminAuthStatus || authorAuthStatus;

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "About Us",
      slug: "/about-us",
      active: true,
    },
    {
      name: "Contact Us",
      slug: "/contact-us",
      active: true,
    },
    {
      name: "Create Blog",
      slug: "/create-post",
      active: isAuthenticated,
    },
  ];

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex justify-between items-center py-4">
      <Link to="/" id="title" className="flex items-center space-x-2">
        <div className="logo">
          <hr className="logo-border" />
          <h2 className="logo-text">
            <strong>MENTOR</strong> <span>TIMES</span>
          </h2>
          <hr className="logo-border" />
        </div>
      </Link>

      <div id="menu" onClick={handleClick} className="cursor-pointer">
        {showMenu ? <Menu /> : <X />}
      </div>

      <ul
        id="nav-menu"
        className={`md:flex ${showMenu ? "hidden" : "openMenu"}`}
      >
        {navItems
          .filter((item) => item.active)
          .map((item) => (
            <li key={item.name} className="mx-2">
              <NavLink to={item.slug} className="nav-link">
                {item.name} 
              </NavLink>
            </li>
          ))}
        {isAuthenticated && (
          <li className="mx-2">
            <LogoutBtn />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
