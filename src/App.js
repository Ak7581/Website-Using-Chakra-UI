import React from 'react';
import { Route, BrowserRouter as Router, Routes,Outlet } from 'react-router-dom';
// import { Button } from '@chakra-ui/react'
import Header from './Components/Header';
import Home  from './Components/Home';
import Footer from './Components/Footer';
import Videos from './Components/Videos'
import Uplode from './Components/Uplode'
import Login from './Components/Login';
import Signup from './Components/Signup';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />

        <Route element = {<Sidebar/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/videos' element={<Videos/>} />
        <Route path='/uplode' element={<Uplode/>} />
        </Route>
      </Routes>
    </Router>
  );
}
const Sidebar = ()=>(
  <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
)

export default App;
