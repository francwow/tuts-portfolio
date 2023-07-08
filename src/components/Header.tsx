import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="logo-container">
          <h2>
            <Link to={"/"}>tuts</Link>
          </h2>
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
