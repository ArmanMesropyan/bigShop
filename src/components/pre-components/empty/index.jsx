import React from 'react'
import './style.scss'
const Empty = (props) => {
    return(
        <div className='L-empty'>
            {props.text && <p>{props.text} is empty please create new {props.text} !!</p>}
            {props.cart &&  <p>{props.cart} is empty please add new {props.product} !!</p>}
        </div>
    )
}
export default Empty