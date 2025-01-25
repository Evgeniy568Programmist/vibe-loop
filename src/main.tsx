import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Load Montserrat font
document.fonts.ready.then(() => {
  console.log('Montserrat font loaded successfully');
});

createRoot(document.getElementById("root")!).render(<App />);