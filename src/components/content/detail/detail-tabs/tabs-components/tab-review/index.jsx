import React, {useState} from 'react'
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import  {addReview} from "../../../../../../redux/reducers/shopReducer";
import ReviewComents from "./review-comments";
import StarCheck from "../../../../../stars/star-check";

const TabReview = ({productById}) => {
    const dispatch = useDispatch()
    const [starsIndex, setStarsIndex] = useState(1)
    const [formData, setFormData] = useState({
        id: Math.random().toString(36).substr(2, 9),
        name: '',
        text: '',
        email: '',
        star: 1,

    })
    const reviews = useSelector((state) => state.ShopReducer.productById.reviews)
    const handleSubmit = (e) => {
        dispatch(addReview(formData))

    }
    const handleText = (e) => {
        setFormData({...formData, text: e.target.value})
    }
    const handleEmail = (e) => {
        setFormData({...formData, email: e.target.value})
    }
    const handleName = (e) => {
        setFormData({...formData, name: e.target.value})
    }
    const changeStarIndex = (index) => {
        setStarsIndex(index)
        setFormData({...formData  , star: starsIndex})
        console.log(starsIndex)
    }

    return (
        <div className='L-tab-product-review G-flex'>
            <div className='L-tab-product-review-child'>
                <h6>{reviews.length} review for "{productById.title}"</h6>
                <div className='L-product-tab-reviews-wrapper'>
                    {reviews.map(user => (
                        <ReviewComents user={user} key={user.id}/>
                    ))}
                </div>
            </div>
            <div className='L-tab-product-review-child' >
                <h6>Leave a review</h6>
                <p>Your email address will not be published. Required fields are marked *
                </p>
                <label className='G-flex'>
                    Your Rating *
                    <div className='L-review-stars'>
                        <StarCheck changeStarIndex={changeStarIndex}/>
                    </div>

                </label>
                <div className='L-tab-review-input'>
                    <label htmlFor="">Your Review *</label>
                    <textarea name="" id="" cols="30" rows="10" onChange={handleText}></textarea>
                </div>
                <div className='L-tab-review-input'>
                    <label htmlFor="">Your Name *</label>
                    <input type="text" onChange={handleName}/>
                </div>
                <div className='L-tab-review-input'>
                    <label htmlFor="">Your Email *</label>
                    <input type="email" onChange={handleEmail}/>
                </div>
                <div className='L-tab-review-btn'>
                    <button className='G-button-color' onClick={handleSubmit}>
                        Leave Your Review
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TabReview