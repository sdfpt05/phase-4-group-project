import React from 'react'

const AddClient = () => {
    return (
        <div className='client-form-container'>
            <form className='client-form'>
                <h2>Add Client</h2>
                <div className='form-group'>
                    <label htmlFor='roll'>Roll No:</label>
                    <input type='text' id='roll' name='roll' />
                </div>
                <div className='form-group'>
                    <label htmlFor='username'>User Name:</label>
                    <input type='text' id='username' name='username' />
                </div>
                <div className='form-group'>
                    <label htmlFor='mobile'>Mobile:</label>
                    <input type='text' id='mobile' name='mobile' />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' id='email' name='email' />
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default AddClient