import React, {useState} from "react";
import {NavLink, Redirect, useHistory} from "react-router-dom";
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {decrementProduct, deleteItemFromCart, incrementProduct} from '../../../redux/reducers/shopReducer'
import ShopReducer from "../../../redux/reducers/shopReducer";

const Cart = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const isActive = (isActive) => (!isActive ? "L-nav-link" : "L-nav-active-link")
    const itemsInCart = useSelector((state) => state.ShopReducer.cartProducts)
    const subTotal = itemsInCart.reduce((acc, item) => acc += item.price * item.count, 0)
    const total = subTotal > 10000 ? 100 : subTotal === 0 ? 0 : 20
    const handleClickIncrement = (item) => {
        dispatch(incrementProduct(item))
    }
    const handleClickDecrement = (item) => {
        dispatch(decrementProduct(item))
    }
    const handleWarring = () => {
        if(subTotal === 0) {
            alert('chose any thing in store');
            history.push('/shop')
        }
    }
    return (
        <div className='L-cart-wrapper G-container'>
            <nav className='L-cart-header'>
                <NavLink className={isActive} to='/home'>Home</NavLink>
                <span>/</span>
                <NavLink className={isActive} to='/shop'>Shop</NavLink>
                <span>/</span>
                <NavLink className={isActive} to='/cart'>Shopping Cart</NavLink>
            </nav>
            <div className='L-cart-content G-flex'>
                <div className="L-cart-content-child">
                    <div className='L-cart-content-info'>
                        <ul className='L-cart-info-links G-flex'>
                            <li>Products</li>
                            <li>Price</li>
                            <li>Quantity</li>
                            <li>Total</li>
                            <li>Remove</li>
                        </ul>
                    </div>
                    <div className='L-cart-items'>
                        {itemsInCart.length === 0 && <div className='L-empty-cart'> Cart Empty</div>}
                        {itemsInCart.map(item => {
                            return (
                                <ul className='L-cart-items-block G-flex' key={item.id}>
                                    <li className='G-flex'>
                                        <div className='L-item-image'
                                             style={{backgroundImage: `url('${item.images[0]}')`}}/>
                                        <p>{item.title}</p>
                                    </li>
                                    <li>${item.price}</li>
                                    <li>
                                        <div className='L-cart-add-or-del G-flex'>
                                            <span className='icon-minus G-button-color'
                                                  onClick={() => handleClickDecrement(item)}/>
                                            <p>{item.count}</p>
                                            <span className='icon-plus G-button-color'
                                                  onClick={() => handleClickIncrement(item)}/>
                                        </div>
                                    </li>
                                    <li>${item.price * item.count}</li>
                                    <li><span className='icon-cancel-circle L-close-icon'
                                              onClick={() => dispatch(deleteItemFromCart(item.id))}/></li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
                <div className="L-cart-content-child">
                    <div className="L-cart-promo-block G-flex">
                        <input type="text" placeholder='Coupon code'/>
                        <button className='G-button-color'>Apply Coupon</button>
                    </div>
                    <div className="L-cart-title G-flex">
                        <h6>CART SUMMARY</h6>
                        <div className='L-cart-title-line'/>
                    </div>
                    <div className="L-cart-pay">
                        <div className='L-cart-pay-info G-flex G-justify-between'><p>Subtotal</p><p>${subTotal}</p>
                        </div>
                        <div className='L-cart-pay-info G-flex G-justify-between'><p>Shipping</p><p>${total}</p></div>
                        <hr/>
                        <div className='L-cart-pay-info-total G-flex G-justify-between'><p>Total</p>
                            <p>${subTotal + total}</p></div>
                        <div className="L-cart-pay-btn">

                            <button className='G-button-color' onClick={handleWarring}>
                                {subTotal !== 0 ?  <NavLink to='/checkout'>
                                    Proceed To Checkout
                                </NavLink> : 'Proceed To Checkout'}
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart