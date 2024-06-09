import '../css/form.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/flexContainer.css';

const validEmailregex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const validAlphaRegex = new RegExp(/^[A-Za-z]/);

function Subscription() {

    const [formData, setFormData] = useState({});

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);
    const phRef = useRef(null);

    const submitBtnRef = useRef(null);
    const [disableSubmit, setDisabledSubmit] = useState(true)

    function validate(name, email, address) {
        console.log("name in validate: ", name)
        // true means invalid, so our conditions got reversed
        return {
            name: !validAlphaRegex.test(name),
            email: !validEmailregex.test(email),
            address: address?.length === 0,
        };
    }

    const errors = validate(formData.name, formData.email, formData.address);

    const handleNameChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: String(e.target.value),
        });
    }

    const handleEmailChange = (e) => {
        console.log("event data: ", e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: String(e.target.value),
        });
    }

    const handleAddressChange = (e) => {
        console.log("event data: ", e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: String(e.target.value),
        });
    }

    const handleSubmit = (e) => {
        console.log("form data on submit: ", formData)
        localStorage.setItem('form-data', formData);
        window.location.pathname = '/summary'
    }

    useEffect(() => {
        const element = nameRef.current;
        console.log(element);
        console.log(element.id);
    }, []);

    return (
        <div class="card-container">
            <div className='card'>
                <h2>Register</h2>
                <form className='sub-form'>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input className={errors.name ? "error" : ""} onChange={handleNameChange} ref={nameRef} type="text" id="name" name="name" required></input>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input className={errors.email ? "error" : ""} onChange={handleEmailChange} ref={emailRef} type="email" id="email" name="email" required></input>
                    </div>
                    <div class="form-group">
                        <label for="address">Address:</label>
                        <input className={errors.address ? "error" : ""} onChange={handleAddressChange} ref={addressRef} type="address" id="address" name="address" required></input>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone:</label>
                        <input className={errors.phone ? "error" : ""} onChange={handleAddressChange} ref={phRef} type="phone" id="phone" name="phone" required></input>
                    </div>
                    <div class="form-group">
                        <button onClick={handleSubmit}  type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Subscription;