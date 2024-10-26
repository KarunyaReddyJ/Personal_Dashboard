// src/pages/Profiles.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface GitHubProfile {
  login: string;
  public_repos: number;
  followers: number;
}

const Profiles: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);

  useEffect(() => {
    axios.get('https://api.github.com/users/<your-username>')
      .then((response) => setProfile(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Profiles</h2>
      {profile ? (
        <div>
          <p>Username: {profile.login}</p>
          <p>Repositories: {profile.public_repos}</p>
          <p>Followers: {profile.followers}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profiles;
