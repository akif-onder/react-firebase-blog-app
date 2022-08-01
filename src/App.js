
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Post from './pages/Post';
import Login from './pages/Login';
import { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from './firebase';



function App() {
  const [isAuth, setIsAuth] = useState(false);



  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
      
    });
  };



  return (
    <BrowserRouter>
    <nav>
      <Link to='/' >Home</Link>
      <Link to='/post' >Post</Link>
      {!isAuth ? <Link to='/login' >Login</Link> : <button onClick={signUserOut}>Log Out</button>}
    </nav>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/post' element={<Post/>} />
      <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
