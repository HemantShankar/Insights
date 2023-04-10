import './App.css';
import Landing from './MyComponents/Landing.jsx';
import Login from './MyComponents/Login.jsx';
import Signup from './MyComponents/Signup.jsx';
import UserProfile from './MyComponents/UserProfile.jsx';
import Experience from './MyComponents/Experience.jsx';
import About from './MyComponents/About.jsx';
import Home from './MyComponents/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      
      <>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/UserProfile" element={<UserProfile/>} />
        <Route path="/Experience" element={<Experience/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </>
    </BrowserRouter>
      );
}

      export default App;
