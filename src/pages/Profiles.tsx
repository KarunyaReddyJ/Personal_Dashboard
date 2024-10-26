// src/pages/Profiles.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useDashboardStore from '../store/useDashboardStore';

interface GitHubProfile {
  login: string;
  public_repos: number;
  followers: number;
  avatar_url: string;
  html_url: string;
}

const Profiles: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const { username } = useDashboardStore();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => setProfile(response.data))
      .catch((error) => console.error(error));
  }, [username]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">GitHub Profile</h2>
        {profile ? (
          <div className="flex flex-col items-center">
            <img
              src={profile.avatar_url}
              alt={`${profile.login}'s avatar`}
              className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300"
            />
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-500 hover:underline"
            >
              {profile.login}
            </a>
            <div className="mt-4 w-full">
              <p className="text-gray-700">
                <span className="font-semibold">Repositories:</span> {profile.public_repos}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Followers:</span> {profile.followers}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default Profiles;
