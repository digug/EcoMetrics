import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ScorePage from '../src/pages/ScorePage.tsx';
import './App.css'
import Layout from './pages/Layout/Layout'
import UploadPortfolio from './pages/UploadPortfolio.tsx'
import HomePage from './pages/Homepage.tsx'; 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>         
        <Route index element={<HomePage/>}/>  
        {/*<Route path="/about" element={<About/>}/>
        */}
        <Route path="/evaluate" element={<UploadPortfolio/>}/> 


      </Route>
    </Routes>
  )
}
export default App;
