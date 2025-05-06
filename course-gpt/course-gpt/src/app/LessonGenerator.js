// src/components/LessonGenerator.js

import React, { useState } from 'react';

const LessonGenerator = ({ generateLesson }) => {
  const [topic, setTopic] = useState('');
  const [lesson, setLesson] = useState('');

  const handleGenerate = () => {
    if (topic) {
      generateLesson(topic);
    }
  };

  return (
    <div>
      <h2>Lesson Generator</h2>
      <input
        type="text"
        placeholder="Enter course topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate Lesson</button>

      <div>
        {lesson && (
          <div>
            <h3>Generated Lesson:</h3>
            <p>{lesson}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonGenerator;
