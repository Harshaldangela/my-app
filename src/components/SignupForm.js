import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        console.log("Printing account data:");
        console.log(accountData);
        navigate("/dashboard");
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            value={formData.firstName}
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            name="firstName"
                        />
                    </label>
                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            value={formData.lastName}
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            name="lastName"
                        />
                    </label>
                </div>
                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='Enter email Address'
                        name="email"
                    />
                </label>
                <div>
                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <div style={{ position: 'relative' }}>
                            <input
                                required
                                type={showPassword ? "text" : "password"}
                                value={formData.password}
                                onChange={changeHandler}
                                placeholder='Enter password'
                                name="password"
                                style={{ paddingRight: '2rem' }} // Extra space for icon
                            />
                            <span
                                onClick={() => setShowPassword(prev => !prev)}
                                style={{
                                    position: 'absolute',
                                    right: '0.75rem',
                                    top: '45%',
                                    cursor: 'pointer',
                                    transform: 'translateY(-50%)',
                                    width:'51%',
                                    color: '#666'
                                }}
                            >
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </span>
                        </div>
                    </label>
                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <div style={{ position: 'relative' }}>
                            <input
                                required
                                type={showConfirmPassword ? "text" : "password"}
                                value={formData.confirmPassword}
                                onChange={changeHandler}
                                placeholder='Confirm Password'
                                name="confirmPassword"
                                style={{ paddingRight: '2rem' }} // Extra space for icon
                            />
                            <span
                                onClick={() => setShowConfirmPassword(prev => !prev)}
                                style={{
                                    position: 'absolute',
                                    right: '0.75rem',
                                    top: '45%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                    width:'51%',
                                    color: '#666' // Adjust color as needed
                                }}
                            >
                                {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </span>
                        </div>
                    </label>
                </div>
                <button className='btnsub' type="submit">
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default SignupForm;
