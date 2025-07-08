import axios from 'axios';

export async function suggestTagsWithLLM(name: string, description: string): Promise<string[]> {
  const prompt = `
You are a product catalog assistant. Based on the following name and description, suggest 3 relevant product tags (lowercase, comma-separated).

Name: ${name}
Description: ${description}

Tags:
  `;

  const response = await axios.post('http://localhost:11434/api/generate', {
    model: 'mistral',
    prompt,
    stream: false
  });

  const rawOutput = response.data.response.trim();
  const tags = rawOutput
    .replace(/^Tags:\s*/i, '')
    .split(',')
    .map((t: string) => t.trim().toLowerCase())
    .filter(Boolean);

  return tags.slice(0, 3);
}
