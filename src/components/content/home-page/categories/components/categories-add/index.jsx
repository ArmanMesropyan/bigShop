import React, {useRef, useState} from 'react'
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import './style.scss'
import {CreateCategoryTC} from "../../../../../../redux/reducers/shopReducer";

const CategoriesAdd = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const fileInput = useRef(null)
    const [formData, setFormData] = useState({
        name: '',
        image: null,
    })
    const imgUpload = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                const img = e.target.result
                setFormData({...formData, image: img})
            };
            reader.readAsDataURL(event.target.files[0]);
        }

    }
    const handleSave = () => {
        dispatch(CreateCategoryTC(formData))
        history.push('/home')
    }
    const handleName = (e) => {
        setFormData({...formData, name: e.target.value})
    }
    return (
        <div className='G-container L-create-category-wrapper'>
            <div className="L-create-category G-flex">
                <h6>Create Category</h6>
                <div className='L-category-add-child'>
                    <label>Category Name</label>
                    <input type="text" placeholder='Category Name' onChange={handleName} value={formData.name}/>
                </div>
                <div className='L-category-add-child'>
                    <label>Image</label>
                    <input className="custom-file-input"
                           type={'file'}
                           accept="image/*"
                           ref={fileInput}
                           onChange={imgUpload}/>
                </div>
                <div className='L-category-add-child'>
                    <button className='G-button-color' onClick={handleSave}>Add +</button>
                </div>
            </div>
        </div>
    )
}
export default CategoriesAdd