import React from 'react'
import PreFooter from "./pre-footer";
import './style.scss'
import {NavLink} from "react-router-dom";

const Footer = () => {
    const isActive = (isActive) => (!isActive ? "L-nav-link" : "L-nav-active-link")
    return (
        <div className='L-footer'>
            <div className="L-footer-wrapper G-container">
                <div className='L-footer-content G-flex G-flex-wrap'>
                    <div className='L-footer-block'>
                        <h6>GET IN TOUCH</h6>
                        <p>
                            No dolore ipsum accusam no lorem.
                            Invidunt sed clita kasd clita et et dolor sed dolor.
                            Rebum tempor no vero est magna amet no
                        </p>
                        <p><span className='icon-location2'/>123 Street, New York, USA</p>
                        <p><span className='icon-envelop'/>info@example.com</p>
                        <p><span className='icon-phone'/>+012 345 67890</p>
                    </div>
                    <div className='L-footer-block'>
                        <h6>QUICK SHOP</h6>
                        <ul>
                            <li><span className='icon-circle-right'/>
                                <NavLink className={isActive} to='/home'>Home</NavLink>
                            </li>
                            <li><span className='icon-circle-right'/>
                                <NavLink className={isActive} to='/shop'>Our Shop</NavLink>
                            </li>
                            <li><span className='icon-circle-right'/>
                                <NavLink className={isActive} to='/detail'>Shop Detail</NavLink>
                            </li>
                            <li><span className='icon-circle-right'/>
                                <NavLink className={isActive} to='/cart'>Shopping Cart</NavLink>
                            </li>
                            <li><span className='icon-circle-right'/>
                                <NavLink className={isActive} to='/checkout'>Checkout</NavLink>
                            </li>
                            <li><span className='icon-circle-right'/>
                                <NavLink className={isActive} to='/contact'>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='L-footer-block'>
                        <h6>MY ACCOUNT</h6>
                        <ul>
                            <li><span className='icon-circle-right'/>
                                <NavLink  className={isActive} to='/home'>Home</NavLink>
                            </li>
                            <li><span className='icon-circle-right'/>
                                <NavLink className={isActive} to='/shop'>Our Shop</NavLink>
                            </li>
                            <li><span className='icon-circle-right'/>
                                <NavLink className={isActive} to='/detail'>Shop Detail</NavLink>
                            </li>
                            <li><span className='icon-circle-right'/>
                                <NavLink className={isActive} to='/cart'>Shopping Cart</NavLink>
                            </li>
                            <li><span className='icon-circle-right'/>
                                <NavLink className={isActive} to='/checkout'>Checkout</NavLink>
                            </li>
                            <li><span className='icon-circle-right'/>
                                <NavLink className={isActive} to='/contact'>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='L-footer-block'>
                        <h6>NEWSLETTER</h6>
                        <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                        <div className='L-footer-block-search G-flex'>
                            <input type="email" placeholder='Your Email Address'/>
                            <button className='G-button-color'>Sing Up</button>
                        </div>
                        <h6>Follow Us</h6>
                        <div className='L-footer-block-icons'>
                            <span className='icon-facebook G-button-color'/>
                            <span className='icon-instagram G-button-color'/>
                            <span className='icon-linkedin2 G-button-color'/>
                            <span className='icon-twitter G-button-color'/>
                        </div>
                    </div>
                </div>
                <PreFooter/>
            </div>
        </div>
    )
}
export default Footer