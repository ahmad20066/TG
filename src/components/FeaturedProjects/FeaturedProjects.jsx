import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./FeaturedProjects.css";
import { useNavigate } from "react-router-dom";

const FeaturedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const projectsGridRef = useRef(null);
  const progressRef = useRef(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: "fane",
      title: "Fane",
      category: "Social Media & Lifestyle",
      description:
        "We handled full account management for FANE,shaping a digital presence that matched their bold, street-smart identity. From content planning to daily execution, every detail was aligned with their brand culture",
      image: "/projects/bentley-showroom.jpg",
    },
    {
      id: "unframed",
      title: "Unframed breaks the mold",
      category: "Branding & Design",
      description:
        "We built a bold brand identity that reflects its cutting-edge printing tech and transformative potential. From logo to story, every element was designed to speak innovation without borders",
      image: "/projects/mclaren-hub.jpg",
    },
    {
      id: "pebble",
      title: "Pebble",
      category: "Web development & UI/UX",
      description:
        "We developed a high-performing landing page for Pebble Life, built to drive action and engagement. From layout to responsiveness, every detail was crafted for clarity and speed. A focused digital experience designed to convert.",
      image: "/projects/rr-bespoke.jpg",
    },
    {
      id: "h&m",
      title: "H&M",
      category: "Video production",
      description:
        "We delivered full in-house video production for H&M, from concept to final cut. The shoot captured their bold, expressive style with energy and precision.",
      image: "/projects/fleet-management.jpg",
    },
    {
      id: "origin",
      title: "ORIGIN",
      category: "Shopify & E-commerce",
      description:
        "We built a fully customized Shopify store for Sports Origin, tailored to their brand and audience. Our team handled everything from UX structure to responsive design and optimized checkout. A high-impact e-commerce experience built for performance, speed, and style.",
      image: "/projects/fleet-management.jpg",
    },
    {
      id: "Evolve",
      title: "Evolve",
      category: "Mobile application & UI/UX",
      description:
        "We created a smart, user-first fitness platform. From UI/UX design to development, every step was handled in-house to ensure a seamless, intuitive experience that empowers users to train smarter, eat better, and stay on track.",
      image: "/projects/fleet-management.jpg",
    },
  ];

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll events for mobile carousel
  useEffect(() => {
    if (!isMobile || !projectsGridRef.current) return;

    const grid = projectsGridRef.current;
    let timeout;

    const handleScroll = () => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        const scrollLeft = grid.scrollLeft;
        const cardWidth = grid.offsetWidth * 0.85; // 85% of viewport
        const newSlide = Math.round(scrollLeft / cardWidth);
        setCurrentSlide(newSlide);

        // Update progress bar
        if (progressRef.current) {
          const progress =
            (scrollLeft / (grid.scrollWidth - grid.offsetWidth)) * 100;
          progressRef.current.style.width = `${progress}%`;
        }
      }, 50);
    };

    grid.addEventListener("scroll", handleScroll);
    return () => grid.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Scroll to slide on dot click
  const scrollToSlide = (index) => {
    if (!projectsGridRef.current) return;

    const grid = projectsGridRef.current;
    const cardWidth = grid.offsetWidth * 0.85;
    grid.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setCurrentSlide(index);
  };

  return (
    <section className="featured-projects">
      <div className="featured-projects-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <p>Transforming visions into digital excellence</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          ref={projectsGridRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={
                !isMobile
                  ? {
                      y: -10,
                      transition: { duration: 0.2 },
                    }
                  : {}
              }
              onClick={() => navigate(`/projects/${project.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="project-image">
                <div className="project-overlay">
                  <span className="view-project">View Project</span>
                </div>
                <div className="image-placeholder">
                  <div className="placeholder-text">{project.title}</div>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel Navigation */}
        {isMobile && (
          <>
            <div className="carousel-nav">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`carousel-dot ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => scrollToSlide(index)}
                />
              ))}
            </div>
            <div className="carousel-progress">
              <div className="progress-bar" ref={progressRef} />
            </div>
          </>
        )}

        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Ready to Transform Your Vision?</h3>
          <p>Let's create something extraordinary together</p>
          <motion.button
            className="cta-button"
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
  );
};

export default FeaturedProjects;
