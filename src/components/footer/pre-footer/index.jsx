import React from 'react';
import pay from '../../../assets/image/payments.png'
import './style.scss'
const PreFooter = () => {
    return (
        <>
            <hr/>
            <div className='L-pre-footer G-flex G-justify-between G-flex-wrap'>
                <div className='L-pre-footer-child'>
                    <div className='L-pre-footer-title'>
                        © <span>Domain</span> . All Rights Reserved. Designed by <span>HTML Codex</span>
                    </div>
                </div>
                <div className='L-pre-footer-child'>
                    <div
                        className='L-pre-footer-pay'
                        style={{
                            backgroundImage: `url('${pay}')`
                        }}/>
                </div>
            </div>
        </>
    )
}
export default PreFooter