import React from 'react';
import Home from './Components/Home'
import Skill from './Components/Skill'
import { Route, Routes } from 'react-router-dom';
import Education from './Components/Education';
import Project from './Components/Project'
import Navbar from './Navbar';
//  import Home from './Components/Home';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Skill" element={<Skill />} />
        <Route path='/Education' element={<Education />} />
        <Route path='/Project' element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
