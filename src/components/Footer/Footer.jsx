import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3>TG MENA</h3>
            <p className="company-description">
              Transforming ideas into digital reality. Your partner in creative
              excellence and technological innovation.
            </p>
            <div
              className="social-links"
              style={{ display: "flex", gap: "1rem" }}
            >
              <a
                href="https://www.instagram.com/tg.mena?igsh=dXEyYXZmdHg3Yjk4"
                className="social-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/towardsgreatness/"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button
                  onClick={() => handleNavigation("/services")}
                  className="footer-nav-button"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/work")}
                  className="footer-nav-button"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="footer-nav-button"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="footer-nav-button"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/")}
                  className="footer-nav-button"
                >
                  Home
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>
                <button
                  onClick={() => handleNavigation("/services/media-production")}
                  className="footer-nav-button"
                >
                  Media Production
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/services/marketing")}
                  className="footer-nav-button"
                >
                  Marketing & Communication
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/services/tech")}
                  className="footer-nav-button"
                >
                  Tech Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/services")}
                  className="footer-nav-button"
                >
                  All Services
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li>
                <a href="tel:‎+966 50 397 4458">
                  <FaPhoneAlt className="footer-link-icon" />
                  ‎+966 50 397 4458
                </a>
              </li>
              <li>
                <a href="mailto:Info@tgmena.com">
                  <FaEnvelope className="footer-link-icon" />
                  Info@tgmena.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter-section">
          <h4>Subscribe to Our Newsletter</h4>
          <p>Stay updated with our latest news and updates</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <motion.button
              type="submit"
              className="newsletter-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} TG MENA. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
