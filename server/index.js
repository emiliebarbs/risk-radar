// /server/index.js
import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = 3001;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(express.json());

app.post('/api/openai', async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
      messages: [{ role: 'user', content: prompt }],
    });

    res.json({ output_text: completion.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
