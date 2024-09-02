import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
        <div>
            {
                <Link to="/login">
                    <button>Login</button>
                </Link>
            }
            {
                <Link to="/signup">
                    <button>Sign up</button>
                </Link>
            }
            {
                <Link to="/">
                    <button>Log Out</button>
                </Link>
            }
            {
                <Link to="/dashboard">
                    <button>Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar