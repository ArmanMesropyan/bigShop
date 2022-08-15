import React, { useRef, useState} from 'react'
import './style.scss'
import {useDispatch} from "react-redux";
import {CreateProductTC} from "../../../../../redux/reducers/shopReducer";
import {useHistory} from "react-router-dom";


const CreateProduct = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const fileInput = useRef(null)
    const [formData, setFormData] = useState({
        title:'',
        price:'',
        image:null,
        description:''
    })


    const imgUpload = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                const img = e.target.result
                setFormData({...formData , image:img })
            };
            reader.readAsDataURL(event.target.files[0]);
        }

    }
    const handleSave = () => {
        dispatch(CreateProductTC(formData))
        history.push('/shop')
    }
    const handleName = (e) => {
        setFormData({...formData , title: e.target.value})
    }
    const handlePrice = (e) => {
        setFormData({...formData ,price:e.target.value })
    }
    const handleDesc = (e) => {
        setFormData({...formData ,description: e.target.value })
    }

    return (
        <div className='G-container L-create-product-wrapper'>
            <div className="L-create-product G-flex">
                <h6>Create Product</h6>
                <div className='L-product-add-child'>
                    <label> Name</label>
                    <input type="text" placeholder='Title' onChange={handleName} value={formData.title}/>
                </div>
                <div className='L-product-add-child'>
                    <label>Price</label>
                    <input type="number"  placeholder='Price' onChange={handlePrice} value={formData.price}/>
                </div>
                <div className='L-product-add-child'>
                    <label>Description</label>
                    <textarea name="" id="" cols="30" rows="10" onChange={handleDesc} value={formData.desc}/>
                </div>
                <div className='L-product-add-child'>
                    <label>Image</label>
                    <input className="custom-file-input"
                           type={'file'}
                           accept="image/*"
                           ref={fileInput}
                           onChange={imgUpload}/>
                </div>
                <div className='L-product-add-child'>
                    <button className='G-button-color' onClick={handleSave}>Add +</button>
                </div>
            </div>
        </div>
    )
}
export default CreateProduct