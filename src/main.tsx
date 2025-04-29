import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ControlProvider from './components/ControlProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ControlProvider>
      <App />
    </ControlProvider>
  </StrictMode>,
)
