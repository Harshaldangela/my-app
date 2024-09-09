import React from 'react'
import { Link } from 'react-router-dom'
import {toast} from "react-hot-toast"

const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div>
        <nav>
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <div className="button1">
            { !isLoggedIn &&
                <Link to="/login">
                    <button>Login</button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button>Sign up</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>Log Out</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button>Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar