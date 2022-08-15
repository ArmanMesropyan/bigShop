import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import './style.scss'
import {getAllCategoriesTC} from "../../../../redux/reducers/shopReducer";
import {NavLink} from "react-router-dom";

const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.ShopReducer.categories)
    useEffect(() => {
        dispatch(getAllCategoriesTC())
    } , [])
    return (
        <>
            <div className='L-category-title G-flex'>
                <div className='L-categories-link'>
                    <h6>CATEGORIES </h6>
                    <NavLink to='/categoryAdd' className='L-create-categories-link'>
                        <button className='G-button-color'>
                            Create New Category
                        </button>
                    </NavLink>
                </div>

                <div className='L-category-line'/>
            </div>
            <div className="L-category-wrapper G-flex G-flex-wrap">
                {categories.map(item => {
                    return (
                        <div className='L-category-item G-flex ' key={item._id}>
                            <div className='L-category-image'
                                 style={{
                                     backgroundImage: `url('${item.image}')`
                                 }}
                            />
                            <div className='L-category-item-desc'>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Categories