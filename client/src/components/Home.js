// src/components/Home.js

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/B.jpg';
import bgImg from '../assets/F.jpg';

const PageWrapper = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: #fff;
`;

const Hero = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 8%;
  background: rgba(0, 0, 0, 0.6);
  min-height: 100vh;
`;

const HeroText = styled.div`
  flex: 1 1 500px;

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
    transition: transform 0.3s;
  }

  h1:hover {
    transform: scale(1.03);
    color: #caffc2;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    font-style: italic;
    color: #e0fce0;
    transition: color 0.3s ease;
  }

  button {
    padding: 0.9rem 2rem;
    background: #28a745;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #1f7a35;
      transform: scale(1.05);
      box-shadow: 0 0 15px rgba(72, 255, 128, 0.6);
    }
  }
`;

const HeroImage = styled.div`
  flex: 1 1 400px;

  img {
    width: 100%;
    max-height: 400px;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
    object-fit: cover;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 8px 40px rgba(0, 255, 127, 0.5);
    }
  }
`;

const Features = styled.section`
  background: rgba(0, 0, 0, 0.5);
  padding: 4rem 8%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`;

const Feature = styled.div`
  flex: 1 1 300px;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
  text-align: center;
  transition: transform 0.3s, background 0.3s, box-shadow 0.3s;

  h3 {
    font-size: 1.5rem;
    color: #ccffcc;
    margin-bottom: 1rem;
    transition: color 0.3s;
  }

  p {
    color: #f0f0f0;
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 6px 24px rgba(0, 255, 127, 0.3);

    h3 {
      color: #aaffaa;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.75);
  color: #ccc;
  font-size: 0.9rem;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Hero>
        <HeroText>
          <h1>Plant Detector</h1>
          <p>Identify plants instantly and learn their benefits with just a snap.</p>
          <button onClick={() => navigate('/signup')}>Login to Get Started</button>
        </HeroText>

        <HeroImage>
          <img src={heroImg} alt="Plant Illustration" />
        </HeroImage>
      </Hero>

      <Features>
        <Feature>
          <h3>🌿 Identify Any Plant</h3>
          <p>Take a photo of any plant and get its name, species, and uses instantly.</p>
        </Feature>
        <Feature>
          <h3>📚 Educational Insights</h3>
          <p>Learn about the medicinal and environmental benefits of the plant.</p>
        </Feature>
        <Feature>
          <h3>⚡ Fast & Easy</h3>
          <p>Simple interface and powerful AI make plant detection effortless for all users.</p>
        </Feature>
      </Features>

      <Footer>
        © 2024 Plant Detector. All Rights Reserved.
      </Footer>
    </PageWrapper>
  );
};

export default Home;
