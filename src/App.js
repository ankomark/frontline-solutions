// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LoadingProvider } from './contexts/LoadingContext'
import Gateway from './pages/Gateway'
import FrontlineMedia from './pages/FrontlineMedia'
import SkylinkWifi from './pages/SkylinkWifi'
import LoadingScreen from './components/ui/LoadingScreen'

function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <Router>
          <div className="App">
            <LoadingScreen />
            <Routes>
              <Route path="/" element={<Gateway />} />
              <Route path="/frontline-media" element={<FrontlineMedia />} />
              <Route path="/skylink-wifi" element={<SkylinkWifi />} />
            </Routes>
          </div>
        </Router>
      </LoadingProvider>
    </ThemeProvider>
  )
}

export default App