import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const navigate = useNavigate();
    const location = useLocation();

    // Transform header background based on scroll
    const headerBackground = useTransform(
        scrollY,
        [0, 100],
        ["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.95)"]
    );

    const headerBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(20px)"]
    );

    // Effect to handle scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Work', path: '/work' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (item) => {
        if (item.path) {
            // For page navigation
            navigate(item.path);
        } else if (item.href && location.pathname === '/') {
            // For same-page section scrolling
            const element = document.querySelector(item.href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (item.href) {
            // For navigating to home page sections from other pages
            navigate('/');
            // Wait for navigation to complete before scrolling
            setTimeout(() => {
                const element = document.querySelector(item.href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.header
            className={`header ${isScrolled ? 'scrolled' : ''}`}
            style={{
                background: headerBackground,
                backdropFilter: headerBlur
            }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="header-container">
                {/* Logo */}
                <motion.div
                    className="header-logo"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => navigate('/')}
                    style={{ cursor: 'pointer' }}
                >
                    <motion.div
                        className="logo-symbol"
                        animate={{
                            filter: [
                                "drop-shadow(0 0 20px rgba(229, 9, 20, 0.3))",
                                "drop-shadow(0 0 30px rgba(229, 9, 20, 0.6))",
                                "drop-shadow(0 0 20px rgba(229, 9, 20, 0.3))"
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <img src={logo} alt="TG MENA" className="header-logo" />
                    </motion.div>
                </motion.div>

                {/* Navigation */}
                <nav className="header-nav">
                    <ul className="nav-list">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item.name}
                                className="nav-item"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <motion.a
                                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                    onClick={() => handleNavClick(item)}
                                    whileHover={{
                                        color: "#E50914",
                                        textShadow: "0 0 10px rgba(229, 9, 20, 0.5)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {item.name}
                                    <motion.span
                                        className="nav-underline"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Toggle */}
                <motion.button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.span
                        className="hamburger-line"
                        animate={{
                            rotate: isMobileMenuOpen ? 45 : 0,
                            y: isMobileMenuOpen ? 6 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        className="hamburger-line"
                        animate={{
                            opacity: isMobileMenuOpen ? 0 : 1
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        className="hamburger-line"
                        animate={{
                            rotate: isMobileMenuOpen ? -45 : 0,
                            y: isMobileMenuOpen ? -6 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    height: isMobileMenuOpen ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
            >
                <motion.ul className="mobile-nav-list">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.name}
                            className="mobile-nav-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: isMobileMenuOpen ? 1 : 0,
                                x: isMobileMenuOpen ? 0 : -20
                            }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <motion.a
                                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={() => handleNavClick(item)}
                                whileHover={{
                                    color: "#E50914",
                                    x: 10
                                }}
                                transition={{ duration: 0.3 }}
                                style={{ cursor: 'pointer' }}
                            >
                                {item.name}
                            </motion.a>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.header>
    );
};

export default Header; 