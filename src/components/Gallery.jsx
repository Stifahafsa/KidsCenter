

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "./Gallery.css";
import gallery1 from "../assets/galleryIMG/gallery-01.jpg";
import gallery2 from "../assets/galleryIMG/gallery-02.jpg";
import gallery3 from "../assets/galleryIMG/gallery-03.jpg";
import gallery4 from "../assets/galleryIMG/gallery-04.jpg";

const galleryImages = [
  {
    id: 1,
    src: gallery1,
    alt: "Children playing with colorful building blocks",
    category: "Play",
  },
  {
    id: 2,
    src: gallery2,
    alt: "Child at whiteboard",
    category: "Education",
  },
  {
    id: 3,
    src: gallery3,
    alt: "Children in superhero costumes",
    category: "Activities",
    featured: true,
  },
  {
    id: 4,
    src: gallery4,
    alt: "Children doing activities",
    category: "Activities",
  },
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(galleryImages.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h1>OUR GALLERY</h1>
        <p>
          Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
          amet, consectetur adipis elit, aliquam eget nibh etlibura.
        </p>
        <div className="w-24 h-0.5 mx-auto bg-[#90C088]">
        </div>
      </div>

      <div className="gallery-container">
        <div
          className="gallery-grid"
          style={{
            transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
            gridTemplateColumns: `repeat(${galleryImages.length}, minmax(0, 1fr))`,
          }}
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`gallery-item ${image.featured ? "featured" : ""}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-item-overlay">
                <span>{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-navigation">
        <button
          onClick={prevSlide}
          className="nav-button"
          aria-label="Previous slide"
        >
          <ChevronLeft className="nav-icon" />
        </button>
        <button
          onClick={nextSlide}
          className="nav-button"
          aria-label="Next slide"
        >
          <ChevronRight className="nav-icon" />
        </button>
      </div>
    </section>
  );
}

