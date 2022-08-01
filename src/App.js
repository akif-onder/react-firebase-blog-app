
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Post from './pages/Post';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to='/' >Home</Link>
      <Link to='/post' >Post</Link>
      <Link to='/login' >Login</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/post' element={<Post/>} />
      <Route path='/login' element={<Login/>} />      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
