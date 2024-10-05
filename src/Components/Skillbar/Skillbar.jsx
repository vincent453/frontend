import React, { useState, useEffect, useRef } from 'react';
import './Skillbar.css';

const SkillBar = ({ skillName, targetPercentage, duration }) => {
  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing after the animation starts
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startPercentage = 0;
      const increment = targetPercentage / (duration / 10);

      const progressInterval = setInterval(() => {
        startPercentage += increment;
        if (startPercentage >= targetPercentage) {
          startPercentage = targetPercentage;
          clearInterval(progressInterval);
        }
        setPercentage(startPercentage);
      }, 10);

      return () => clearInterval(progressInterval);
    }
  }, [isVisible, targetPercentage, duration]);

  return (
    <div className="skill-container" ref={skillRef}>
      <div className="skill-info">
        <div className="skill-name">{skillName}</div>
        <div className="percentage-text" style={{ left: `${percentage}%` }}>
          {Math.round(percentage)}%
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export default SkillBar;
