import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { FaGlobe, FaMobileAlt, FaShoppingCart, FaChartLine, FaRobot, FaPaintBrush } from 'react-icons/fa';
import './WorkPage.css';

const WorkPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const canvasRef = useRef(null);

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

    const projects = [
        {
            title: "E-commerce Platform",
            category: "web",
            image: "/projects/ecommerce.jpg",
            icon: <FaShoppingCart />,
            description: "Modern e-commerce platform with advanced features",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "Mobile Banking App",
            category: "mobile",
            image: "/projects/banking.jpg",
            icon: <FaMobileAlt />,
            description: "Secure and user-friendly mobile banking solution",
            technologies: ["Flutter", "Firebase", "AWS"],
            link: "#"
        },
        {
            title: "AI-Powered Analytics",
            category: "ai",
            image: "/projects/analytics.jpg",
            icon: <FaRobot />,
            description: "Advanced analytics platform using AI/ML",
            technologies: ["Python", "TensorFlow", "React"],
            link: "#"
        },
        {
            title: "Corporate Website",
            category: "web",
            image: "/projects/corporate.jpg",
            icon: <FaGlobe />,
            description: "Modern corporate website with CMS",
            technologies: ["Next.js", "Strapi", "Tailwind"],
            link: "#"
        },
        {
            title: "Investment Platform",
            category: "web",
            image: "/projects/investment.jpg",
            icon: <FaChartLine />,
            description: "Real-time investment tracking platform",
            technologies: ["Vue.js", "Node.js", "PostgreSQL"],
            link: "#"
        },
        {
            title: "Design System",
            category: "design",
            image: "/projects/design.jpg",
            icon: <FaPaintBrush />,
            description: "Comprehensive design system for enterprise",
            technologies: ["Figma", "Storybook", "React"],
            link: "#"
        }
    ];

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'web', name: 'Web Development' },
        { id: 'mobile', name: 'Mobile Apps' },
        { id: 'ai', name: 'AI Solutions' },
        { id: 'design', name: 'Design' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

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
                                Explore our diverse portfolio of successful projects across various industries
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
                                    className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}
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
                                        <div className="project-icon">{project.icon}</div>
                                        <img src={project.image} alt={project.title} />
                                        <div className="project-overlay">
                                            <a href={project.link} className="view-project">
                                                View Project
                                            </a>
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
        </div>
    );
};

export default WorkPage; 