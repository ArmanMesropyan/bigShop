import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import './style.scss'
import Products from "./products";
import {getAllProductsTC} from "../../../../redux/reducers/shopReducer";

const FeaturedProduct = (props) => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.ShopReducer.products)
    useEffect(() => {
        dispatch(getAllProductsTC())
    }, [])
    return (
        <>
            <div className='L-featured-title G-flex'>
                <h6>{props.name}
                </h6>
                <div className='L-featured-line'/>
            </div>
            <div className='L-featured-product G-flex G-flex-wrap'>
                {products.slice(1,7).map(item => <Products item={item} key={item.id}/>)}
            </div>
        </>
    )
}
export default FeaturedProduct