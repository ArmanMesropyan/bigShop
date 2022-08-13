import React from 'react'
import offer1 from '../../../../assets/image/homePage/offer-1.jpg'
import offer2 from '../../../../assets/image/homePage/offer-2.jpg'
import carousel1 from '../../../../assets/image/homePage/carousel-1.jpg'
import carousel2 from '../../../../assets/image/homePage/carousel-2.jpg'
import carousel3 from '../../../../assets/image/homePage/carousel-3.jpg'
import './style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";


const HomeContent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    };
    return (
        <div className='L-home-content'>
            <div className="L-home-content-wrapper G-flex ">
                <div className='L-home-content-child'>
                    <Slider {...settings}>
                        <div>
                            <div className="L-home-content-slider-child">
                                <div className='L-home-content-img' style={{
                                    backgroundImage: `url('${carousel1}')`
                                }}/>
                                <div className='L-home-content-pre-child-overlay'>
                                    <h6>Men Fashion</h6>
                                    <p>Lorem rebum magna amet lorem magna erat diam stet.
                                        Sadips duo stet amet amet ndiam elitr ipsum diam
                                    </p>
                                    <NavLink to='/shop'>
                                        <button className='G-button-color'>Shop Now</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="L-home-content-slider-child">
                                <div className='L-home-content-img' style={{
                                    backgroundImage: `url('${carousel2}')`
                                }}/>
                                <div className='L-home-content-pre-child-overlay'>
                                    <h6>Women Fashion</h6>
                                    <p>Lorem rebum magna amet lorem magna erat diam stet.
                                        Sadips duo stet amet amet ndiam elitr ipsum diam
                                    </p>
                                    <NavLink to='/shop'>
                                        <button className='G-button-color'>Shop Now</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="L-home-content-slider-child">
                                <div className='L-home-content-img' style={{
                                    backgroundImage: `url('${carousel3}')`
                                }}/>
                                <div className='L-home-content-pre-child-overlay'>
                                    <h6>Kids Fashion</h6>
                                    <p>Lorem rebum magna amet lorem magna erat diam stet.
                                        Sadips duo stet amet amet ndiam elitr ipsum diam
                                    </p>
                                    <NavLink to='/shop'>
                                        <button className='G-button-color'>Shop Now</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className='L-home-content-child'>
                    <div className='L-home-content-pre-child'>
                        <div className='L-home-content-img' style={{
                            backgroundImage: `url('${offer1}')`
                        }}/>
                        <div className='L-home-content-pre-child-overlay'>
                            <p>SAVE 20%</p>
                            <h6>Special Offer</h6>
                            <NavLink to='/shop'>
                                <button className='G-button-color'>Shop Now</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className='L-home-content-pre-child'>
                        <div className='L-home-content-img' style={{
                            backgroundImage: `url('${offer2}')`
                        }}/>
                        <div className='L-home-content-pre-child-overlay'>
                            <p>SAVE 20%</p>
                            <h6>Special Offer</h6>
                            <NavLink to='/shop'>
                                <button className='G-button-color'>Shop Now</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="L-home-pre-content-wrapper G-flex G-justify-between G-flex-wrap">
                <div className='L-home-pre-content-child'>
                    <p><span className='icon-checkmark'/>Quality Product</p>
                </div>
                <div className='L-home-pre-content-child'>
                    <p><span className='icon-truck'/>Free Shipping</p>
                </div>
                <div className='L-home-pre-content-child'>
                    <p><span className='icon-tab'/>14-Day Return</p>
                </div>
                <div className='L-home-pre-content-child'>
                    <p><span className='icon-phone'/>24/7 Support</p>
                </div>
            </div>
        </div>
    )
}
export default HomeContent