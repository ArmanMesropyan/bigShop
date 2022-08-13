import React, {useState} from 'react'

const StarCheck = ({changeStarIndex}) => {
    const stars = Array(5).fill(0)
    const [currentValue, setCurrentValue] = useState(0)
    const [hoverValue, setHoverValue] = useState(undefined)
    const handleClick = value => {
        setCurrentValue(value)
        changeStarIndex(value)
    }
    const handleMouseOver = value => {
        setHoverValue(value)
    }
    const handleMouseLeave = value => {
        setHoverValue(undefined)
    }
    return <div className='L-stars-component'>
        {stars.map((_, index) => {
            return <span
                key={index}
                className={(hoverValue || currentValue) > index ? 'icon-star-full' : 'icon-star-empty'}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
            />
        })}
        </div>

}
export default StarCheck

