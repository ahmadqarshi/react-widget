
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

// Serve assistant.js as static file
app.use(express.static(path.join(__dirname, 'public')))

// Simple AI Assistant endpoint (mock)
app.post('/ask', express.json(), async (req, res) => {
  const { question } = req.body
  const apiKey = req.headers['x-api-key']
  const answer = `Pretend this is an AI response for "${question}"`
  res.json({ answer })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
