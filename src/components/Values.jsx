import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import './Values.css';

const Values = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isScrollLocked, setIsScrollLocked] = useState(false);
    const [hasCompletedAnimation, setHasCompletedAnimation] = useState(false);
    const valuesRef = useRef(null);
    const scrollTimeoutRef = useRef(null);

    const totalSteps = 4;

    const values = [
        {
            title: 'Excellence',
            subtitle: 'Striving for the highest standards in everything we do'
        },
        {
            title: 'Innovation',
            subtitle: 'Pushing boundaries and embracing new possibilities'
        },
        {
            title: 'Impact',
            subtitle: 'Creating meaningful change in the MENA region'
        },
        {
            title: 'Integrity',
            subtitle: 'Maintaining the highest ethical standards'
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            y: 20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    // Handle wheel events during scroll lock
    const handleWheel = useCallback((e) => {
        if (!isScrollLocked) return;

        const delta = e.deltaY;

        // Allow scrolling up to return to hero section
        if (delta < 0) {
            // Check if we're at the first card and trying to scroll up
            if (currentStep === 0) {
                // Allow scrolling up to hero section
                setIsScrollLocked(false);
                setHasCompletedAnimation(false);
                setCurrentStep(0);
                return; // Let the scroll event continue naturally
            } else {
                // Within values section, show previous card
                e.preventDefault();
                e.stopPropagation();

                if (scrollTimeoutRef.current) {
                    clearTimeout(scrollTimeoutRef.current);
                }

                scrollTimeoutRef.current = setTimeout(() => {
                    setCurrentStep(prev => prev - 1);
                }, 100);
            }
        } else {
            // Scrolling down - prevent unless within values section
            e.preventDefault();
            e.stopPropagation();

            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            scrollTimeoutRef.current = setTimeout(() => {
                if (currentStep < totalSteps - 1) {
                    // Show next card
                    setCurrentStep(prev => prev + 1);
                } else if (currentStep === totalSteps - 1) {
                    // All cards shown, unlock scroll and continue down
                    setIsScrollLocked(false);
                    setHasCompletedAnimation(true);

                    // Continue scrolling to next section
                    setTimeout(() => {
                        window.scrollBy({ top: 100, behavior: 'smooth' });
                    }, 300);
                }
            }, 100);
        }
    }, [isScrollLocked, currentStep, totalSteps]);

    // Intersection Observer to detect when values section comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasCompletedAnimation && !isScrollLocked) {
                    // First time entering the section - lock scroll
                    setIsScrollLocked(true);
                    setCurrentStep(0);
                }
            },
            {
                threshold: 0.5,
                rootMargin: '-10% 0px -10% 0px'
            }
        );

        if (valuesRef.current) {
            observer.observe(valuesRef.current);
        }

        return () => {
            if (valuesRef.current) {
                observer.unobserve(valuesRef.current);
            }
        };
    }, [hasCompletedAnimation, isScrollLocked]);

    // Apply scroll lock (but only prevent default, don't lock overflow)
    useEffect(() => {
        if (isScrollLocked) {
            // Only add wheel listener, don't lock body overflow
            document.addEventListener('wheel', handleWheel, { passive: false });
            document.addEventListener('touchmove', handleWheel, { passive: false });
        } else {
            document.removeEventListener('wheel', handleWheel);
            document.removeEventListener('touchmove', handleWheel);
        }

        return () => {
            document.removeEventListener('wheel', handleWheel);
            document.removeEventListener('touchmove', handleWheel);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [isScrollLocked, handleWheel]);

    // Reset animation state when scrolling back up past the section
    useEffect(() => {
        const handleScroll = () => {
            if (!valuesRef.current || isScrollLocked) return;

            const rect = valuesRef.current.getBoundingClientRect();

            // If section is completely above viewport, reset animation state
            if (rect.bottom < 0) {
                setHasCompletedAnimation(false);
                setCurrentStep(0);
            }
        };

        if (!isScrollLocked) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrollLocked]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return (
        <section className="values-section" ref={valuesRef}>
            <motion.div
                className="values-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2
                    className="values-title"
                    variants={itemVariants}
                >
                    Our Values
                </motion.h2>

                {/* Step Progress Indicator */}
                <motion.div
                    className="step-progress"
                    variants={itemVariants}
                >
                    {Array.from({ length: totalSteps }, (_, i) => (
                        <div
                            key={i}
                            className={`step-dot ${i <= currentStep ? 'active' : ''}`}
                        />
                    ))}
                </motion.div>

                <motion.div
                    className="values-description"
                    variants={itemVariants}
                >
                    <p>
                        At TG MENA, our values drive everything we do. We believe in
                        excellence, innovation, and creating lasting impact.
                    </p>
                    <p className="scroll-hint">Scroll to explore</p>
                </motion.div>

                {/* Keep original div for values-stack to preserve card animations */}
                <div className="values-stack">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className={`value-card value-card-${index + 1}`}
                            style={{
                                transform: `translateY(${index <= currentStep ? index * 60 - (index * 40) : index * 60 + 200}px)`,
                                opacity: index <= currentStep ? 1 : 0,
                                scale: index <= currentStep ? 1 : 0.9,
                                rotateX: index <= currentStep ? 0 : -15,
                                rotateZ: index <= currentStep ? (index % 2 === 0 ? -2 : 2) : 0,
                                zIndex: index <= currentStep ? 4 : 1,
                                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        >
                            <div className="value-card-content">
                                <div className="value-text">
                                    <h3 className="value-title">{value.title}</h3>
                                    <p className="value-subtitle">{value.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Values; 