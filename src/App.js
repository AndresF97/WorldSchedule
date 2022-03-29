import {React} from 'react';
import './App.css';
import Landing from './pages/landing';
import UserPage from './pages/userPage';
import ProjectsPage from './pages/projectsPage';
import Navbar from './components/Navbar';
import Footer from "./components/footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Navbar/>
          <Router>
            <Routes>
              <Route exact path="/" element={<Landing/>}/>
              <Route exact path="/User" element={<UserPage/>}/>
              <Route exact path="/Project" element={<ProjectsPage/>}/>
            </Routes>
        </Router>
    <Footer/>
    </>
    
  );
}

export default App;
