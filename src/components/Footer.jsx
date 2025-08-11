import { FiMapPin, FiPhone, FiMail, FiClock, FiHeart } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🍽️</span>
              <span className="logo-text">Restara</span>
            </div>
            <p className="footer-description">
              Experience culinary excellence with our carefully crafted dishes, 
              made from the finest ingredients and served with passion.
            </p>
            <div className="social-links">
              <a href="#" title="Facebook" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" title="Twitter" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" title="Instagram" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" title="LinkedIn" className="social-link">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FiMapPin />
                <span>uttara sector 12</span>
              </div>
              <div className="contact-item">
                <FiPhone />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <FiMail />
                <span>info@restara.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="footer-section">
            <h3 className="footer-title">Opening Hours</h3>
            <div className="opening-hours">
              <div className="hours-item">
                <FiClock />
                <div>
                  <span className="day">Monday - Friday</span>
                  <span className="time">11:00 AM - 10:00 PM</span>
                </div>
              </div>
              <div className="hours-item">
                <FiClock />
                <div>
                  <span className="day">Weekend</span>
                  <span className="time">10:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="quick-links">
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Menu</a>
              <a href="#" className="footer-link">Reservations</a>
              <a href="#" className="footer-link">Contact</a>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Restara. All rights reserved.
            </p>
            <p className="made-with">
              Made with <FiHeart className="heart-icon" /> by shaifsab
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
