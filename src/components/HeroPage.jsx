import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Users,
  School,
  GraduationCap,
} from "lucide-react";
import "./HeroPage.css";
import banner1 from '../assets/HeroSectionIMG/banner-01.jpg';
import banner2 from '../assets/HeroSectionIMG/banner-03.jpg';
import banner3 from '../assets/HeroSectionIMG/banner-06.jpg';
import banner4 from '../assets/HeroSectionIMG/banner-08.jpg';
import banner5 from '../assets/HeroSectionIMG/banner-09.jpg';

const HeroPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [banner1, banner2, banner3, banner4, banner5];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const featureCards = [
    { title: "Courses", icon: <BookOpen size={50} />, color: "courses", description: "This is Photoshop's version of Lorem ipsum. Proin gravida nibh vel velit auctor aliquet." },
    { title: "Professional Teachers", icon: <Users size={50} />, color: "teachers", description: "This is Photoshop's version of Lorem ipsum. Proin gravida nibh vel velit auctor aliquet." },
    { title: "Fully Equipped", icon: <School size={50} />, color: "equipped", description: "This is Photoshop's version of Lorem ipsum. Proin gravida nibh vel velit auctor aliquet." },
    { title: "Special Education", icon: <GraduationCap size={60} />, color: "education", description: "This is Photoshop's version of Lorem ipsum. Proin gravida nibh vel velit auctor aliquet." },
  ];

  return (
    <div className="hero-container">
      
      <div className="hero-section">
        <div className="slideshow">
          {slides.map((slide, index) => (
            
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{ '--bg-image': `url(${slide})` }}
            />
          ))}
          <div className="content">
            <h1 className="title">
              Welcome to <br />
              <span className="highlight"> kids Center for kids</span>
            </h1>
          </div>
          <button className="nav-button prev" onClick={prevSlide} aria-label="Previous slide">
            <ChevronLeft size={40} />
          </button>
          <button className="nav-button next" onClick={nextSlide} aria-label="Next slide">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      <div className="features-section">
        <div className="features-grid">
          {featureCards.map((card, index) => (
            <div key={index} className={`feature-card ${card.color}`}>
              <div className="icon-wrapper">
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p >{card.description}</p>
              <button className="arrow-button" aria-label={`Learn more about ${card.title}`}>
                <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

