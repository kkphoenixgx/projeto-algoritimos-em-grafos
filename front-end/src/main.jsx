import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Xexample } from './components'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Xexample/>
  </StrictMode>
)
