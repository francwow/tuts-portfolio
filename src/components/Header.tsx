import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import NavContext from "../context/NavContext";
import { NavContextType } from "../types/Types";
import Social from "./Social";

type Header = {
  setNavActive: (value: boolean) => void;
};

const Header = ({ setNavActive }: Header) => {
  const navActive = useContext<NavContextType>(NavContext);

  function handleBurger() {
    setNavActive(!navActive);
  }

  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="logo-container">
          <h2 className="logo">
            <Link to={"/"}>tuts</Link>
          </h2>
        </div>
        <div className="burger-container">
          <button
            onClick={handleBurger}
            className={navActive ? "nav-burger toggle" : "nav-burger"}
          >
            <div className="line-one"></div>
            <div className="line-two"></div>
          </button>
        </div>
        <div className="nav-container">
          <nav className="main-nav">
            <ul className="nav-list">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <Social />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
