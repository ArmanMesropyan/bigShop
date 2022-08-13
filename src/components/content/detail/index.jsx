import React, {useEffect, useState} from 'react'
import {NavLink,  useParams} from "react-router-dom";
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    addToCart,
    decrementProductById,
    getProductTC,
    incrementProductById
} from "../../../redux/reducers/shopReducer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CartIcon from "../home-page/home-content/fixed-cart-icon";
import DetailTabs from "./detail-tabs";
import StarPrint from "../../stars/star-print";

const Detail = () => {
    const [productById, setProductById] = useState(null)
    const dispatch = useDispatch()
    const params = useParams()
    const product = useSelector((state) => state.ShopReducer.productById)
    const isActive = (isActive) => (!isActive ? "L-nav-link" : "L-nav-active-link")


    useEffect(() => {
        dispatch(getProductTC(params.id))
    }, [])

    useEffect(() => {
        if (product) {
            setProductById({...product})
        }
    }, [product])

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'

    };
    const handleClickToCart = () => {
        dispatch(addToCart({...productById}))
    }
    const handleClickIncrement = (item) => {
        dispatch(incrementProductById(item))
    }
    const handleClickDecrement = (item) => {
        dispatch(decrementProductById(item))
    }
    const star = Math.floor(Math.random() * (5 - 1 + 1) ) + 1;
    const reviews = useSelector((state) => state.ShopReducer.productById?.reviews)
    return (
        <div className='L-shop-detail G-container'>
            <CartIcon/>
            <nav className='L-detail-header'>
                <NavLink className={isActive} to='/home'>Home</NavLink>
                <span>/</span>
                <NavLink className={isActive} to='/shop'>Shop</NavLink>
                <span>/</span>
                <NavLink className={isActive} to='/detail'>Shop Detail</NavLink>
            </nav>
            {productById && <div className='L-shop-detail-wrapper '>
                <div className="L-shop-detail-product G-flex G-justify-between" key={productById.id}>
                    <div className="L-shop-detail-child">
                        <Slider {...settings}>
                            <div><img className='L-shop-detail-product-image' src={productById.images[0]} alt="img"/>
                            </div>
                            <div><img className='L-shop-detail-product-image' src={productById.images[1]} alt="img"/>
                            </div>
                            <div><img className='L-shop-detail-product-image' src={productById.images[2]} alt="img"/>
                            </div>
                        </Slider>
                    </div>
                    <div className="L-shop-detail-child">
                        <h6 className='L-product-detail-title'>{productById.title}</h6>
                        <div className='L-shop-detail-stars G-flex'>
                            <StarPrint star={star}/>
                            <sub className='L-reviews-star'>({reviews && reviews.length} reviews)</sub>
                        </div>
                        <p className='L-product-detail-price'>${productById.price}</p>
                        <p className='L-product-detail-desc'>{productById.description}</p>
                        <div className='L-product-detail-add-btn G-flex'>
                            <div className='L-product-detail-add-or-del G-flex'>
                                <span className='icon-minus G-button-color'
                                      onClick={() => handleClickDecrement(productById)}/>
                                <p>{productById.count}</p>
                                <span className='icon-plus G-button-color'
                                      onClick={() => handleClickIncrement(productById)}/>
                            </div>
                            <button className='G-button-color' onClick={handleClickToCart}>
                                <span className='icon-cart'/>
                                Add To Cart
                            </button>
                        </div>
                        <div className="L-detail-share-on G-flex">
                            <p>Share on:</p>
                            <p>
                                <span className='icon-pinterest'/>
                                <span className='icon-facebook'/>
                                <span className='icon-twitter'/>
                                <span className='icon-linkedin2'/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='L-info-detail-tab-menu'>
                    <DetailTabs productById={productById}/>
                </div>
            </div>}

        </div>
    )
}
export default Detail