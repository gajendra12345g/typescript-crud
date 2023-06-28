import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { Route  ,Routes} from 'react-router-dom';
import Todo from './components/Todo';
import Protected from './components/Protected';
function App() {
  return (
    <>   
  <Navbar/>
    <Routes>
      <Route path="/" element={<Protected Component={Todo}/>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  {/* <Todo/> */}
    </>
  );
}
export default App;
