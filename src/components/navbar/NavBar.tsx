import logo from "/logo.svg";
import { Button } from "antd";
import { buttonStyle, desktopButtonStyle } from "../../utils/CustomStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };
  return (
    <section className="navbar">
      {/* mobile  navnar */}
      <div className="mobile-navbar">
        <div className="mobile">
          <div className="logo">
            <img className="logo" src={logo} alt="" />
          </div>
          <div onClick={toggleNavBar} className="hamburger">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        {showNavBar && (
          <div className="nav-menus">
            <div className="nav items">
              <div className="nav-links">Features</div>
              <div className="nav-links">Pricing</div>
              <div className="nav-links">Resources</div>

              <div className="horizontal-line"></div>
              <div className="nav-links">Login</div>
              <div className="nav-button">
                <Button type="primary" style={buttonStyle}>
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* desktop navbar  */}
      <div className="navbar-menu">
        <div className="desktop">
          <div className="nav-left">
            <div className="logo">
              <img className="logo" src={logo} alt="navbar.logo" />
            </div>
            <div className="nav-menus-desktop">
              <div className="nav-links-desktop">Features</div>
              <div className="nav-links-desktop">Pricing</div>
              <div className="nav-links-desktop">Resources</div>
            </div>
          </div>

          <div className="nav-right">
            <div className="nav-links-desktop" id="navlink">
              Login
            </div>
            <div className="nav-button">
              <Button type="primary" style={desktopButtonStyle}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
