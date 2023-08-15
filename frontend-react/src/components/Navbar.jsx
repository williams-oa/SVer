import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/sver-low-resolution-logo-white-on-transparent-background.png";
import { links } from "../data";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="SVer Nav logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  //   if active, set className to active-nav. If not, leave blank
                  onClick={() => setIsNavShowing((prevState) => !prevState)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prevState) => !prevState)}
        >
          {/* this means onClick, update isNavShowing to the opposite of what it was */}
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
          {/* saying if isNavShowing is true which automatically unhides the list, then set the icon to the X icon, otherwise, maintian the burger */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
