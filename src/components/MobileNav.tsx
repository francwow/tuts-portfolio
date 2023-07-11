import { NavLink } from "react-router-dom";
import { useContext } from "react";
import Header from "./Header";
import Social from "./Social";
import NavContext from "../context/NavContext";
import { NavContextType } from "../types/Types";

type MobileNav = {
  setNavActive: (value: boolean) => void;
  deskTop: boolean;
};

const MobileNav = ({ setNavActive, deskTop }: MobileNav) => {
  const navActive = useContext<NavContextType>(NavContext);

  function handleLinkClick() {
    if (navActive) {
      setNavActive(!navActive);
    }
  }

  return (
    <div
      className={
        !deskTop && navActive
          ? "mobile-nav-container nav-active"
          : "mobile-nav-container"
      }
    >
      <Header setNavActive={setNavActive} />
      <Social />
      <nav className="mobile-nav">
        <ul className="mobile-list">
          <li>
            <NavLink
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
              to={"/contact"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
