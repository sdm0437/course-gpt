// server/index.js

const express = require('express');
const { OpenAI } = require('openai');
const app = express();
const port = 5000;

// Initialize OpenAI API
const openai = new OpenAI({
  apiKey: 'your-openai-api-key', // Use your API key here
});

app.use(express.json());

// API Route to generate lesson
app.post('/api/generateLesson', async (req, res) => {
  const { topic } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4', // You can use GPT-3 as well
      messages: [
        {
          role: 'system',
          content: 'You are an assistant that helps create educational lessons.',
        },
        {
          role: 'user',
          content: `Generate a detailed lesson on ${topic} for an online course.`,
        },
      ],
    });

    const lessonText = completion.choices[0].message.content;
    res.json({ lesson: lessonText });
  } catch (error) {
    console.error('Error generating lesson:', error);
    res.status(500).send('Error generating lesson');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
