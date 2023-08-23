import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Service from './components/Service/Service'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Home from './components/Home/Home'
import Project from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/skill' element={<Skills/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App
