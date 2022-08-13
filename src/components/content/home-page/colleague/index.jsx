import React from 'react'
import colleague1 from '../../../../assets/image/colleague/vendor-1.jpg'
import colleague2 from '../../../../assets/image/colleague/vendor-2.jpg'
import colleague3 from '../../../../assets/image/colleague/vendor-3.jpg'
import colleague4 from '../../../../assets/image/colleague/vendor-4.jpg'
import colleague5 from '../../../../assets/image/colleague/vendor-5.jpg'
import colleague6 from '../../../../assets/image/colleague/vendor-6.jpg'
import colleague7 from '../../../../assets/image/colleague/vendor-6.jpg'
import './style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


const Colleague = () => {
    const settings = {
        infinite: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4,
                    centerMode: true,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className=' L-colleague-wrapper'>
            <div className='L-colleague '>
                <Slider {...settings}>
                    <div>
                        <div className='L-colleague-child'>
                            <div className='L-colleague-image'
                                 style={{backgroundImage: `url('${colleague1}')`}}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='L-colleague-child'>
                            <div className='L-colleague-image'
                                 style={{backgroundImage: `url('${colleague2}')`}}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='L-colleague-child'>
                            <div className='L-colleague-image'
                                 style={{backgroundImage: `url('${colleague3}')`}}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='L-colleague-child'>
                            <div className='L-colleague-image'
                                 style={{backgroundImage: `url('${colleague4}')`}}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='L-colleague-child'>
                            <div className='L-colleague-image'
                                 style={{backgroundImage: `url('${colleague5}')`}}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='L-colleague-child'>
                            <div className='L-colleague-image'
                                 style={{backgroundImage: `url('${colleague6}')`}}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='L-colleague-child'>
                            <div className='L-colleague-image'
                                 style={{backgroundImage: `url('${colleague7}')`}}
                            />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
export default Colleague