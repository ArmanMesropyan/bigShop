import React from "react";
import {NavLink} from "react-router-dom";
import './style.scss'
const ContactPage = () => {
    const isActive = (isActive) => (!isActive ? "L-nav-link": "L-nav-active-link")

    return (
        <div className='L-Contact Page G-container'>
            <nav className='L-contact-header'>
                <NavLink className={isActive} to='/home'>Home</NavLink>
                <span>/</span>
                <NavLink className={isActive} to='/contact'>Contact</NavLink>
            </nav>
            <div className='L-contact-title G-flex'>
                <h6>Contact Us</h6>
                <div className='L-contact-title-line'/>
            </div>
            <div className='L-contact-wrapper G-flex '>
                <div className='L-contact-child'>
                   <div className='L-contact-child-tools'><input type="text" placeholder='Your Name'/></div>
                   <div className='L-contact-child-tools'><input type="email" placeholder='Your Email'/></div>
                   <div className='L-contact-child-tools'><input type="text" placeholder='Subject'/></div>
                   <div className='L-contact-child-tools'><textarea  cols="30" rows="10" placeholder='Message'></textarea></div>
                   <div className='L-contact-child-tools'><button className='G-button-color'>Send Message</button></div>
                </div>
                <div className='L-contact-child'>
                    <div className='L-contact-pre-child'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72534.90037783927!2d-74.00355738532566!3d40.68052684076233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2s!4v1660037910693!5m2!1sru!2s"
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                    <div className='L-contact-pre-child'>
                        <p><span className='icon-location2'/>123 Street, New York, USA</p>
                        <p><span className='icon-envelop'/>info@example.com</p>
                        <p><span className='icon-phone'/>+012 345 67890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactPage