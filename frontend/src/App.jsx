import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import AddToCart from './pages/AddToCart';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/menu' element={<Menu></Menu>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/aboutUs' element={<AboutUs></AboutUs>}></Route>
          <Route path='/addtocart' element={<AddToCart></AddToCart>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
