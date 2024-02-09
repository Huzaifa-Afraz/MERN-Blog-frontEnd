import './App.css';
import NavBar from './components/Navbar/NavBar';
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup/Signup';
import Signin from './pages/signin/Signin';
function App() {

  return (
    <>
    <NavBar/>
    <BrowserRouter>
    <Routes>
     <Route index path='/' element={<Signin/>}/>
     <Route path='signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
