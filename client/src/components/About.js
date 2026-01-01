import React from 'react';
import './About.css';
import plantImage from '../components/images/ABC.jpg';
import howItWorksImage from '../components/images/How_it_works.jpg';
import plantGalleryImage from '../assets/monstera.jpg'; // Make sure this image exists

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="title-wrapper">
          <h1 className="about-title">Plant Identification System</h1>
          <p className="about-subtitle">
            Where technology meets nature — Identify, Explore, and Learn.
          </p>
        </div>

        {/* Section: About the System */}
        <section className="about-section">
          <div className="section-content">
            <div className="image-wrapper">
              <img
                src={plantImage}
                alt="Plant Identification"
                className="section-image"
              />
            </div>
            <div className="text-wrapper">
              <h2 className="section-title">About the System</h2>
              <p className="section-description">
                Designed for gardeners, students, researchers, and nature
                enthusiasts — our smart system identifies plant species using
                advanced AI models. Just upload a leaf image and instantly
                receive plant species, care tips, and scientific information.
              </p>
            </div>
          </div>
        </section>

        {/* Section: How it Works */}
        <section className="about-section">
          <div className="section-content reverse">
            <div className="image-wrapper">
              <img
                src={howItWorksImage}
                alt="How It Works"
                className="section-image"
              />
            </div>
            <div className="text-wrapper">
              <h2 className="section-title">How It Works</h2>
              <p className="section-description">
                Upload a leaf image, and our AI analyzes key features such as
                shape, vein patterns, and texture. It matches this data against
                our growing database to deliver accurate identification, care
                instructions, and scientific insights.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Plant Gallery */}
        <section className="about-section">
          <div className="section-content">
            <div className="image-wrapper">
              <img
                src={plantGalleryImage}
                alt="Plant Gallery"
                className="section-image"
              />
            </div>
            <div className="text-wrapper">
              <h2 className="section-title">Plant Gallery</h2>
              <p className="section-description">
                Explore a vibrant gallery of plant species, carefully curated for
                learners and nature lovers. From common houseplants to exotic
                species, our gallery offers detailed visuals, plant facts, and
                botanical names to help you connect more deeply with the natural
                world.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
