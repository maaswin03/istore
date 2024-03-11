import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Products from './Pages/Products';
import Landing from './Pages/Landing';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App