import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaVideo,
  FaCamera,
  FaCube,
  FaEdit,
  FaPalette,
  FaFilm,
  FaChartLine,
  FaPaintBrush,
  FaShieldAlt,
  FaPlay,
} from "react-icons/fa";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./MediaProductionPage.css";

const MediaProductionPage = () => {
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

  const handlePricingSlide = (direction) => {
    if (!isMobile) return;

    const newSlide =
      direction === "next"
        ? Math.min(currentPricingSlide + 1, pricingPlans.length - 1)
        : Math.max(currentPricingSlide - 1, 0);

    setCurrentPricingSlide(newSlide);

    const gridElement = pricingGridRef.current;
    if (gridElement) {
      const cardWidth = gridElement.offsetWidth;
      gridElement.scrollTo({
        left: newSlide * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const portfolioItems = [
    {
      title: "Luxury Real Estate Showcase",
      category: "Real Estate",
      image: "/portfolio/real-estate-1.jpg",
    },
    {
      title: "Fashion Collection Launch",
      category: "Fashion",
      image: "/portfolio/fashion-1.jpg",
    },
    {
      title: "Hotel Virtual Tour",
      category: "Hospitality",
      image: "/portfolio/hospitality-1.jpg",
    },
    {
      title: "Medical Device Presentation",
      category: "Medical",
      image: "/portfolio/medical-1.jpg",
    },
    {
      title: "Government Campaign",
      category: "Government",
      image: "/portfolio/government-1.jpg",
    },
    {
      title: "Tech Product Launch",
      category: "Tech",
      image: "/portfolio/tech-1.jpg",
    },
  ];

  const mediaServices = [
    {
      icon: <FaVideo />,
      title: "Video Production",
      description:
        "Full-service video production including pre-production planning, filming, and post-production for commercials, corporate videos, and digital platforms.",
      features: [
        "4K/8K Video Production",
        "Pre-production Planning",
        "Professional Filming",
        "Post-production Editing",
      ],
    },
    {
      icon: <FaCamera />,
      title: "Photography",
      description:
        "Professional photography services for commercial, editorial, and corporate needs. From product shots to architectural photography.",
      features: [
        "Commercial Photography",
        "Product Photography",
        "Corporate Headshots",
        "Event Photography",
      ],
    },
    {
      icon: <FaCube />,
      title: "CGI & 3D",
      description:
        "State-of-the-art CGI and 3D visualization services. We bring your ideas to life with photorealistic renders and animations.",
      features: [
        "3D Modeling",
        "CGI Integration",
        "Product Visualization",
        "Architectural Rendering",
      ],
    },
    {
      icon: <FaEdit />,
      title: "Post-Production",
      description:
        "Professional post-production services including editing, color grading, sound design, and visual effects.",
      features: [
        "Video Editing",
        "Color Grading",
        "Sound Design",
        "Visual Effects",
      ],
    },
    {
      icon: <FaPalette />,
      title: "Motion Graphics",
      description:
        "Creative motion graphics and animation services for branding, explainer videos, and digital content.",
      features: [
        "2D Animation",
        "Motion Graphics",
        "Logo Animation",
        "Explainer Videos",
      ],
    },
    {
      icon: <FaFilm />,
      title: "Documentary Production",
      description:
        "Complete documentary production services from concept development to final delivery.",
      features: [
        "Story Development",
        "Interview Setup",
        "Location Filming",
        "Documentary Editing",
      ],
    },
  ];

  return (
    <div className="media-production-page">
      <Header />
      <canvas ref={canvasRef} className="particle-canvas" />

      <main className="media-production-content">
        {/* Hero Section */}
        <section className="media-production-hero">
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
                Media Production
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Bringing Your Vision to
                <span className="highlight"> Life</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                From videos to photography, we craft high-quality content that
                captures attention and drives impact through creative
                excellence.
              </motion.p>
              {/* <motion.div
                className="hero-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  { number: "200+", label: "Projects Completed" },
                  { number: "50+", label: "Brands Served" },
                  { number: "4K+", label: "Hours of Content" },
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
              */}
            </motion.div>
          </div>
        </section>

        {/* Main Media Services Section */}
        <section className="main-services">
          <div className="section-container">
            <h2>Our Media Production Services</h2>
            <p className="section-description">
              Comprehensive media production solutions for all your creative
              needs
            </p>
            <div className="services-grid">
              {mediaServices.map((service, index) => (
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

        {/* Equipment & Technologies Section */}
        <section className="technologies-section">
          <div className="section-container">
            <h2>Equipment & Technologies</h2>
            <p className="section-description">
              We use industry-leading equipment and software for exceptional
              results
            </p>
            <div className="tech-grid">
              {[
                {
                  icon: <FaVideo />,
                  name: "Video Equipment",
                  items: [
                    "RED Cameras",
                    "Sony FX Series",
                    "DJI Drones",
                    "Steadicam",
                  ],
                },
                {
                  icon: <FaCamera />,
                  name: "Photography",
                  items: [
                    "Canon R Series",
                    "Nikon Z Series",
                    "Profoto Lighting",
                    "Phase One",
                  ],
                },
                {
                  icon: <FaEdit />,
                  name: "Post-Production",
                  items: [
                    "DaVinci Resolve",
                    "Adobe Creative Suite",
                    "Avid Media Composer",
                    "Cinema 4D",
                  ],
                },
                {
                  icon: <FaCube />,
                  name: "3D & CGI",
                  items: ["Blender", "Maya", "3ds Max", "Houdini"],
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
            <h2>Our Production Process</h2>
            <p className="section-description">
              A systematic approach to delivering exceptional media content
            </p>
            <div className="timeline-container">
              <div className="timeline-line">
                <div className="timeline-progress"></div>
              </div>
              <div className="process-steps">
                {[
                  {
                    icon: <FaChartLine />,
                    title: "Concept & Planning",
                    description:
                      "Understanding your vision and creating detailed production plans and storyboards",
                    step: "01",
                  },
                  {
                    icon: <FaPaintBrush />,
                    title: "Pre-Production",
                    description:
                      "Location scouting, casting, equipment preparation, and creative direction setup",
                    step: "02",
                  },
                  {
                    icon: <FaPlay />,
                    title: "Production",
                    description:
                      "Professional filming and photography with state-of-the-art equipment",
                    step: "03",
                  },
                  {
                    icon: <FaShieldAlt />,
                    title: "Post-Production",
                    description:
                      "Editing, color grading, sound design, and final delivery in your preferred format",
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
              <h2>Ready to Create Something Amazing?</h2>
              <p>
                Let's bring your creative vision to life with professional media
                production
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

export default MediaProductionPage;
