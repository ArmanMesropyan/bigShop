import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import './style.scss'
import Products from "./products";
import {getAllProductsTC} from "../../../../redux/reducers/shopReducer";
import {NavLink} from "react-router-dom";

const FeaturedProduct = (props) => {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.ShopReducer.products)
    useEffect(() => {
        dispatch(getAllProductsTC())
    }, [])
    return (
        <>
            <div className='L-featured-title G-flex'>
                <div className='L-featured-title-link'>
                    <h6>{props.name}</h6>
                    <NavLink to='/shopAdd' className='L-create-product-link'>
                        <button className='G-button-color'>
                            Create New Product
                        </button>
                    </NavLink>
                </div>

                <div className='L-featured-line'/>
            </div>
            <div className='L-featured-product G-flex G-flex-wrap'>
                {products.slice(0,3).map(item => <Products item={item} key={item._id}/>)}
            </div>
        </>
    )
}
export default FeaturedProduct