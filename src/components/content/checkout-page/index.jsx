import React from 'react'
import {NavLink} from "react-router-dom";
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart} from "../../../redux/reducers/shopReducer";

const CheckoutPage = () => {
    const dispatch = useDispatch()
    const itemsInCart = useSelector((state) => state.ShopReducer.cartProducts)
    const subTotal = itemsInCart.reduce((acc, item) => acc += item.price * item.count, 0)
    const total = subTotal > 10000 ? 100 : subTotal === 0 ? 0 : 20
    const isActive = (isActive) => (!isActive ? "L-nav-link" : "L-nav-active-link")
    return (
        <div className='L-checkout-page G-container'>
            <nav className='L-checkout-header'>
                <NavLink className={isActive} to='/home'>Home</NavLink>
                <span>/</span>
                <NavLink className={isActive} to='/shop'>Shop</NavLink>
                <span>/</span>
                <NavLink className={isActive} to='/checkout'>Checkout</NavLink>
            </nav>
            <div className='L-checkout-wrapper G-flex G-flex-wrap'>
                <div className='L-checkout-child'>
                    <div className="L-checkout-child-title G-flex">
                        <h6>BILLING ADDRESS</h6>
                        <div className='L-checkout-title-line'/>
                    </div>
                    <div className='L-checkout-child-info-block G-flex G-flex-wrap'>
                        <div className='L-checkout-child-info'>
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" placeholder='Your Name'/>
                        </div>
                        <div className='L-checkout-child-info'>
                            <label htmlFor="Last Name">Last Name</label>
                            <input type="text" placeholder='Your Last Name'/>
                        </div>
                        <div className='L-checkout-child-info'>
                            <label htmlFor="Email">Email</label>
                            <input type="email" placeholder='Your Email'/>
                        </div>
                        <div className='L-checkout-child-info'>
                            <label htmlFor="Mobile No">Mobile No</label>
                            <input type="number" placeholder='Your Mobile Number'/>
                        </div>
                        <div className='L-checkout-child-info'>
                            <label htmlFor="Address Line 1">Address Line 1</label>
                            <input type="text" placeholder='Address Line 1'/>
                        </div>
                        <div className='L-checkout-child-info'>
                            <label htmlFor="Address Line 2">Address Line 2</label>
                            <input type="text" placeholder='Address Line 2'/>
                        </div>
                        <div className='L-checkout-child-info'>
                            <label htmlFor="Country">Country</label>
                            <input type="text" placeholder='Your Last Name'/>
                        </div>
                        <div className='L-checkout-child-info'>
                            <label htmlFor="City">City</label>
                            <input type="text" placeholder='Your City'/>
                        </div>
                        <div className='L-checkout-child-info'>
                            <label htmlFor="State">State</label>
                            <input type="text" placeholder='Your State'/>
                        </div>
                        <div className='L-checkout-child-info'>
                            <label htmlFor="ZIP Code">ZIP Code</label>
                            <input type="number" placeholder='Your ZIP Code'/>
                        </div>
                        <div className='L-checkout-child-info'>
                            <div className='L-info-checkout-radio'>
                                <input type="radio" className='G-input-radio'/>
                                <span>Create an account</span>
                            </div>
                            <div className='L-info-checkout-radio'>
                                <input type="radio" className='G-input-radio'/>
                                <span>Ship to different address</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='L-checkout-child'>
                    <div className="L-checkout-pre-child">
                        <div className="L-checkout-child-title G-flex">
                            <h6>ORDER TOTAL</h6>
                            <div className='L-checkout-title-line'/>
                        </div>
                        <div className='L-checkout-order'>
                            <div className='L-checkout-order-products-wrapper'>
                                <p className='L-checkout-order-products-title'>Products</p>
                                <div className='L-checkout-order-products'>
                                    {itemsInCart.map(item => {
                                        return (
                                            <div className='L-checkout-order-product G-flex G-justify-between'
                                                 key={item.id}>
                                                <p>{item.title}</p>
                                                <p>${item.price} | {item.count} <sub>x</sub>
                                                    <span
                                                        className='L-delete-order-product'
                                                        onClick={() => dispatch(deleteItemFromCart(item.id))}
                                                    >&times;</span>
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                            <hr/>
                            <div className='L-checkout-order-subtotal'>
                                <div className='G-flex G-justify-between L-check-order-price'>
                                    <p>Subtotal</p>
                                    <p>${subTotal}</p>

                                </div>
                                <div className='G-flex G-justify-between L-check-order-price'>
                                    <p>Shipping</p>
                                    <p>${total}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className='L-checkout-order-total'>
                                <div className='G-flex G-justify-between L-check-order-price'>
                                    <p>Total</p>
                                    <p>${subTotal + total}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="L-checkout-pre-child">
                        <div className="L-checkout-child-title G-flex">
                            <h6>PAYMENT</h6>
                            <div className='L-checkout-title-line'/>
                        </div>
                        <div className="L-checkout-payment">
                            <div className='L-checkout-payment-info'>
                                <div className='L-checkout-payment-check'>
                                    <input type="radio" className='G-input-radio'/>
                                    <span>Paypal</span>
                                </div>
                                <div className='L-checkout-payment-check'>
                                    <input type="radio" className='G-input-radio'/>
                                    <span>Direct Check</span>
                                </div>
                                <div className='L-checkout-payment-check'>
                                    <input type="radio" className='G-input-radio'/>
                                    <span>Bank Transfer</span>
                                </div>
                            </div>
                            <div className='L-checkout-payment-btn'>
                                <button className='G-button-color'>
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CheckoutPage