import React, {useState} from "react"
import AllCards from "./components/AllCards"
import DataScience from "./components/DataScience"
import Fsd from "./components/Fsd"
import Tabs from "./components/Tabs"
import CyberSecurity from "./components/CyberSecurity"
import Career from "./components/Career"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"



function App() {
  
  return (
    <>
      <BrowserRouter>
        <div className="container">
        <Tabs />

        <div className="card-wrapper">
          <Routes>
            <Route path="/all" element={<AllCards/>}/>
            <Route path="/full-stact-development" element={<Fsd/>}/>
            <Route path="/data-science" element={<DataScience />}/>
            <Route path="/cyber-security" element={<CyberSecurity/>}/>
            <Route path="/career" element={<Career/>}/>
            <Route path="*" element={<Navigate to='/all' />}/>
          </Routes>
        </div>
                   
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
