import React from 'react'
import { Route } from "react-router-dom"
import HomePage from "../components/content/home-page";
import ContactPage from "../components/content/contact-page";
import { Redirect } from "react-router-dom"
import Cart from "../components/content/cart-page";
import CheckoutPage from "../components/content/checkout-page";
import ShopPage from "../components/content/shop-page";
import Detail from "../components/content/detail";
const Router = () =>{
    return(
        <>
        <Route exact path='/' render={()=><Redirect to='/home'/>}/>
        <Route exact path='/home' render={() => <HomePage/>}/>
        <Route exact path='/cart' render={() => <Cart/>}/>
        <Route exact path='/shop' render={() => <ShopPage/>}/>
        <Route exact path='/detail/:id' render={() => <Detail/>}/>
        <Route exact path='/detail' render={() => <Redirect to='/shop'/>}/>
        <Route exact path='/checkout' render={() => <CheckoutPage/>}/>
        <Route exact path='/contact' render={()=><ContactPage/>}/>
        </>
    )
}
export default Router