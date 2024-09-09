import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ setIsLoggedIn }) => {  // Destructure setIsLoggedIn from props
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);  // Update state on successful login
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address<sup>*</sup></p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter email id'
                    name="email"
                />
            </label>
            <label>
                <p>Password<sup>*</sup></p>
                <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter password'
                    name="password"
                />
                <span onClick={() => setShowPassword((prev) => !prev)}
                    style={{
                        position: 'absolute',
                        right: '0.75rem',
                        top: '49%',
                        cursor: 'pointer',
                        transform: 'translateY(-50%)',
                        width:'51%',
                        color: '#666'
                    }}
                    >
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
                <Link to="#">
                    <p>Forgot Password</p>
                </Link>
            </label>
            <button type="submit">Sign In</button>
        </form>
    );
};

export default LoginForm;
