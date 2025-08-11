import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>About Restara</h1>
          <p>Our passion for exceptional cuisine and hospitality</p>
        </div>
        
        <div className="about-content">
          <section className="story-section">
            <h2>Our Story</h2>
            <p>
              For over 15 years, Restara has been committed to serving exceptional cuisine 
              in a warm and welcoming atmosphere. Our passion for food and dedication to 
              quality has made us a favorite destination for food lovers.
            </p>
            <p>
              Every dish is prepared with care using only the finest ingredients, ensuring 
              that each bite is a memorable experience that keeps our guests coming back for more.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
