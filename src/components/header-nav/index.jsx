import React, {useState} from "react";
import './style.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const HeaderNav = () => {
    const [burger, setBureger] = useState(false)
    const handleBurger = () => {
        setBureger(!burger)
    }
    const isActive = (isActive) => (!isActive ? "L-nav-link" : "L-nav-active-link")
    const itemsInCart = useSelector((state) => state.ShopReducer.cartProducts)
    return (
        <div className='L-header-nav'>
            <div className='L-header-nav-wrapper G-container G-flex G-justify-between G-align-center'>
                <div className='G-flex G-justify-between'>
                    <div className='L-header-nav-title-block'>
                        <NavLink to='/home' className=' G-flex'>
                            <div className='L-header-nav-title'>MULTI</div>
                            <div className='L-header-nav-title'>SHOP</div>
                        </NavLink>
                    </div>
                    <div className='L-header-nav-burger' onClick={handleBurger}>
                        <span className='icon-menu'/>
                    </div>
                </div>

                <div className={burger ? 'L-header-nav-links-block-active' : 'L-header-nav-links-block'}>
                    <ul className='L-header-nav-links G-flex'>
                        <li className='L-header-nav-link'><NavLink className={isActive} to='/home'>Home</NavLink></li>
                        <li className='L-header-nav-link'><NavLink className={isActive} to='/shop'>Shop</NavLink></li>
                        <li className='L-header-nav-link'><NavLink className={isActive} to='/detail'>Shop
                            Detail</NavLink></li>
                        <li className='L-header-nav-link'>
                            Pages <span className='icon-circle-down'/>
                            <ul className='L-header-nav-drop'>
                                <li className='L-header-nav-link'>
                                    <NavLink className={isActive} to='/cart'>Shopping Cart</NavLink>
                                </li>
                                <li className='L-header-nav-link'>
                                    <NavLink className={isActive} to='/checkout'>Checkout</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className='L-header-nav-link'><NavLink className={isActive} to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={burger ? 'L-header-nav-links-block-active' : 'L-header-nav-links-block G-flex'}>
                    <div className='L-header-nav-icons G-flex G-justify-around'>
                        <div className='L-header-nav-icon'>
                            <span className='icon-heart'/>
                        </div>
                        <div className='L-header-nav-icon L-header-nav-icon-count'>0</div>
                    </div>
                    <div className='L-header-nav-icons G-flex'>
                        <div className='L-header-nav-icon'>
                            <span className='icon-cart'/>
                        </div>
                        <div className='L-header-nav-icon L-header-nav-icon-count'>{itemsInCart.length}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HeaderNav