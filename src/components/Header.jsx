import React, { useState } from "react";
import { Menu, Search, Phone, Mail, Facebook, Twitter, Linkedin, MailPlus } from 'lucide-react';
import logo from "../assets/logo.png";
import "./Header.css";
import HeroSlider from "../components/HeroPage" 


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "COURSES", path: "/courses" },
    { name: "EVENTS", path: "/events" },
    { name: "NEWS", path: "/news" },
    { name: "TEAM", path: "/team" },
    { name: "PAGES", path: "/pages" },
    { name: "CONTACT US", path: "/contact" }
  ];

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="mailto:info@kidscenter.com" className="social-icon" aria-label="Email">
              <MailPlus />
            </a>
          </div>

          <div className="contact-info">
            <div className="contact-items">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Enter your search..."
                  className="search-input"
                />
                <Search className="search-icon" />
              </div>
              <div className="contact-item">
                <Phone className="icon" />
                <span>+212 624 193 209</span>
              </div>
              <div className="contact-item">
                <Mail className="icon" />
                <span>info@kidscenter.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="container">
          <a href="/" className="logo">
            <img src={logo} alt="Kids Center Logo" className="logo-img" />
          </a>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.name} href={item.path} className="nav-item">
                {item.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
            aria-label="Toggle mobile menu"
          >
            <Menu />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav">
          <div className="container">
            <nav className="mobile-nav-items">
              {navItems.map((item) => (
                <a key={item.name} href={item.path} className="nav-item">
                  {item.name}
                </a>
              ))}
              <div className="mobile-search">
                <input
                  type="text"
                  placeholder="Enter your search..."
                  className="search-input"
                />
              </div>
            </nav>
          </div>
        </div>
      )}
            <HeroSlider />
    </header>
  );
}



