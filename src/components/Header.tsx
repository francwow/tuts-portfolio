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
            <Link onClick={() => setNavActive(false)} to={"/"}>
              tuts
            </Link>
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
                  Trabajo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/acerca"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Acerca
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contacto"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Contacto
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
