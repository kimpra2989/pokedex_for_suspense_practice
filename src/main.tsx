import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PokeDex from './component/pokedex/index.tsx'
import './index.css'
import SuspensePokeDex from './component/suspense/suspense-pokedex/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <PokeDex /> */}
    <SuspensePokeDex />
  </StrictMode>
)
