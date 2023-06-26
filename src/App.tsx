import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Route  ,Routes} from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <>
   
<Router>
  <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>

    </>
  );
}

export default App;
