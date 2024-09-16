import React, { useEffect, useState } from "react";
import { globeIcon } from "./SVG";
export default function Header() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  function scrollFunc() {
    let header = document.getElementById("header");
    if (window.scrollY >= 60) {
      header.classList.add("sticky");
    } else header.classList.remove("sticky");
  }
  const close = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
  }, []);
  return (
    <header className="header" id="header">
      <div className="auto__container">
        <div className="header__inner">
          <div className="header__inner-logo">
            <img src="/images/logo.png" alt="" />
          </div>
          <div className="header__inner-side">
            <nav className={"nav " + (menu ? "active" : "")} onClick={close}>
              <div className="nav__inner">
                <ul className="nav__inner-links">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Buy</a>
                  </li>{" "}
                  <li>
                    <a href="#">Rent</a>
                  </li>{" "}
                  <li>
                    <a href="#">Agents</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
                <div className="nav__inner-buttons">
                  <a href="#" className="button primary">
                    Register
                  </a>
                  <a href="#" className="button secondary">
                    Login
                  </a>
                  <div className="lang">
                    <div className="lang__btn">{globeIcon}</div>
                    <div className="lang__menu">
                      <a href="#">DE</a>
                      <a href="#">EN</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className="header__inner-buttons">
              <div className="profile">
                <div className="profile__avatar">
                  <img src="/images/avatar.png" alt="" />
                </div>
              </div>
              <div
                className={"burger " + (menu ? "active" : "")}
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
