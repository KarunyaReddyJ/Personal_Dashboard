import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional CSS file for styling, if needed

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Your Personal Dashboard</h1>
      <p>Track your learning progress and manage your developer profiles here.</p>

      <div className="home-links">
        <Link to="/learning-tracker" className="home-link">
          Learning Tracker
        </Link>
        <Link to="/profiles" className="home-link">
          Profiles
        </Link>
      </div>
    </div>
  );
};

export default Home;
