import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/reset.css'
import './css/index.css'
import App from './App.jsx'
import NavBar from './components/NavBar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <App />
  </StrictMode>,
)