import { useState, useEffect, useRef } from 'react';
import {
  Utensils,
  Palette,
  Bus,
  Languages,
  Droplet,
  Pencil,
} from "lucide-react";
import "./ServicesSection.css";

const ServicesSection = () => {
  const [stats, setStats] = useState({
    subjects: 0,
    modernLab: 0,
    instructors: 0,
    students: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateValue = (key, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setStats(prevStats => ({
            ...prevStats,
            [key]: Math.floor(progress * (end - start) + start)
          }));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      };

      animateValue('subjects', 0, 2500, 2000);
      animateValue('modernLab', 0, 3000, 2000);
      animateValue('instructors', 0, 3500, 2000);
      animateValue('students', 0, 5500, 2000);
    }
  }, [isVisible]);

  const { subjects, modernLab, instructors, students } = stats;

  return (
    <div className="services-container">
      {/* What We Offer Section */}
      <section className="offer-section">
        <h2 className="section-title">WHAT WE OFFER</h2>
        <p className="section-subtitle">
          Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
          amet, consec
        </p>
        <div className="w-24 h-0.5 mx-auto mt-6 mb-3 bg-[#90C088]">
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon-wrapper red">
              <Utensils size={24} />
            </div>
            <div>
              <h3>Healthy Food</h3>
              <p>
                This is version of Lorem Ipsum. Proin gravida nibh vel velit
                auctor aliquet avida velit auctor aliquet.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-wrapper blue">
              <Palette size={24} />
            </div>
            <div>
              <h3>Painting Learning</h3>
              <p>
                This is version of Lorem Ipsum. Proin gravida nibh vel velit
                auctor aliquet avida velit auctor aliquet.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-wrapper red">
              <Bus size={24} />
            </div>
            <div>
              <h3>Bus Service</h3>
              <p>
                This is version of Lorem Ipsum. Proin gravida nibh vel velit
                auctor aliquet avida velit auctor aliquet.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-wrapper green">
              <Languages size={24} />
            </div>
            <div>
              <h3>Multi Language</h3>
              <p>
                This is version of Lorem Ipsum. Proin gravida nibh vel velit
                auctor aliquet avida velit auctor aliquet.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-wrapper yellow">
              <Droplet size={24} />
            </div>
            <div>
              <h3>Colour Match</h3>
              <p>
                This is version of Lorem Ipsum. Proin gravida nibh vel velit
                auctor aliquet avida velit auctor aliquet.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-wrapper purple">
              <Pencil size={24} />
            </div>
            <div>
              <h3>Sketching</h3>
              <p>
                This is version of Lorem Ipsum. Proin gravida nibh vel velit
                auctor aliquet avida velit auctor aliquet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="facts-section" ref={sectionRef}>
        <div className="facts-content">
          <h2 className="facts-title">FACTS AND FIGURES ABOUT KIDS CENTER</h2>
          <p className="facts-subtitle">
            Discover the impact of our comprehensive educational approach and state-of-the-art facilities.
          </p>

          <div className="stats-container">
            {[
              { key: 'subjects', label: 'Subjects', value: subjects, color: 'red' },
              { key: 'modernLab', label: 'Modern Labs', value: modernLab, color: 'blue' },
              { key: 'instructors', label: 'Instructors', value: instructors, color: 'red' },
              { key: 'students', label: 'Students', value: students, color: 'green' }
            ].map(({ key, label, value, color }) => (
              <div key={key} className="stat-item">
                <span className="stat-number" aria-live="polite">
                  {value.toLocaleString()}
                </span>
                <span className="stat-label">{label}</span>
                <div className={`underline ${color}`}></div>
              </div>
            ))}
          </div>

          <div className="button-container">
            <button className="btn see-more">SEE MORE</button>
            <button className="btn buy-now">BUY NOW!</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;

