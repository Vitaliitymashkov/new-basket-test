import express from 'express';
import { suggestTagsWithLLM } from '../services/tag_suggestion/ollama';

const router = express.Router();

router.post('/suggest-tags', async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: 'Missing name or description' });
  }

  try {
    const suggestedTags = await suggestTagsWithLLM(name, description);
    res.json({ suggestedTags });
  } catch (err) {
    console.error('Tag suggestion error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
