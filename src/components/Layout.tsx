// src/components/Layout.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-5">
      <nav className="flex flex-col space-y-4">
        <Link   className="hover:text-blue-400 transition-colors duration-200" to="/">Home</Link> 
        <Link   className="hover:text-blue-400 transition-colors duration-200" to="/learning-tracker">Learning Tracker</Link> 
        <Link   className="hover:text-blue-400 transition-colors duration-200" to="/profiles">Profiles</Link> 
        <Link   className="hover:text-blue-400 transition-colors duration-200" to="/projects">Projects</Link>
      </nav>
      </aside>
      <hr />
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
};

export default Layout;
