import React from 'react'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
const CartIcon = () =>{
    const cartProducts = useSelector((state) => state.ShopReducer.cartProducts)
    return (
        <>
            {cartProducts.length > 0 ? <div className="L-fixed-cart-icon">
                <NavLink to='/cart'>
                    <span className='icon-cart'/>
                    <p className={cartProducts.length !== 0 ? 'L-cart-count' : 'L-cart-not-count'}>{cartProducts.length}</p>
                </NavLink>
            </div> : null}
        </>

    )
}
export default CartIcon