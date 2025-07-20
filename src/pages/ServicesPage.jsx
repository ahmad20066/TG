import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import {
    FaCode,
    FaMobileAlt,
    FaPaintBrush,
    FaDatabase,
    FaCloud,
    FaRobot,
    FaShieldAlt,
    FaChartLine,
    FaCogs,
    FaSearchDollar,
    FaBullhorn,
    FaChartBar,
    FaHashtag,
    FaVideo,
    FaPencilAlt
} from 'react-icons/fa';
import './ServicesPage.css';

const ServicesPage = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const canvasRef = useRef(null);

    const handleCardClick = (index) => {
        if (window.innerWidth <= 768) {
            setExpandedCard(expandedCard === index ? null : index);
        }
    };

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

    const services = [
        {
            icon: <FaSearchDollar />,
            title: "Digital Marketing",
            description: "Strategic digital marketing solutions to boost your online presence and drive growth.",
            features: [
                "Search Engine Optimization (SEO)",
                "Pay-Per-Click Advertising (PPC)",
                "Content Marketing Strategy",
                "Marketing Analytics & Reporting"
            ]
        },
        {
            icon: <FaBullhorn />,
            title: "Social Media Marketing",
            description: "Comprehensive social media management and marketing campaigns.",
            features: [
                "Social Media Strategy",
                "Content Creation & Curation",
                "Community Management",
                "Social Media Advertising"
            ]
        },
        {
            icon: <FaChartBar />,
            title: "Brand Development",
            description: "Build and strengthen your brand identity across all digital platforms.",
            features: [
                "Brand Strategy",
                "Visual Identity Design",
                "Brand Guidelines",
                "Brand Voice Development"
            ]
        },
        {
            icon: <FaHashtag />,
            title: "Influencer Marketing",
            description: "Connect with influential voices to amplify your brand message.",
            features: [
                "Influencer Outreach",
                "Campaign Management",
                "Performance Tracking",
                "ROI Analysis"
            ]
        },
        {
            icon: <FaVideo />,
            title: "Content Creation",
            description: "Engaging multimedia content that tells your brand story.",
            features: [
                "Video Production",
                "Photography",
                "Graphic Design",
                "Animation"
            ]
        },
        {
            icon: <FaPencilAlt />,
            title: "Copywriting & Content",
            description: "Compelling content that engages your audience and drives action.",
            features: [
                "Website Copy",
                "Blog Writing",
                "Email Marketing",
                "Social Media Content"
            ]
        },
        {
            icon: <FaCode />,
            title: "Web Development",
            description: "Custom web applications with cutting-edge technologies and modern frameworks.",
            features: [
                "Responsive Design",
                "Progressive Web Apps",
                "E-commerce Solutions",
                "Content Management Systems"
            ]
        },
        {
            icon: <FaMobileAlt />,
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications for iOS and Android.",
            features: [
                "iOS Development",
                "Android Development",
                "Cross-platform Solutions",
                "Mobile UI/UX Design"
            ]
        },
        {
            icon: <FaPaintBrush />,
            title: "UI/UX Design",
            description: "User-centered design solutions that drive engagement and satisfaction.",
            features: [
                "User Interface Design",
                "User Experience Design",
                "Prototyping",
                "Design Systems"
            ]
        },
        {
            icon: <FaDatabase />,
            title: "Database Solutions",
            description: "Robust database architecture and management systems.",
            features: [
                "Database Design",
                "Data Migration",
                "Performance Optimization",
                "Data Security"
            ]
        },
        {
            icon: <FaCloud />,
            title: "Cloud Services",
            description: "Scalable cloud solutions for modern business needs.",
            features: [
                "Cloud Migration",
                "AWS/Azure/GCP",
                "Cloud Architecture",
                "DevOps"
            ]
        },
        {
            icon: <FaRobot />,
            title: "AI",
            description: "Intelligent solutions powered by advanced AI technologies.",
            features: [
                "Predictive Analytics",
                "Natural Language Processing",
                "Computer Vision",
                "Machine Learning Models"
            ]
        }
    ];

    const technologies = [
        {
            icon: <FaCode />,
            name: "Development",
            items: ["React js", "Flutter", "Node js", "Laravel"]
        },
        {
            icon: <FaSearchDollar />,
            name: "Marketing",
            items: ["Google Ads", "Facebook Ads", "SEMrush", "HubSpot"]
        },
        {
            icon: <FaChartBar />,
            name: "Analytics",
            items: ["Google Analytics", "Mixpanel", "Hotjar", "Tableau"]
        },
        {
            icon: <FaBullhorn />,
            name: "Social Media",
            items: ["Buffer", "Hootsuite", "Sprout Social", "Canva"]
        }
    ];

    return (
        <div className="services-page">
            <Header />
            <canvas ref={canvasRef} className="particle-canvas" />

            <main className="services-content">
                {/* Hero Section */}
                <section className="services-hero">
                    <div className="hero-content">
                        <motion.div
                            className="hero-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.span
                                className="hero-tag"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Our Expertise
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Digital Solutions for
                                <span className="highlight"> Modern Businesses</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                From web development to digital marketing, we deliver comprehensive solutions
                                that drive growth and innovation in the digital age.
                            </motion.p>
                            <motion.div
                                className="hero-stats"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                {[
                                    { number: "200+", label: "Projects Completed" },
                                    { number: "50+", label: "Expert Team Members" },
                                    { number: "98%", label: "Client Satisfaction" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        className="stat-item"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <span className="stat-number">{stat.number}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Main Services Section */}
                <section className="main-services">
                    <div className="section-container">
                        <div className="services-grid">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    className={`service-card ${expandedCard === index ? 'expanded' : ''}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    onClick={() => handleCardClick(index)}
                                >
                                    <div className="service-icon">{service.icon}</div>
                                    <div className="service-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <ul className="service-features">
                                            {service.features.map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="technologies-section">
                    <div className="section-container">
                        <h2>Technologies We Use</h2>
                        <p className="section-description">
                            We leverage the latest technologies to deliver cutting-edge solutions
                        </p>
                        <div className="tech-grid">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    className="tech-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="tech-icon">{tech.icon}</div>
                                    <h3>{tech.name}</h3>
                                    <ul className="tech-list">
                                        {tech.items.map((item, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="process-section">
                    <div className="section-container">
                        <h2>Our Process</h2>
                        <p className="section-description">
                            A systematic approach to delivering exceptional results
                        </p>
                        <div className="timeline-container">
                            <div className="timeline-line">
                                <div className="timeline-progress"></div>
                            </div>
                            <div className="process-steps">
                                {[
                                    {
                                        icon: <FaChartLine />,
                                        title: "Discovery & Planning",
                                        description: "Understanding your needs and creating a roadmap for success",
                                        step: "01"
                                    },
                                    {
                                        icon: <FaPaintBrush />,
                                        title: "Design & Prototyping",
                                        description: "Creating intuitive designs and interactive prototypes",
                                        step: "02"
                                    },
                                    {
                                        icon: <FaCode />,
                                        title: "Development",
                                        description: "Building robust solutions with clean, efficient code",
                                        step: "03"
                                    },
                                    {
                                        icon: <FaShieldAlt />,
                                        title: "Testing & Launch",
                                        description: "Rigorous testing and smooth deployment",
                                        step: "04"
                                    }
                                ].map((step, index) => (
                                    <motion.div
                                        key={step.title}
                                        className="timeline-step"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="step-content">
                                            <div className="step-number">{step.step}</div>
                                            <div className="step-icon">{step.icon}</div>
                                            <div className="step-text">
                                                <h3>{step.title}</h3>
                                                <p>{step.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="section-container">
                        <motion.div
                            className="cta-content"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2>Ready to Start Your Project?</h2>
                            <p>Let's discuss how we can help bring your ideas to life</p>
                            <motion.button
                                className="cta-button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Us
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ServicesPage; 