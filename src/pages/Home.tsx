import React from 'react';
import { Link } from 'react-router-dom';
import useDashboardStore from '../store/useDashboardStore';

const Home: React.FC = () => {
  const { username, setUsername } = useDashboardStore();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value;  
    setUsername(newUsername);              
    localStorage.setItem('profileUserName', newUsername);
}

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Welcome to Your Personal Dashboard {username}
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        Track your learning progress and manage your developer profiles here.
      </p>
      
      <input
        placeholder='Enter your GitHub username'
        value={username}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-2 mb-6 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      
      <div className="flex flex-col space-y-4">
        <Link to="/learning-tracker" className="bg-blue-500 text-white py-2 rounded-lg text-center hover:bg-blue-600 transition duration-300">
          Learning Tracker
        </Link>
        <Link to="/profiles" className="bg-blue-500 text-white py-2 rounded-lg text-center hover:bg-blue-600 transition duration-300">
          Profiles
        </Link>
      </div>
    </div>
  );
};

export default Home;
