import React, {useState} from 'react'
import './style.scss'

const Pagination = ({productPerPage, totalProduct, currentPage  , handleChangePage, }) => {


    const portionSize = window.matchMedia("(max-width: 768px)").matches ? 5 :10
    const [portionNumber, setPortionNumber] = useState(1)
    const pageNumbers = []
    const pagesCount = Math.ceil(totalProduct / productPerPage)
    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return (
        <div className="L-pagination G-flex">
            {portionNumber > 1 && <button className='G-button-color' onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}><span className='icon-circle-left'/> </button>}
            {pageNumbers.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(number => (
                <div key={number} className='L-pagination-page'>
                    <span onClick={() => handleChangePage(number)}
                          className={currentPage != number ? 'L-page-link G-button-color' : 'L-active-page' }>
                        {number}
                    </span>
                </div>
            ))}
            {portionCount > portionNumber && <button className='G-button-color' onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}> <span className='icon-circle-right'/> </button>}
        </div>
    )
}
export default Pagination