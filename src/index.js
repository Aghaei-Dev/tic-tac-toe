import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './context'
import App from './App'

import './global/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <AppProvider>
    <App />
  </AppProvider>
)
