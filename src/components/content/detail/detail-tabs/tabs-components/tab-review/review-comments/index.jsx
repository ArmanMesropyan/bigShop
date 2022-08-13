import React from "react";
import './style.scss'
import StarPrint from "../../../../../../stars/star-print";
const ReviewComents = ({user}) => {
    return (
        <div className='L-review-comments'>
            <span>{user.name}</span>
                <div className='L-review-star'>
                    <StarPrint star={user.star}/>
                </div>
                <p>{user.text}</p>

        </div>
    )
}
export default ReviewComents