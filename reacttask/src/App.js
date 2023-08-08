
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home.js';
import Profile from './Components/Profile.js';
import Projects from './Components/project.js';
import Layout from './Components/Layout.js';
  
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='Profile' element ={<Profile />} />
          <Route path='Projects' element ={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
