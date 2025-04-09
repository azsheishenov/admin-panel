import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api';
        
import App from './app/App.jsx'

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import './app/styles/index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </StrictMode>
)
