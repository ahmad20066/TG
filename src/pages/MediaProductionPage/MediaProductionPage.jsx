import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './MediaProductionPage.css';

const MediaProductionPage = () => {
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

    const handlePricingSlide = (direction) => {
        if (!isMobile) return;

        const newSlide = direction === 'next'
            ? Math.min(currentPricingSlide + 1, pricingPlans.length - 1)
            : Math.max(currentPricingSlide - 1, 0);

        setCurrentPricingSlide(newSlide);

        const gridElement = pricingGridRef.current;
        if (gridElement) {
            const cardWidth = gridElement.offsetWidth;
            gridElement.scrollTo({
                left: newSlide * cardWidth,
                behavior: 'smooth'
            });
        }
    };

    const portfolioItems = [
        {
            title: "Luxury Real Estate Showcase",
            category: "Real Estate",
            image: "/portfolio/real-estate-1.jpg"
        },
        {
            title: "Fashion Collection Launch",
            category: "Fashion",
            image: "/portfolio/fashion-1.jpg"
        },
        {
            title: "Hotel Virtual Tour",
            category: "Hospitality",
            image: "/portfolio/hospitality-1.jpg"
        },
        {
            title: "Medical Device Presentation",
            category: "Medical",
            image: "/portfolio/medical-1.jpg"
        },
        {
            title: "Government Campaign",
            category: "Government",
            image: "/portfolio/government-1.jpg"
        },
        {
            title: "Tech Product Launch",
            category: "Tech",
            image: "/portfolio/tech-1.jpg"
        }
    ];

    const pricingPlans = [
        {
            name: "Plan A",
            price: "$2,999",
            features: [
                "4K Video Production",
                "Professional Photography",
                "Basic CGI Elements",
                "2 Revision Rounds",
                "1-Day Shoot",
                "Basic Color Grading"
            ]
        },
        {
            name: "Plan B",
            price: "$5,999",
            features: [
                "4K Video Production",
                "Advanced Photography Package",
                "Complex CGI Integration",
                "4 Revision Rounds",
                "2-Day Shoot",
                "Advanced Color Grading",
                "Drone Footage",
                "Social Media Cuts"
            ]
        },
        {
            name: "Plan C",
            price: "Custom",
            features: [
                "8K Video Production",
                "Complete Photo Package",
                "Advanced CGI/3D",
                "Unlimited Revisions",
                "Multi-Day Shoots",
                "Cinema Grade Color",
                "Aerial Cinematography",
                "Multi-Platform Delivery",
                "Custom Solutions"
            ]
        }
    ];

    return (
        <div className="media-production-page">
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
                    <h1>Bringing Your Vision to Life</h1>
                    <p>Creating stunning visuals that captivate and inspire</p>
                    <motion.button
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start a Project
                    </motion.button>
                </motion.div>
            </section>

            {/* Intro Section */}
            <section className="intro-section">
                <motion.div
                    className="intro-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>What We Do</h2>
                    <p>We combine cutting-edge technology with creative excellence to deliver exceptional media production services. Our team of experts brings years of experience and passion to every project, ensuring your vision is perfectly captured and beautifully presented.</p>

                    <div className="pillars">
                        {[
                            { icon: "🎯", title: "Quality", desc: "Uncompromising attention to detail" },
                            { icon: "⚡", title: "Speed", desc: "Fast turnaround without sacrificing quality" },
                            { icon: "💡", title: "Creativity", desc: "Innovative solutions for unique challenges" }
                        ].map((pillar, index) => (
                            <motion.div
                                key={index}
                                className="pillar-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <span className="pillar-icon">{pillar.icon}</span>
                                <h3>{pillar.title}</h3>
                                <p>{pillar.desc}</p>
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
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Sub-Services Section */}
            <section className="sub-services-section">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Services
                </motion.h2>
                <div className="services-grid">
                    {[
                        {
                            title: "Photo Production",
                            desc: "Professional photography services for commercial, editorial, and corporate needs. From product shots to architectural photography, we deliver stunning visuals that tell your story."
                        },
                        {
                            title: "Video Production",
                            desc: "Full-service video production including pre-production planning, filming, and post-production. We create engaging content for commercials, corporate videos, and digital platforms."
                        },
                        {
                            title: "CGI / 3D",
                            desc: "State-of-the-art CGI and 3D visualization services. We bring your ideas to life with photorealistic renders, animations, and interactive experiences."
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Industries Section */}
            <section className="industries-section">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Industries We Serve
                </motion.h2>
                <div className="industries-grid">
                    {[
                        "Real Estate",
                        "Fashion",
                        "Hospitality",
                        "Medical",
                        "Government",
                        "Tech Startups"
                    ].map((industry, index) => (
                        <motion.div
                            key={index}
                            className="industry-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {industry}
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
                    {isMobile && currentPricingSlide > 0 && (
                        <motion.button
                            className="slider-arrow left"
                            onClick={() => handlePricingSlide('prev')}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ←
                        </motion.button>
                    )}
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
                                style={isMobile ? {
                                    flex: '0 0 100%',
                                    scrollSnapAlign: 'start'
                                } : {}}
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
                    {isMobile && currentPricingSlide < pricingPlans.length - 1 && (
                        <motion.button
                            className="slider-arrow right"
                            onClick={() => handlePricingSlide('next')}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            →
                        </motion.button>
                    )}
                </div>
                {isMobile && (
                    <div className="slider-dots">
                        {pricingPlans.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`dot ${index === currentPricingSlide ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentPricingSlide(index);
                                    pricingGridRef.current?.scrollTo({
                                        left: index * pricingGridRef.current.offsetWidth,
                                        behavior: 'smooth'
                                    });
                                }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                )}
            </section>
            <Footer />
        </div>
    );
};

export default MediaProductionPage;