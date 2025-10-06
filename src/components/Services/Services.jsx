import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const servicesGridRef = useRef(null);
  const progressRef = useRef(null);

  const services = [
    {
      icon: "📣",
      title: "Marketing & Communication",
      description:
        "Helping brands tell their story, reach the right audience, and build strong connections through smart strategies.",
      items: [
        "Brand Strategy",
        "Social media campaigns (paid/org)",
        "Content creation",
        "Accounts management",
        "Communication Planning",
        "Create a business concept",
      ],
    },
    {
      icon: "🎨",
      title: "Creative designs",
      description:
        "Bringing ideas to life with visuals that inspire, engage, and leave a lasting impression.",
      items: [
        "Branding",
        "Logo",
        "Guideline",
        "Presentation or profile",
        "Social media",
      ],
    },
    {
      icon: "🎥",
      title: "Media Production",
      description:
        "From videos to photography, we craft high-quality content that captures attention and drives impact.",
      items: [
        "Videography",
        "Photography",
        "Motion Graphics",
        "CGI / 3D",
        "Props & Sets",
      ],
    },
    {
      icon: "⚡",
      title: "Tech",
      description:
        "Delivering innovative digital solutions that make your business smarter, faster, and more connected.",
      items: [
        "Websites & Landing Pages",
        "Shopify Stores",
        "UI/UX Design",
        "Custom Applications",
      ],
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
    if (!isMobile || !servicesGridRef.current) return;

    const grid = servicesGridRef.current;
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
    if (!servicesGridRef.current) return;

    const grid = servicesGridRef.current;
    const cardWidth = grid.offsetWidth * 0.85;
    grid.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setCurrentSlide(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.8,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="services" className="services">
      <div className="services-content">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="services-title"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="services-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Innovative solutions for modern businesses
          </motion.p>
        </motion.div>

        <motion.div
          className="services-grid"
          ref={servicesGridRef}
          // variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              // variants={cardVariants}
              whileHover={
                !isMobile
                  ? {
                      y: -8,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    }
                  : {}
              }
            >
              <div className="service-card-content">
                <motion.span
                  className="service-icon"
                  whileHover={
                    !isMobile
                      ? {
                          scale: 1.2,
                          rotate: 5,
                          transition: { duration: 0.3 },
                        }
                      : {}
                  }
                >
                  {service.icon}
                </motion.span>
                <motion.h3
                  className="service-title"
                  // variants={titleVariants}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="service-description"
                  // variants={titleVariants}
                >
                  {service.description}
                </motion.p>
                <div className="service-features">
                  {service.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="feature-item"
                      // variants={featureVariants}
                      custom={itemIndex}
                      whileHover={
                        !isMobile
                          ? {
                              x: 5,
                              transition: { duration: 0.2 },
                            }
                          : {}
                      }
                    >
                      {/* <span className="feature-icon"></span> */}
                      {item}
                    </motion.div>
                  ))}
                </div>
                {/* <motion.button
                  className={`service-cta ${
                    index === 1 ? "service-cta-white" : ""
                  }`}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (service.title === "Production") {
                      navigate("/services/media-production");
                    } else if (service.title === "Tech") {
                      navigate("/services/tech");
                    } else if (service.title === "Marketing & Communication") {
                      navigate("/services/marketing");
                    }
                  }}
                >
                  Learn More
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
