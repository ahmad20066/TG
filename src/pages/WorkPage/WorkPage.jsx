import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import {
  FaGlobe,
  FaMobileAlt,
  FaShoppingCart,
  FaChartLine,
  FaRobot,
  FaPaintBrush,
} from "react-icons/fa";
import "./WorkPage.css";
import Footer from "../../components/Footer/Footer";

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const canvasRef = useRef(null);
  const navigate = useNavigate();

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

  const projects = [
    {
      title: "Fane",
      category: "social media",
      image: "/assets/brands/fane.png",
      icon: <FaShoppingCart />,
      description:
        "We handled full account management for FANE, shaping a digital presence that matched their bold, street-smart identity. From content planning to daily execution, every detail was aligned with their brand culture.",
      technologies: ["Lifestyle", "Social media", "Barbershop"],
      link: "#",
    },
    {
      title: "Huqqabaz",
      category: "social media",
      image: "/assets/brands/huqqabaz.png",
      icon: <FaMobileAlt />,
      description:
        "We managed HuQQabaz’s social presence with a focus on luxury, lifestyle, and experience-driven content. From strategy to daily execution, we crafted a digital voice as refined as the brand itself.",
      technologies: ["Lifestyle", "Social media", "Restaurant"],
      link: "#",
    },
    {
      title: "Diamond Padel club",
      category: "social media",
      image: "/assets/brands/dpc.jpg",
      icon: <FaRobot />,
      description:
        "We managed Diamond Padel’s account with a focus on blending sport, style, and community. From content strategy to daily execution, we brought the club’s energy and premium vibe to every post",
      technologies: ["Lifestyle", "Social media", "Sports"],
      link: "#",
    },
    {
      title: "Tarta de Amor",
      category: "design",
      image: "/assets/brands/tarta.png",
      icon: <FaGlobe />,
      description:
        "We built a bold brand identity that reflects its cutting-edge printing tech and transformative potential. From logo to story, every element was designed to speak innovation without borders.",
      technologies: ["Logo", "Visual identity", "Sweets"],
      link: "#",
    },
    {
      title: "Unframed breaks the mold",
      category: "design",
      image: "/assets/brands/unframed.png",
      icon: <FaChartLine />,
      description:
        "We built a bold brand identity that reflects its cutting-edge printing tech and transformative potential. From logo to story, every element was designed to speak innovation without borders.",
      technologies: [" Creative service", "Visual identity"],
      link: "#",
    },
    {
      title: "H & M",
      category: "media production",
      image: "/assets/brands/H&M.png",
      icon: <FaPaintBrush />,
      description:
        "We delivered full in-house video production for H&M, from concept to final cut. The shoot captured their bold, expressive style with energy and precision. ",
      technologies: ["Fashion", "Production"],
      link: "#",
    },
    {
      title: "Shift inc.",
      category: "media production",
      image: "/assets/brands/shift.png",
      icon: <FaPaintBrush />,
      description:
        "We created a full-scale brand video for SHIFT Inc., capturing their seamless tech-driven approach to smart mobility. The project was managed entirely in-house from concept to final edit with precision and speed. A future-focused production that reflects their Vision 2030 ambition. ",
      technologies: ["Rental car", "Production"],
      link: "#",
    },
    {
      title: "Saccess Perfume",
      category: "shopify",
      image: "/assets/brands/saccess.png",
      icon: <FaPaintBrush />,
      description:
        "We launched a fully customized Shopify store for luxury Parfum. From structure to checkout, every step was optimized for luxury and ease. A seamless shopping flow built to elevate the customer experience.",
      technologies: ["Website", "luxury Parfum", "Shopify"],
      link: "#",
    },
    {
      title: "ORIGIN",
      category: "shopify",
      image: "/projects/design.jpg",
      icon: <FaPaintBrush />,
      description:
        "We built a fully customized Shopify store for Sports Origin, tailored to their brand and audience. Our team handled everything from UX structure to responsive design and optimized checkout. A high-impact e-commerce experience built for performance, speed, and style.",
      technologies: ["Website", "Sports Equipment", "Shopify"],
      link: "#",
    },
    {
      title: "Pebble",
      category: "web",
      image: "/projects/design.jpg",
      icon: <FaPaintBrush />,
      description:
        "We developed a high-performing landing page for Pebble Life, built to drive action and engagement. From layout to responsiveness, every detail was crafted for clarity and speed. A focused digital experience designed to convert.",
      technologies: ["Website", "UI/UX", "Electric trailer"],
      link: "#",
    },
    {
      title: "منصة تحكيم",
      category: "web",
      image: "/projects/design.jpg",
      icon: <FaPaintBrush />,
      description:
        "We reimagined the Tahkeem platform to elevate its legal case management experience. The UI/UX was fully redesigned in-house, creating a smoother, smarter, and more intuitive workflow. The result? A system built to perform—with functionality that adapts to real legal demands.",
      technologies: ["Website", "UI/UX", "legal case management"],
      link: "#",
    },
    {
      title: "EvenTek",
      category: "mobile",
      image: "/projects/design.jpg",
      icon: <FaPaintBrush />,
      description:
        "We designed and developed a smart event-planning app with a fully intuitive interface. The UI/UX was crafted in-house to ensure a smooth, end-to-end user experience.",
      technologies: ["Mobile Application ", "UI/UX", "Event Management"],
      link: "#",
    },
    {
      title: "Evolve",
      category: "mobile",
      image: "/assets/brands/evolve.png",
      icon: <FaPaintBrush />,
      description:
        "We created a smart, user-first fitness platform. From UI/UX design to development, every step was handled in-house to ensure a seamless, intuitive experience that empowers users to train smarter, eat better, and stay on track.",
      technologies: [
        "Mobile Application ",
        "UI/UX",
        "Fitness & Personal Training",
      ],
      link: "#",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "shopify", name: "Shopify & E-commerce" },
    { id: "social media", name: "Social Media" },
    { id: "design", name: "Branding & Design" },
    { id: "media production", name: "Media Production" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="work-page">
      <Header />
      <canvas ref={canvasRef} className="particle-canvas" />

      <main className="work-content">
        {/* Hero Section */}
        <section className="work-hero">
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
                Our Portfolio
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Featured
                <span className="highlight"> Projects</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Explore our diverse portfolio of successful projects across
                various industries
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <div className="section-container">
            {/* Filter Categories */}
            <div className="filter-categories">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`filter-button ${
                    activeFilter === category.id ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      {/* <a href={project.link} className="view-project">
                        View Project
                      </a> */}
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
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
              <h2>Have a Project in Mind?</h2>
              <p>Let's collaborate to bring your vision to life</p>
              <motion.button
                onClick={() => navigate("/contact")}
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkPage;
