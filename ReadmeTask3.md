#  Local AI integration for auto-tagging products via name + description

To allow switching between Ollama or Sentence-Transformers, like so:
```
services/
├── tag_suggestion/
│   ├── index.ts              # main controller
│   ├── ollama.ts             # LLM strategy
│   ├── semantic.ts           # embedding strategy
│   └── types.ts              # type definitions
```

## Step-by-Step: Ollama-Based Suggestion (/suggest-tags)

###  1. Run Local Ollama
Install and run:

```
curl -fsSL https://ollama.com/install.sh | sh
ollama pull mistral
ollama run mistral
```
It will be available at: http://localhost:11434


## Example API Call
```
POST /suggest-tags

Content-Type: application/json

{
  "name": "Bluetooth Noise Cancelling Headphones",
  "description": "Over-ear wireless headphones with 30h battery life and deep bass."
}

```


Output:

```
{
  "suggestedTags": ["audio", "wireless", "electronics"]
}
```