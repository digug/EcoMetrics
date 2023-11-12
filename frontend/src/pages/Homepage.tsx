import React from 'react';
import demo from '../assets/Screenshot_2023-11-12_at_2.04.25_AM-removebg.png';
import stockWorld from '../assets/pexels-hatice-baran-17931015.jpg';
import '../styles/Homepage.css';
import { Button } from '@mui/material';

const HomePage = () => {
  return (
    <div className="all-container">
      <div className="home-page-container">
        <img className="demo-image" src={demo} alt="Platform Screenshot" />
        <div className="text-container">
          <h1>Sustainable Investing is Important...</h1>
          <p></p>
          <p>
            Using our tool can help you <strong>own your investments.</strong> Get started today.
          </p>
          <p></p>
          <Button variant="contained">Evaluate Portfolio</Button>
        </div>
      </div>

      <div className="bullets-container">
        <div className="text-container">
          <h1>We offer an easy-to-use solution that gives you peace of mind over your investments:</h1>
          <p></p>
          <ul className='ul-spacing'>
            <li>Get the ESG scores of all NASDAQ and NYSE companies</li>
            <li>See a comprehensive ESG breakdown</li>
            <li>Explore industry-specific ESG ratings</li>
            <li>Compare ESG performance across different sectors</li>
            <li>Access historical ESG data for trend analysis</li>
            <li>Receive personalized ESG investment recommendations</li>
            <li>Discover socially responsible investment opportunities</li>
            <li>Learn about the methodology behind our ESG scoring</li>
          </ul>
          <p></p>
          <Button variant="contained">About Us</Button>
        </div>
        <div className="image-container">
          <img className="world-image" src={stockWorld} alt="World Image" />
        </div>
      </div>

      <div className="footer">
        &copy; PECOM 2023
      </div>
    </div>
  );
}

export default HomePage;
