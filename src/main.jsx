import React from 'react'
import ReactDOM from 'react-dom/client'
import './StyleComponent/index.css'
import App from './App'
const prefersDarkTheme = localStorage.getItem('theme') === 'dark';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={`App ${prefersDarkTheme ? 'dark' : 'light'}`}>
      <App />
    </div>
  </React.StrictMode>,
)
