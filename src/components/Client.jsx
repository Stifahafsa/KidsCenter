import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Client.css';
import client1 from '../assets/clientIMG/comment-01.jpg';
import client2 from '../assets/clientIMG/comment-02.jpg';
import client3 from '../assets/clientIMG/comment-03.jpg';
import banner from '../assets/clientIMG/banner-06.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Stephem Johns',
    role: 'Parents',
    quote: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor.',
    image: client1
  },
  {
    id: 2,
    name: 'James Stewart',
    role: 'Parents',
    quote: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor.',
    image: client2
  },
  {
    id: 3,
    name: 'Rashed Kabir',
    role: 'Parents',
    quote: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor.',
    image: client3
  },
];

const Client = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials" style={{ backgroundImage: `url(${banner})` }}>
      <div className="testimonials-overlay"></div>
      <div className="testimonials-content">
        <h2>WHAT CLIENTS SAY ABOUT US</h2>
        <p className="subtitle">
          Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec
          tetuer adipis elit, aliquam eget nibh etlibura.
        </p>
        <div className="testimonial-divider"></div>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card`}
            >
              <p className="quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-nav">
          <button onClick={prevSlide} className="nav-button" aria-label="Previous testimonial">
            <ChevronLeft />
          </button>
          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
          <button onClick={nextSlide} className="nav-button" aria-label="Next testimonial">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Client;

