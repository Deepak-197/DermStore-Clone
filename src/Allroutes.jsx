import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from './Components/LandingPages/Homepage'
import { Login } from './Components/LoginAuth/Login'
import { Signup } from './Components/LoginAuth/Signup'
import { Cart } from './Components/CartPage/Cart'
import { ProductPage } from './pages/ProductPage'
//1. HomePage
//2. Login
//3. Signup
// 4. Products pages
//    i. mumltiple product
//    ii. individual
//4. Cart page

export const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />} />
      <Route path='/product' element={<ProductPage />}/>
      {/* <Route path='' element={< />}/> */}
      <Route path='/cart' element={<Cart />}></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>

    </Routes>
  )
}
