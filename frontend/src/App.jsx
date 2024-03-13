import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Products from './Pages/Products';
import Landing from './Pages/Landing';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import ErrorPage from './Components/Error';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/contactus' element={<Contact/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App