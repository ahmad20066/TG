import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
  FaPaintBrush,
  FaCogs,
  FaLaptopCode,
} from "react-icons/fa";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./TechServicesPage.css";

const TechServicesPage = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleCardClick = (index) => {
    if (window.innerWidth <= 768) {
      setExpandedCard(expandedCard === index ? null : index);
    }
  };

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
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

        if (
          this.x < 0 ||
          this.x > canvas.width ||
          this.y < 0 ||
          this.y > canvas.height
        ) {
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
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Full-stack e-commerce solution with advanced features",
      image: "/portfolio/ecommerce.jpg",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure and user-friendly banking application",
      image: "/portfolio/banking.jpg",
    },
    {
      title: "AI Analytics Dashboard",
      category: "Enterprise Software",
      description: "Real-time data analytics with AI insights",
      image: "/portfolio/analytics.jpg",
    },
    {
      title: "IoT Smart Home",
      category: "IoT Solutions",
      description: "Connected home automation system",
      image: "/portfolio/iot.jpg",
    },
    {
      title: "Cloud Migration",
      category: "Cloud Services",
      description: "Enterprise-scale cloud infrastructure",
      image: "/portfolio/cloud.jpg",
    },
    {
      title: "Blockchain Platform",
      category: "Blockchain",
      description: "Decentralized application platform",
      image: "/portfolio/blockchain.jpg",
    },
  ];

  const techServices = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Custom web applications, progressive web apps, and enterprise portals using the latest technologies and frameworks.",
      features: [
        "React/Angular/Vue.js",
        "Node.js/Python/PHP",
        "REST/GraphQL APIs",
        "Database Design",
      ],
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
      features: [
        "iOS (Swift/SwiftUI)",
        "Android (Kotlin)",
        "React Native",
        "Flutter",
      ],
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description:
        "Cloud architecture, migration, and management services for scalable and reliable infrastructure.",
      features: [
        "AWS/Azure/GCP",
        "Containerization",
        "Microservices",
        "DevOps",
      ],
    },
    {
      icon: <FaDatabase />,
      title: "Database Solutions",
      description:
        "Robust database architecture and management systems for optimal performance and scalability.",
      features: [
        "Database Design",
        "Data Migration",
        "Performance Optimization",
        "Data Security",
      ],
    },
    {
      icon: <FaRobot />,
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions powered by advanced AI technologies and machine learning algorithms.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Machine Learning Models",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Incident Response",
      ],
    },
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
        "Documentation",
      ],
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
        "Comprehensive Documentation",
      ],
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
        "Training & Workshops",
      ],
    },
  ];

  return (
    <div className="tech-services-page">
      <Header />
      <canvas ref={canvasRef} className="particle-canvas" />

      <main className="tech-services-content">
        {/* Hero Section */}
        <section className="tech-services-hero">
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
                Technology Solutions
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Digital Innovation for
                <span className="highlight"> Modern Businesses</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Transforming businesses through cutting-edge technology
                solutions, innovative development, and scalable digital
                infrastructure.
              </motion.p>
            </motion.div>
          </div>
        </section>
        <section className="main-services">
          <div className="section-container">
            <h2>Our Technology Services</h2>
            <p className="section-description">
              Comprehensive technology solutions tailored to your business needs
            </p>
            <div className="services-grid">
              {techServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={`service-card ${
                    expandedCard === index ? "expanded" : ""
                  }`}
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
              We leverage the latest technologies to deliver cutting-edge
              solutions
            </p>
            <div className="tech-grid">
              {[
                {
                  icon: <FaCode />,
                  name: "Frontend",
                  items: ["React", "Angular", "Vue.js", "TypeScript"],
                },
                {
                  icon: <FaMobileAlt />,
                  name: "Mobile Applications",
                  items: ["React Native", "Flutter", "Swift", "Kotlin"],
                },
                {
                  icon: <FaCogs />,
                  name: "Backend",
                  items: ["Node.js", "Python", "Java", "C#"],
                },
                {
                  icon: <FaDatabase />,
                  name: "Database",
                  items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
                },
                {
                  icon: <FaCloud />,
                  name: "Cloud & DevOps",
                  items: ["AWS", "Azure", "Docker", "Kubernetes"],
                },
              ].map((tech, index) => (
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
            <h2>Our Development Process</h2>
            <p className="section-description">
              A systematic approach to delivering exceptional technology
              solutions
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
                    description:
                      "Understanding your requirements and creating a comprehensive development roadmap",
                    step: "01",
                  },
                  {
                    icon: <FaPaintBrush />,
                    title: "Design & Architecture",
                    description:
                      "Creating intuitive designs and robust system architecture for optimal performance",
                    step: "02",
                  },
                  {
                    icon: <FaLaptopCode />,
                    title: "Development & Testing",
                    description:
                      "Building robust solutions with clean code and comprehensive testing protocols",
                    step: "03",
                  },
                  {
                    icon: <FaShieldAlt />,
                    title: "Deployment & Support",
                    description:
                      "Seamless deployment and ongoing support to ensure optimal performance",
                    step: "04",
                  },
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
              <h2>Ready to Transform Your Business?</h2>
              <p>
                Let's discuss how we can help bring your technology vision to
                life
              </p>
              <motion.button
                className="cta-button"
                onClick={() => navigate("/contact")}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechServicesPage;
