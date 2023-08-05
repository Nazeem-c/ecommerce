import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'
import LogOUt from '../Components/LogOut/LogOUt'
import ProductDetails from '../Components/ProductDetails/ProductDetails'

function RoutesLayout() {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/LogOut' element={<LogOUt/>}/>
            <Route path= 'Product/:id' element={<ProductDetails/>}/>
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default RoutesLayout