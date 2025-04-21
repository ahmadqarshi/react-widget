
import React, { useState } from 'react'

export default function App({ company }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const sendMessage = async () => {
    const response = await fetch('/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'demo-key' // Replace with real auth logic
      },
      body: JSON.stringify({ question: input })
    })
    const data = await response.json()
    setMessages([...messages, { role: 'user', content: input }, { role: 'assistant', content: data.answer }])
    setInput('')
  }

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, width: 300, background: 'white', border: '1px solid #ccc', padding: 10, borderRadius: 10 }}>
      <h4>Assistant ({company})</h4>
      <div style={{ maxHeight: 200, overflowY: 'auto', marginBottom: 10 }}>
        {messages.map((msg, idx) => (
          <div key={idx}><strong>{msg.role}:</strong> {msg.content}</div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask me something..." style={{ width: '100%' }} />
      <button onClick={sendMessage} style={{ width: '100%', marginTop: 5 }}>Send</button>
    </div>
  )
}
