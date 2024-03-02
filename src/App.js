import './App.css';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup/Signup';
import Signin from './pages/signin/Signin';
import Home from './pages/home/Home';
function App() {

  return (
    <>
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route index path='/' element={<Home/>}/>
     <Route path='/signin' element={<Signin/>}/>
     <Route path='signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
