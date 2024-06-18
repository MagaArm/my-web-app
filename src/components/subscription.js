import '../css/form.css'
import { useRef } from 'react';
import { useState } from 'react';
import '../css/flexContainer.css';
import { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router';

const validEmailregex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const validAlphaRegex = new RegExp(/^[A-Za-z]/);

function Subscription() {

    const [formData, setFormData] = useState({
    });
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);
    const phRef = useRef(null);
    const navigate = useNavigate();
    const { setContextFormData } = useContext(AppContext);

    function validate(name, lname, email, address) {
        return {
            name: !validAlphaRegex.test(name),
            lname: !validAlphaRegex.test(lname),
            email: !validEmailregex.test(email),
            address: address?.length === 0,
        };
    }

    const errors = validate(formData.name, formData.lname, formData.email, formData.address);

    const handleNameChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: String(e.target.value),
        });
    }

    const handleLastNameChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: String(e.target.value),
        });
    }

    const handlePhoneChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: String(e.target.value),
        });
    }

    const handleEmailChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: String(e.target.value),
        });
    }

    const handleAddressChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: String(e.target.value),
        });
    }

    const handleSubmit = async (e) => {
        setContextFormData(formData);
        setFormData({
            email: "place@holder.com",
        })
        navigate('/summary');
    }

    return (
        <div class="card-container">
            <div className='card'>
                <h2>Register</h2>
                <form className='sub-form'>
                    <div className="form-group">
                        <label for="name">First Name:</label>
                        <input className={errors.name ? "error" : ""} onChange={handleNameChange} ref={nameRef} type="text" id="name" name="name" required></input>
                        {errors.name && <span style={{ color: 'red', display: 'block', fontSize: '16px' }}> The Name field should have at least 2 alpha characters.</span>}

                    </div>
                    <div className="form-group">
                        <label for="name">Last Name:</label>
                        <input className={errors.name ? "error" : ""} onChange={handleLastNameChange} ref={nameRef} type="text" id="lname" name="lname" required></input>
                        {errors.lname && <span style={{ color: 'red', display: 'block', fontSize: '16px' }}> The Last Name field should have at least 2 alpha characters.</span>}

                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input className={errors.email ? "error" : ""} onChange={handleEmailChange} ref={emailRef} type="email" id="email" name="email" required></input>
                        {errors.email && <span style={{ color: 'red', display: 'block', fontSize: '16px' }}> The Email field should be formatted with valid email.</span>}
                    </div>
                    <div class="form-group">
                        <label for="address">Address:</label>
                        <input className={errors.address ? "error" : ""} onChange={handleAddressChange} ref={addressRef} type="address" id="address" name="address" required></input>
                        {errors.address && <span style={{ color: 'red', display: 'block', fontSize: '16px' }}> The address field should not be empty.</span>}
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone:</label>
                        <input className={errors.phone ? "error" : ""} onChange={handlePhoneChange} ref={phRef} type="phone" id="phone" name="phone"></input>
                    </div>
                    {!errors.email && !errors.name &&
                        <div class="form-group">
                            <button onClick={handleSubmit} type="submit">Submit</button>
                        </div>
                    }
                </form>
            </div>
        </div>
    );
}

export default Subscription;