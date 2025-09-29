import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaBullhorn,
  FaPaintBrush,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./MarketingPage.css";

const MarketingPage = () => {
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

  const marketingSubServices = [
    {
      icon: <FaBullhorn />,
      title: "Social Media Marketing",
      description:
        "Build your brand presence across all major social platforms with engaging content and strategic campaigns.",
      features: [
        "Content Creation",
        "Community Management",
        "Paid Advertising",
        "Analytics & Reporting",
      ],
    },
    {
      icon: <FaPaintBrush />,
      title: "Brand Strategy & Design",
      description:
        "Create a compelling brand identity that resonates with your audience and stands out in the market.",
      features: [
        "Brand Identity",
        "Logo Design",
        "Brand Guidelines",
        "Visual Storytelling",
      ],
    },
    {
      icon: <FaChartLine />,
      title: "Digital Advertising",
      description:
        "Drive targeted traffic and conversions through strategic paid advertising campaigns.",
      features: [
        "Google Ads",
        "Facebook Ads",
        "LinkedIn Ads",
        "Campaign Optimization",
      ],
    },
    {
      icon: <FaUsers />,
      title: "Content Marketing",
      description:
        "Engage your audience with valuable, relevant content that drives action and builds trust.",
      features: [
        "Content Strategy",
        "Blog Writing",
        "Video Content",
        "Email Marketing",
      ],
    },
  ];

  const marketingProcess = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We dive deep into your business, audience, and goals to create a tailored marketing strategy.",
    },
    {
      step: "02",
      title: "Creative Development",
      description:
        "Our team crafts compelling content, designs, and campaigns that align with your brand vision.",
    },
    {
      step: "03",
      title: "Launch & Execute",
      description:
        "We implement your marketing campaigns across chosen channels with precision and timing.",
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description:
        "Continuous monitoring and data-driven optimization to maximize your marketing ROI.",
    },
  ];

  const marketingBenefits = [
    {
      icon: <FaRocket />,
      title: "Accelerated Growth",
      description:
        "Strategic marketing that drives rapid business growth and market expansion.",
    },
    {
      icon: <FaLightbulb />,
      title: "Creative Excellence",
      description:
        "Award-winning creative campaigns that capture attention and drive engagement.",
    },
    {
      icon: <FaChartLine />,
      title: "Data-Driven Results",
      description:
        "Marketing decisions backed by analytics and measurable performance metrics.",
    },
    {
      icon: <FaUsers />,
      title: "Expert Team",
      description:
        "Dedicated marketing professionals with proven track records across industries.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "TG transformed our marketing approach completely. Our brand visibility increased by 300% in just 6 months.",
      rating: 5,
    },
    {
      name: "Ahmed Al-Rashid",
      company: "Gulf Enterprises",
      text: "The creative campaigns they developed for us were exceptional. ROI exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      company: "Fashion Forward",
      text: "Professional, creative, and results-driven. TG is our go-to marketing partner.",
      rating: 5,
    },
  ];

  const clientLogos = [
    { name: "TechStart", logo: "/clients/techstart.png" },
    { name: "Gulf Enterprises", logo: "/clients/gulf.png" },
    { name: "Fashion Forward", logo: "/clients/fashion.png" },
    { name: "Digital Solutions", logo: "/clients/digital.png" },
    { name: "Innovation Hub", logo: "/clients/innovation.png" },
    { name: "Future Corp", logo: "/clients/future.png" },
  ];

  return (
    <div className="marketing-page">
      <Header />
      <canvas ref={canvasRef} className="particle-canvas" />

      <main className="marketing-content">
        {/* Hero Section */}
        <section className="marketing-hero">
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
                Marketing & Communication
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Strategic Marketing for
                <span className="highlight"> Modern Brands</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Helping brands tell their story, reach the right audience, and
                build strong connections through smart strategies that drive
                real results.
              </motion.p>
              {/* <motion.div
                className="hero-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  { number: "50+", label: "Campaigns Launched" },
                  { number: "25+", label: "Brands Transformed" },
                  { number: "300%", label: "Average ROI Increase" },
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

        {/* Main Marketing Services Section */}
        <section className="main-services">
          <div className="section-container">
            <h2>Our Marketing Services</h2>
            <p className="section-description">
              Comprehensive marketing solutions tailored to your business needs
            </p>
            <div className="services-grid">
              {marketingSubServices.map((service, index) => (
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

        {/* Marketing Tools & Technologies Section */}
        <section className="technologies-section">
          <div className="section-container">
            <h2>Marketing Tools We Use</h2>
            <p className="section-description">
              We leverage the latest marketing technologies to deliver
              cutting-edge campaigns
            </p>
            <div className="tech-grid">
              {[
                {
                  icon: <FaBullhorn />,
                  name: "Social Media",
                  items: [
                    "Facebook Ads",
                    "Instagram Ads",
                    "LinkedIn Ads",
                    "TikTok Ads",
                  ],
                },
                {
                  icon: <FaChartLine />,
                  name: "Analytics",
                  items: [
                    "Google Analytics",
                    "Facebook Insights",
                    "Hootsuite",
                    "Buffer",
                  ],
                },
                {
                  icon: <FaPaintBrush />,
                  name: "Design Tools",
                  items: ["Adobe Creative Suite", "Canva", "Figma", "Sketch"],
                },
                {
                  icon: <FaUsers />,
                  name: "Marketing Automation",
                  items: ["HubSpot", "Mailchimp", "ActiveCampaign", "Zapier"],
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
            <h2>Our Marketing Process</h2>
            <p className="section-description">
              A systematic approach to delivering exceptional marketing results
            </p>
            <div className="timeline-container">
              <div className="timeline-line">
                <div className="timeline-progress"></div>
              </div>
              <div className="process-steps">
                {[
                  {
                    icon: <FaChartLine />,
                    title: "Discovery & Strategy",
                    description:
                      "We dive deep into your business, audience, and goals to create a tailored marketing strategy",
                    step: "01",
                  },
                  {
                    icon: <FaPaintBrush />,
                    title: "Creative Development",
                    description:
                      "Our team crafts compelling content, designs, and campaigns that align with your brand vision",
                    step: "02",
                  },
                  {
                    icon: <FaRocket />,
                    title: "Launch & Execute",
                    description:
                      "We implement your marketing campaigns across chosen channels with precision and timing",
                    step: "03",
                  },
                  {
                    icon: <FaLightbulb />,
                    title: "Monitor & Optimize",
                    description:
                      "Continuous monitoring and data-driven optimization to maximize your marketing ROI",
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
              <h2>Ready to Transform Your Marketing?</h2>
              <p>
                Let's discuss how we can help elevate your brand and drive
                growth
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
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MarketingPage;
