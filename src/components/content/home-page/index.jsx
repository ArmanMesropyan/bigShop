import React from 'react'
import HomeContent from "./home-content";
import Categories from "./categories";
import FeaturedProduct from "./featured-prodcuts";
import AsideContent from "./aside-content";
import Colleague from "./colleague";

import './style.scss'
import CartIcon from "./home-content/fixed-cart-icon";

const HomePage = () => {
    return (
        <div className='G-container'>
            <CartIcon/>
            <HomeContent/>
            <Categories/>
            <FeaturedProduct name={'FEATURED PRODUCTS'}/>
            <AsideContent/>
            <FeaturedProduct name={'RECENT PRODUCTS'}/>
            <Colleague/>
        </div>
    )
}
export default HomePage