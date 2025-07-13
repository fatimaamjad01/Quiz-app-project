
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import Layout from './Layout/Index.jsx'
import QuizIntroScreen from './Section/QuizIntroScreen.jsx'
import QuizCategory from './Pages/QuizCategory.jsx'

function App() {
 

  return (
    <>
      <Layout>
      <Routes>
        <Route path="/" element={<QuizIntroScreen />} />
        <Route path="/category" element={<QuizCategory />} />
</Routes>
</Layout>
      
    </>
  )
}

export default App
