import React from 'react'
import CategoryForm from './CategoryForm'

const Modal = ({ closeModal, value, setValue, handleSubmit, title, btnText }) => {
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button onClick={() => closeModal(false)}> X </button>
                <div className='modalTitle'>
                    <h1>{title}</h1>
                </div>
                <div className='modalBody'>
                    <CategoryForm value={value} setValue={setValue} handleSubmit={handleSubmit} />
                </div>
                <div className='modalFooter'>
                    <button onClick={() => closeModal(false)} className='btn btn-primary ms-2'>{btnText}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal