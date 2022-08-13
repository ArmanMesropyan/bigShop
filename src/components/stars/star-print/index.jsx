import React, {useEffect, useState} from 'react'

const StarPrint = ({star}) => {
    const stars = Array(5).fill(0)
    const [currentValue, setCurrentValue] = useState(0)
    useEffect(() => {
        setCurrentValue(star)
    }, [star])
    return <div className='L-stars-component'>
        {stars.map((_, index) => {
            return <span
                key={index}
                className={ currentValue > index ? 'icon-star-full' : 'icon-star-empty'}
            />
        })}
    </div>

}
export default StarPrint
