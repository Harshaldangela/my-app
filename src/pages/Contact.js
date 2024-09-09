import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import '../index.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const changeHandler = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        toast.success("Your message has been sent!");
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>If you have any questions or need assistance, please feel free to reach out to us. We are here to help!</p>

            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>
                        <p>Name<sup>*</sup></p>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={changeHandler}
                            placeholder="Enter your name"
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <p>Email<sup>*</sup></p>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                            placeholder="Enter your email"
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <p>Message<sup>*</sup></p>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={changeHandler}
                            placeholder="Enter your message"
                            required
                            rows="5"
                        />
                    </label>
                </div>
                <button type="submit" className="submit-button">
                    Send Message
                </button>
            </form>

            <div className="contact-info">
                <h2>Contact Information</h2>
                <p><strong>Email:</strong> support@journeybazaar.com</p>
                <p><strong>Phone:</strong> +975145</p>
                <p><strong>Address:</strong> 123 Travel Lane, Suite 100, Kandivali, India</p>
            </div>
        </div>
    );
}

export default Contact;
