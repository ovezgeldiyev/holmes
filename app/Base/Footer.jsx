import React from "react";
import { facebook, instagram, linkedin, twitter, youtube } from "./SVG";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-row">
            <div className="footer__inner-side">
              <div className="footer__inner-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <div className="footer__inner-links">
                <div className="footer__inner-col">
                  <h6>Column One</h6>
                  <a href="#">About Us</a>
                  <a href="#">Blog</a>
                  <a href="#">FAQ</a>
                  <a href="#">Contact Us</a>
                  <a href="#">Advertise</a>
                </div>
                <div className="footer__inner-col">
                  <h6>Column Two</h6>
                  <a href="#">Terms of Use</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Cookie Policy</a>
                  <a href="#">Link Nine</a>
                  <a href="#">Link Ten</a>
                </div>
                <div className="footer__inner-col">
                  <h6>Column Three</h6>
                  <a href="#">Link Eleven</a>
                  <a href="#">Link Twelve</a>
                  <a href="#">Link Thirteen</a>
                  <a href="#">Link Fourteen</a>
                  <a href="#">Link Fifteen</a>
                </div>
              </div>
            </div>
            <div className="footer__inner-main">
              <h6>Subscribe</h6>
              <p>Join our mailing list for updates.</p>
              <div className="footerForm">
                <div className="footerForm__row">
                  <div className="footerForm__input">
                    <input type="email" placeholder="Enter your email" />
                  </div>
                  <button type="submit" className="footerForm__button">
                    Subscribe
                  </button>
                </div>
                <p>
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from us.
                </p>
              </div>
            </div>
          </div>
          <div className="footerCopy">
            <div className="footerCopy__side">
              <p>© 2024 Relume. All rights reserved.</p>
              <div className="footerCopy__links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookies Settings</a>
              </div>
            </div>
            <div className="footerCopy__social">
              <a href="#">{facebook}</a>
              <a href="#">{instagram}</a>
              <a href="#">{twitter}</a>
              <a href="#">{linkedin}</a>
              <a href="#">{youtube}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
