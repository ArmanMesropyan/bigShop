import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import Products from "../home-page/featured-prodcuts/products";
import CartIcon from "../home-page/home-content/fixed-cart-icon";
import Pagination from "./utils/pagination";
import {getAllProductsTC, setCurrentPage} from "../../../redux/reducers/shopReducer";
import Empty from "../../pre-components/empty";


const ShopPage = () => {
    const dispatch = useDispatch()
    const [selectedValue, setSelectedValue] = useState(null)
    const isActive = (isActive) => (!isActive ? "L-nav-link" : "L-nav-active-link")
    const [styleShop, setStyleShop] = useState('L-shop-products')
    const products = useSelector((state) => state.ShopReducer.products)
    const currentPage = useSelector((state) => state.ShopReducer.currentPage)
    const per_page = useSelector((state) => state.ShopReducer.postsPerPage)
    const indexOfLastProduct = currentPage * per_page;
    const indexOfFirstProduct = indexOfLastProduct - per_page;
    const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct)
    const handleChangePage = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber))
    }
    useEffect(() => {
        dispatch(getAllProductsTC())
    }, [])
    console.log(products)
    return (
        <div className='L-shop-page G-container'>
            <CartIcon/>
            <nav className='L-shop-header'>
                <NavLink className={isActive} to='/home'>Home</NavLink>
                <span>/</span>
                <NavLink className={isActive} to='/shop'>Shop</NavLink>
                <span>/</span>
                <NavLink className={isActive} to='/shop'>Shop List</NavLink>
            </nav>
            <div className="L-shop-wrapper G-flex G-justify-between">
                <div className="L-shop-child">
                    <div className="L-shop-sort-child">
                        <div className='L-shop-sort-title G-flex'>
                            <h6>
                                FILTER BY PRICE
                            </h6>
                            <div className='L-shop-sort-line'/>
                        </div>
                        <div className="L-shop-sort-content">
                            <ul className="L-shop-sort-list">
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    All Price</span><span>1000</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    $0 - $100</span><span>150</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    $100 - $200</span><span>295</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    $200 - $300</span><span>246</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    $300 - $400</span><span>145</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    $400 - $500</span><span>168</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="L-shop-sort-child">
                        <div className='L-shop-sort-title G-flex'>
                            <h6>
                                FILTER BY COLOR
                            </h6>
                            <div className='L-shop-sort-line'/>
                        </div>
                        <div className="L-shop-sort-content">
                            <ul className="L-shop-sort-list">
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    All Color</span><span>1000</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    Black</span><span>150</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    White</span><span>295</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    Blue</span><span>246</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    Red</span><span>145</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    Green</span><span>168</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="L-shop-sort-child">
                        <div className='L-shop-sort-title G-flex'>
                            <h6>
                                FILTER BY SIZE
                            </h6>
                            <div className='L-shop-sort-line'/>
                        </div>
                        <div className="L-shop-sort-content">
                            <ul className="L-shop-sort-list">
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    All Size</span><span>1000</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    XS</span><span>150</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    S</span><span>295</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    M</span><span>246</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    L</span><span>145</span></li>
                                <li className="L-shop-sort-row">
                                    <span>
                                    <input type="checkbox" name="" id=""/>
                                    XL</span><span>168</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="L-shop-child ">
                    <div className='L-shop-utils G-flex G-justify-between'>
                        <div className="L-shop-utils-child G-flex">
                            <div className='L-shop-utils-pre-child'>
                                <span className='icon-th-large' onClick={() => setStyleShop('L-shop-products')}/>
                            </div>
                            <div className='L-shop-utils-pre-child'>
                                <span className='icon-th-menu'
                                      onClick={() => setStyleShop('L-shop-products-horizontal')}/>
                            </div>
                        </div>
                        <div className='L-add-product'>
                            <NavLink to='/shopAdd'>
                                <button className='G-button-color'>
                                    +
                                </button>
                            </NavLink>
                        </div>

                    </div>
                    {currentProduct.length === 0
                        ? <Empty text={'Shop'}/>
                        : <div className={styleShop + ' ' + 'G-flex G-flex-wrap'}>
                        {currentProduct.map(item => <Products item={item} key={item._id}/>)}
                    </div>}
                    <Pagination
                        currentPage={currentPage}
                        productPerPage={per_page}
                        totalProduct={products.length}
                        handleChangePage={handleChangePage}/>
                </div>
            </div>
        </div>
    )
}
export default ShopPage