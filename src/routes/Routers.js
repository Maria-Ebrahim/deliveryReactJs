import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AllFoods from '../pages/AllFoods'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import FoodDetails from '../pages/FoodDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { Navigate } from 'react-router-dom'
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/foods' element={<AllFoods/>}/>
        <Route path='/foods/:id' element={<FoodDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default Routers
