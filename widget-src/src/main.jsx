
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const scriptTag = document.currentScript
const company = scriptTag?.getAttribute('data-company') || 'default'

const container = document.createElement('div')
container.id = 'assistant-widget-container'
document.body.appendChild(container)

ReactDOM.createRoot(container).render(<App company={company} />)
