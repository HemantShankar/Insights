import './App.css';
import Home from './MyComponents/Home.jsx';
import Navbar from './MyComponents/Navbar.jsx';
import Login from './MyComponents/Login.jsx';
import Signup from './MyComponents/Signup.jsx';
import Footer from './MyComponents/Footer.jsx';
import UserProfile from './MyComponents/UserProfile.jsx';

function App() {
  return (
    <>
    {/* <Home/> */}
    <Navbar/>
    {/* <Login /> */}
    {/* <Signup/> */}
    <UserProfile/>
    <Footer/>
    </>
    
  );
}

export default App;
