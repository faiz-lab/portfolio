import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-sc/400.css";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
