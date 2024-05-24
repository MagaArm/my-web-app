import '../css/form.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/flexContainer.css';

function Subscription() {

    const [formData, setFormData] = useState({});

    const nameRef = useRef(null);

    const handleDataInput = (e) => {
        console.log("event data: ", e)
        setFormData({
            ...formData,
            [e.target.name]: String(e.target.value),
        });
    }

    const handleSubmit = (e) => {

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
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input onChange={handleDataInput} ref={nameRef} type="text" id="name" name="name" required></input>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
                <div class="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Subscription;