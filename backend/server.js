import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Determine if we're in production or development
const isProduction = process.env.NODE_ENV === 'production'

// Use port 80 in production, 3000 in development
const PORT = process.env.PORT || (isProduction ? 80 : 3000)

// Enable CORS for all routes
app.use(cors())

// Serve assistant.js as static file
app.use(express.static(path.join(__dirname, 'public')))

// Simple AI Assistant endpoint (mock)
app.post('/ask', express.json(), async (req, res) => {
  const { question } = req.body
  const apiKey = req.headers['x-api-key']
  const answer = `Pretend this is an AI response for "${question}"`
  res.json({ answer })
})

// Listen on all network interfaces, not just localhost
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT} in ${isProduction ? 'production' : 'development'} mode`)
})
