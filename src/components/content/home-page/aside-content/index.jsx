import React from 'react'
import offer1 from "../../../../assets/image/homePage/offer-1.jpg";
import offer2 from "../../../../assets/image/homePage/offer-2.jpg";
import './style.scss'
import {NavLink} from "react-router-dom";
const AsideContent = () =>{
    return(
        <div className='L-aside-content G-flex  G-flex-wrap'>
                <div className='L-aside-content-child'>
                    <div className='L-aside-content-img' style={{
                        backgroundImage: `url('${offer1}')`
                    }}/>
                    <div className='L-aside-child-overlay'>
                        <p>SAVE 20%</p>
                        <h6>Special Offer</h6>
                        <NavLink to='/shop'>
                            <button className='G-button-color'>Shop Now</button>
                        </NavLink>
                    </div>
                </div>
                <div className='L-aside-content-child'>
                    <div className='L-aside-content-img' style={{
                        backgroundImage: `url('${offer2}')`
                    }}/>
                    <div className='L-aside-child-overlay'>
                        <p>SAVE 20%</p>
                        <h6>Special Offer</h6>
                        <NavLink to='/shop'>
                            <button className='G-button-color'>Shop Now</button>
                        </NavLink>
                    </div>
                </div>
        </div>
    )
}
export default  AsideContent