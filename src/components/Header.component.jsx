import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
const Header = ({ front }) => {
  const { pathname } = useLocation();
  const checkPath = function (arg) {
    const truePath = matchPath(arg, pathname);
    if (truePath) {
      return true;
    } else {
      return false;
    }
  };

  const browserWidth = window.innerWidth > 900 ? true : false;

  const links = (
    <>
      <Link to="/">Home</Link>
      <Link className={checkPath("/works/*") ? "active" : "link"} to="/works">
        Works
      </Link>
      <Link className={checkPath("/contact") ? "active" : "link"} to="/contact">
        Contact
      </Link>
      <Link className={checkPath("/blog/*") ? "active" : "link"} to="/blog">
        Blog
      </Link>
    </>
  );

  return (
    <header>
      <div className="container">
        <div className="header-area">
          <div className="logo-area">
            <h2 className="logo">
              <Link to="/">WD</Link>
            </h2>
          </div>
          <div className="nav-right">
            {browserWidth ? (
              links
            ) : (
              <Menu right noOverlay width={200}>
                {links}
              </Menu>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
