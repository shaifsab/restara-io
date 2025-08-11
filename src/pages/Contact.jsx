import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiMessageCircle, FiUser, FiCalendar } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    reservationDate: '',
    guests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Hero Section */}
        <div className="contact-hero">
          <div className="hero-content">
            <h1>Get In Touch</h1>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center" 
              alt="Restaurant interior" 
            />
          </div>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  <FiMapPin />
                </div>
                <div className="contact-details">
                  <h3>Address</h3>
                  <p>123 Restaurant Street</p>
                  <p>Food City, FC 12345</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <FiPhone />
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 123-4568</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <FiMail />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>info@restara.com</p>
                  <p>reservations@restara.com</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <FiClock />
                </div>
                <div className="contact-details">
                  <h3>Opening Hours</h3>
                  <p>Mon-Fri: 11:00 AM - 10:00 PM</p>
                  <p>Sat-Sun: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="contact-form-section">
            <div className="form-container">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <div className="input-group">
                    <FiUser className="input-icon" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <FiMail className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <FiPhone className="input-icon" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <FiMessageCircle className="input-icon" />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <div className="input-group">
                      <FiCalendar className="input-icon" />
                      <input
                        type="date"
                        name="reservationDate"
                        value={formData.reservationDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <label>Reservation Date (Optional)</label>
                  </div>

                  <div className="form-group half">
                    <div className="input-group">
                      <FiUser className="input-icon" />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                      >
                        <option value="">Number of Guests</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6+">6+ Guests</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn btn btn-primary">
                  <FiSend />
                  Send Message
                </button>
              </form>
            </div>

            <div className="map-container">
              <h2>Find Us</h2>
              <div className="map-placeholder">
                <img 
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=500&h=300&fit=crop&crop=center" 
                  alt="Restaurant location map" 
                />
                <div className="map-overlay">
                  <FiMapPin />
                  <p>123 Restaurant Street, Food City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="social-section">
            <h2>Follow Us</h2>
            <p>Stay connected with us on social media for updates and special offers</p>
            <div className="social-links">
              <a href="#" className="social-link facebook" title="Facebook">
                <FaFacebook />
                <span>Facebook</span>
              </a>
              <a href="#" className="social-link twitter" title="Twitter">
                <FaTwitter />
                <span>Twitter</span>
              </a>
              <a href="#" className="social-link instagram" title="Instagram">
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a href="#" className="social-link linkedin" title="LinkedIn">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
