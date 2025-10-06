import React from "react";
import { motion } from "framer-motion";
import "./ClientLogos.css";

const ClientLogos = () => {
  const companies = ["TAHKEEM", "EVOLVE", "EVENTEK", "UNFRAMED"];

  return (
    <section className="client-logos">
      <div className="client-logos-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Trusted by Industry Leaders</h2>
          <p>Partnering with prestigious brands across the automotive sector</p>
        </motion.div>

        <div className="logos-container">
          <div className="logos-scroll">
            {companies.map((name, index) => (
              <div key={index} className="logo-item">
                <div className="logo-placeholder">{name}</div>
              </div>
            ))}
            {companies.map((name, index) => (
              <div key={`duplicate-${index}`} className="logo-item">
                <div className="logo-placeholder">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
