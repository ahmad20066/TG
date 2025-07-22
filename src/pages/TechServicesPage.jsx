import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './TechServicesPage.css';

const TechServicesPage = () => {
    const navigate = useNavigate();
    const canvasRef = useRef(null);
    const [currentPricingSlide, setCurrentPricingSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const pricingGridRef = useRef(null);

    // Particle animation
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width ||
                    this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }

            draw() {
                ctx.fillStyle = `rgba(229, 9, 20, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const portfolioItems = [
        {
            title: "E-Commerce Platform",
            category: "Web Development",
            description: "Full-stack e-commerce solution with advanced features",
            image: "/portfolio/ecommerce.jpg"
        },
        {
            title: "Mobile Banking App",
            category: "Mobile Development",
            description: "Secure and user-friendly banking application",
            image: "/portfolio/banking.jpg"
        },
        {
            title: "AI Analytics Dashboard",
            category: "Enterprise Software",
            description: "Real-time data analytics with AI insights",
            image: "/portfolio/analytics.jpg"
        },
        {
            title: "IoT Smart Home",
            category: "IoT Solutions",
            description: "Connected home automation system",
            image: "/portfolio/iot.jpg"
        },
        {
            title: "Cloud Migration",
            category: "Cloud Services",
            description: "Enterprise-scale cloud infrastructure",
            image: "/portfolio/cloud.jpg"
        },
        {
            title: "Blockchain Platform",
            category: "Blockchain",
            description: "Decentralized application platform",
            image: "/portfolio/blockchain.jpg"
        }
    ];

    const techServices = [
        {
            title: "Web Development",
            description: "Custom web applications, progressive web apps, and enterprise portals using the latest technologies and frameworks.",
            features: [
                "React/Angular/Vue.js",
                "Node.js/Python/PHP",
                "REST/GraphQL APIs",
                "Database Design"
            ]
        },
        {
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
            features: [
                "iOS (Swift/SwiftUI)",
                "Android (Kotlin)",
                "React Native",
                "Flutter"
            ]
        },
        {
            title: "Cloud Solutions",
            description: "Cloud architecture, migration, and management services for scalable and reliable infrastructure.",
            features: [
                "AWS/Azure/GCP",
                "Containerization",
                "Microservices",
                "DevOps"
            ]
        }
    ];

    const pricingPlans = [
        {
            name: "Startup",
            price: "$5,999",
            features: [
                "Single Platform Development",
                "Basic Features Integration",
                "Standard UI/UX Design",
                "3 Months Support",
                "Basic Security Features",
                "Performance Optimization",
                "Documentation"
            ]
        },
        {
            name: "Business",
            price: "$12,999",
            features: [
                "Multi-Platform Development",
                "Advanced Features",
                "Premium UI/UX Design",
                "6 Months Support",
                "Advanced Security",
                "Performance Optimization",
                "API Integration",
                "Analytics Integration",
                "Comprehensive Documentation"
            ]
        },
        {
            name: "Enterprise",
            price: "Custom",
            features: [
                "Full-Scale Development",
                "Custom Features",
                "Enterprise UI/UX Design",
                "12 Months Support",
                "Enterprise Security",
                "Advanced Optimization",
                "Full API Integration",
                "Advanced Analytics",
                "Complete Documentation",
                "Training & Workshops"
            ]
        }
    ];

    return (
        <div className="tech-services-page">
            <canvas ref={canvasRef} className="particle-canvas" />
            <Header />

            {/* Hero Banner */}
            <section className="hero-banner">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Digital Innovation Hub</h1>
                    <p>Transforming businesses through cutting-edge technology solutions</p>
                    <motion.button
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Project
                    </motion.button>
                </motion.div>
            </section>

            {/* Tech Services Section */}
            <section className="tech-services-section">
                <motion.div
                    className="section-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Our Tech Services</h2>
                    <div className="services-grid">
                        {techServices.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className="features-list">
                                    {service.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={featureIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.2 + featureIndex * 0.1 }}
                                        >
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Portfolio Section */}
            <section className="portfolio-section">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Work
                </motion.h2>
                <div className="portfolio-grid">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="portfolio-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="portfolio-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.category}</p>
                            <p className="description">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing-section">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Pricing Plans
                </motion.h2>
                <div className="pricing-container">
                    <div
                        className="pricing-grid"
                        ref={pricingGridRef}
                    >
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                className="pricing-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3>{plan.name}</h3>
                                <div className="price">{plan.price}</div>
                                <ul>
                                    {plan.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={featureIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.2 + featureIndex * 0.1 }}
                                        >
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                                <div className="plan-cta-container">
                                    <motion.button
                                        className="plan-cta"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Choose Plan
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TechServicesPage; 