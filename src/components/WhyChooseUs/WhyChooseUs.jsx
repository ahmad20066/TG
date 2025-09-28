import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaLightbulb />,
      title: "Creative Excellence",
      description:
        "Our in-house creative team brings fresh perspectives and innovative ideas to every project.",
    },
    {
      icon: <FaUsers />,
      title: "Dedicated Team",
      description:
        "Work with our experienced in-house team committed to your project's success.",
    },
    {
      icon: <FaRocket />,
      title: "Industry Focus",
      description:
        "Deep expertise in MENA region's digital landscape and industry-specific solutions.",
    },
    {
      icon: <FaCogs />,
      title: "Custom Solutions",
      description:
        "Tailored digital solutions that perfectly align with your business objectives.",
    },
    {
      icon: <FaChartLine />,
      title: "Data-Driven",
      description:
        "Strategic decisions backed by analytics and market insights.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Assured",
      description:
        "Rigorous quality control and testing processes for flawless delivery.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We dive deep into your business needs and market landscape to create a winning strategy.",
    },
    {
      number: "02",
      title: "Creative Ideation",
      description:
        "Our creative team develops innovative concepts aligned with your brand vision.",
    },
    {
      number: "03",
      title: "Design & Development",
      description:
        "Expert execution of your project with cutting-edge technologies and best practices.",
    },
    {
      number: "04",
      title: "Testing & Refinement",
      description:
        "Rigorous quality assurance to ensure perfect functionality and user experience.",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-choose-us-content">
        <motion.div
          className="why-choose-us-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We become your success partner. By embedding ourselves in your
            operations, we understand your challenges from the inside out.
            That’s how we deliver fast, focused solutions with purpose, clarity,
            and lasting impact. Aligned with your vision. Built to perform.
          </motion.p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              <div className="process-content">
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </div>
              <div className="process-number">{step.number}</div>
              <div style={{ flex: 1 }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
