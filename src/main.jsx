import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css'

// Routes
import App from './App' 
import Hello from './routes/hello'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/hello" element={<Hello />} /> */}
    </Routes>
  </BrowserRouter>
)
