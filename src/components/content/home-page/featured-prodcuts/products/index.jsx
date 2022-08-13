import React from 'react'
import {useDispatch} from "react-redux";
import {addToCart} from "../../../../../redux/reducers/shopReducer";
import {useHistory} from "react-router-dom";
import StarPrint from "../../../../stars/star-print";
const Products = ({item}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const handleClickToCart = () =>{
        dispatch(addToCart({...item , count:1}))
    }
    const star = Math.floor(Math.random() * (5 - 1 + 1) ) + 1;
    const handleDetail = (id) => {
        history.push('/detail/:id'.replace(':id' , id))
    }
    return (
        <div className='L-featured-item' key={item.id}>
            <div className='L-featured-item-wrapper'>
                <div className='L-featured-overlay'>
                    <div className="L-featured-overlay-icons G-flex">
                        <span className='icon-cart' onClick={handleClickToCart}/>
                        <span className='icon-heart'/>
                        <span className='icon-loop2'/>
                        <span className='icon-search ' onClick={() => handleDetail(item.id)}/>
                    </div>
                </div>
                <div className='L-featured-image'
                     style={{backgroundImage: `url('${item.images[0]}')`}}>

                </div>
            </div>
            <div className='L-featured-desc'>
                <h6>{item.title}</h6>
                <p>${item.price}<sup>${item.price}</sup></p>
                <div className='L-featured-star'>
                    <StarPrint star={star}/>
                </div>
            </div>
        </div>
    )
}
export default Products