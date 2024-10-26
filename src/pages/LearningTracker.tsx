// src/pages/LearningTracker.tsx
import React, { useState, useEffect } from "react";
import getTechnologiesUsed, { LanguageData } from "../store/useLanguages";
import useDashboardStore from "../store/useDashboardStore";

const LearningTracker: React.FC = () => {
  const [languages, setLanguages] = useState<LanguageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { username } = useDashboardStore();

  useEffect(() => {
    const getData = async () => {
      console.log('tracker')
      if(!username) return
      try {
        const data: LanguageData | null = await getTechnologiesUsed(username);
        setLanguages(data);
      } catch (err) {
        setError("Failed to fetch technologies used. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [username]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Learning Tracker
      </h2>

      {loading && (
        <p className="text-center text-gray-600">Loading languages...</p>
      )}

      {error && <p className="text-red-500 text-center">{error}</p>}

      {languages && !loading && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
          <ul className="list-disc pl-5">
            {Object.entries(languages)
              .sort((a, b) => b[1] - a[1])
              .map(([language, bytes]) => (
                <li key={language} className="mb-2">
                  <span className="font-medium text-gray-700">{language}:</span>{" "}
                  <span className="text-gray-500">{bytes} bytes</span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LearningTracker;
