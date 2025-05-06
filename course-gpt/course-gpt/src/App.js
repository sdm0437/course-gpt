// src/App.js

import React, { useState } from 'react';
import LessonGenerator from './components/LessonGenerator';

const App = () => {
  const [lesson, setLesson] = useState('');

  const generateLesson = async (topic) => {
    // API call to AI model (we'll implement this later)
    const response = await fetch(`/api/generateLesson`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic }),
    });

    const data = await response.json();
    setLesson(data.lesson);
  };

  return (
    <div className="App">
      <h1>Welcome to CourseGPT</h1>
      <LessonGenerator generateLesson={generateLesson} />
    </div>
  );
};

export default App;
