import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-section">
                        <h3>TG MENA</h3>
                        <p className="company-description">
                            Transforming ideas into digital reality. Your partner in creative excellence and technological innovation.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="social-icon" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="#" className="social-icon" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" className="social-icon" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="#production">Production</a></li>
                            <li><a href="#marketing">Marketing & Communication</a></li>
                            <li><a href="#tech">Tech Solutions</a></li>
                            <li><a href="#creative">Creative Services</a></li>
                            <li><a href="#consulting">Consulting</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaPhoneAlt className="contact-icon" />
                                <span>+971 XX XXX XXXX</span>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <span>info@tgmena.com</span>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>Dubai, United Arab Emirates</span>
                            </div>
                        </div>
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