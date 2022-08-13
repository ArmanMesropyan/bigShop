import React, {useState} from 'react'
import './style.scss'
import TabDescription from "./tabs-components/tab-description";
import TabInformation from "./tabs-components/tab-information";
import TabReview from "./tabs-components/tab-review";
import {useSelector} from "react-redux";
const DetailTabs = ({productById}) => {
    const [changeTabs , setChangeTabs] = useState(1)
    const changeTab = (index) => {
        setChangeTabs(index)
    }
    const reviews = useSelector((state) => state.ShopReducer.productById.reviews)
    return(
        <div className='L-info-detail-tabs-wrapper'>
            <div className='L-info-detail-tabs-title G-flex'>
                <div className={changeTabs === 1 ?'L-info-tab-title-child-active' :'L-info-tab-title-child'}
                     onClick={() => changeTab(1)}>Description</div>
                <div className={changeTabs === 2 ?'L-info-tab-title-child-active' :'L-info-tab-title-child'}
                     onClick={() => changeTab(2)}>Information</div>
                <div className={changeTabs === 3 ?'L-info-tab-title-child-active' :'L-info-tab-title-child'}
                     onClick={() => changeTab(3)}>Reviews ({reviews.length})</div>
            </div>
            <div className='L-info-detail-tabs-content'>
                <div className={changeTabs === 1 ?'L-info-detail-tab-content-child-active' :'L-info-detail-tab-content-child'}
                ><TabDescription productById={productById}/></div>
                <div className={changeTabs === 2 ?'L-info-detail-tab-content-child-active' :'L-info-detail-tab-content-child'}
                ><TabInformation/></div>
                <div className={changeTabs === 3 ?'L-info-detail-tab-content-child-active' :'L-info-detail-tab-content-child'}
                ><TabReview productById={productById}/></div>
            </div>
        </div>
    )
}
export default  DetailTabs