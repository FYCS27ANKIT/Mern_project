import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
)
