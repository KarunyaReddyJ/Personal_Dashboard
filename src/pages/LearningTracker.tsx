// src/pages/LearningTracker.tsx
import React, { useState } from 'react';

interface Course {
  name: string;
  progress: number;
}

const LearningTracker: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    { name: 'React', progress: 40 },
    { name: 'Data Structures', progress: 70 },
  ]);

  const handleProgressChange = (index: number, progress: number) => {
    const updatedCourses = [...courses];
    updatedCourses[index].progress = progress;
    setCourses(updatedCourses);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Learning Tracker</h2>
      {courses.map((course, index) => (
        <div key={index} className="mb-4">
          <label className="block font-medium">{course.name}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={course.progress}
            onChange={(e) => handleProgressChange(index, Number(e.target.value))}
            className="w-full"
          />
          <span>{course.progress}%</span>
        </div>
      ))}
    </div>
  );
};

export default LearningTracker;
