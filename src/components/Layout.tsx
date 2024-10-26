// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

// Properly define props type to accept children
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-5">
        <h1 className="text-2xl font-bold mb-5">My Dashboard</h1>
        <nav className="flex flex-col space-y-2">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/learning-tracker" className="hover:text-blue-400">Learning Tracker</Link>
          <Link to="/profiles" className="hover:text-blue-400">Profiles</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default Layout;
