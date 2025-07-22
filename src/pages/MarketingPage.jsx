import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MarketingPage.css';

const MarketingPage = () => {
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
            title: "Brand Identity Refresh",
            category: "Branding",
            description: "Complete brand overhaul for a luxury retail chain",
            image: "/portfolio/branding.jpg"
        },
        {
            title: "Social Media Campaign",
            category: "Social Media",
            description: "Viral campaign reaching millions of engagements",
            image: "/portfolio/social.jpg"
        },
        {
            title: "Content Strategy",
            category: "Content Creation",
            description: "12-month content roadmap for tech startup",
            image: "/portfolio/content.jpg"
        },
        {
            title: "Digital Marketing",
            category: "Marketing Strategy",
            description: "Multi-channel digital marketing campaign",
            image: "/portfolio/digital.jpg"
        },
        {
            title: "PR Campaign",
            category: "Public Relations",
            description: "Award-winning PR campaign for product launch",
            image: "/portfolio/pr.jpg"
        },
        {
            title: "Market Research",
            category: "Strategy",
            description: "In-depth market analysis and positioning",
            image: "/portfolio/research.jpg"
        }
    ];

    const marketingServices = [
        {
            title: "Brand Strategy",
            description: "Develop a powerful brand identity that resonates with your target audience and sets you apart from competitors.",
            features: [
                "Brand Identity Development",
                "Brand Guidelines",
                "Brand Voice & Messaging",
                "Visual Identity Design"
            ]
        },
        {
            title: "Digital Marketing",
            description: "Drive growth through strategic digital marketing campaigns across multiple channels.",
            features: [
                "Social Media Marketing",
                "Content Marketing",
                "Email Marketing",
                "SEO & SEM"
            ]
        },
        {
            title: "Content Creation",
            description: "Create engaging content that tells your story and connects with your audience.",
            features: [
                "Copywriting",
                "Video Production",
                "Social Media Content",
                "Blog & Article Writing"
            ]
        }
    ];

    const pricingPlans = [
        {
            name: "Essential",
            price: "$2,499/mo",
            features: [
                "Social Media Management",
                "Basic Content Creation",
                "Monthly Analytics",
                "Email Marketing",
                "Basic SEO",
                "2 Platforms",
                "Weekly Reports"
            ]
        },
        {
            name: "Professional",
            price: "$4,999/mo",
            features: [
                "Full Social Media Management",
                "Advanced Content Creation",
                "Real-time Analytics",
                "Email Marketing Automation",
                "Advanced SEO & SEM",
                "4 Platforms",
                "Weekly Strategy Calls",
                "PR Outreach",
                "Influencer Collaboration"
            ]
        },
        {
            name: "Enterprise",
            price: "Custom",
            features: [
                "Complete Digital Marketing",
                "Premium Content Production",
                "Advanced Analytics & AI",
                "Marketing Automation",
                "Full SEO & SEM Suite",
                "All Platforms",
                "Dedicated Manager",
                "PR & Media Relations",
                "Custom Strategy",
                "Brand Development"
            ]
        }
    ];

    return (
        <div className="marketing-page">
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
                    <h1>Strategic Marketing Solutions</h1>
                    <p>Elevate your brand with data-driven marketing strategies</p>
                    <motion.button
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Campaign
                    </motion.button>
                </motion.div>
            </section>

            {/* Marketing Services Section */}
            <section className="marketing-services-section">
                <motion.div
                    className="section-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Our Marketing Services</h2>
                    <div className="services-grid">
                        {marketingServices.map((service, index) => (
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

export default MarketingPage; 