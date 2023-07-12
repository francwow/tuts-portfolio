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
          <li className={navActive ? "fade-up" : ""}>
            <NavLink
              onClick={handleLinkClick}
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Trabajo
            </NavLink>
          </li>
          <li className={navActive ? "fade-up" : ""}>
            <NavLink
              onClick={handleLinkClick}
              to={"/acerca"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Acerca
            </NavLink>
          </li>
          <li className={navActive ? "fade-up" : ""}>
            <NavLink
              onClick={handleLinkClick}
              to={"/contacto"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
