import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PokeDex from './component/pokedex/index.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokeDex />
  </StrictMode>
)
