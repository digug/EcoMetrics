import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ScorePage from '../src/pages/ScorePage.tsx';
import './App.css'
import Layout from './pages/Layout/Layout'
import UploadPortfolio from './pages/UploadPortfolio'
improt 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<UploadPortfolio/>}/>
        {/*       
        <Route index element={<Home/>}/>  
        <Route path="/about" element={<About/>}/>
        */}
        <Route path="/evaluate" element={}/> 

      </Route>
    </Routes>
  )
}
export default App;
