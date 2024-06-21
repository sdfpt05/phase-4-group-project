import React from 'react'
import { Link } from "react-router-dom"
import './css/Navbar.css'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <Link to='/' className='navbar-brand'>BookStore</Link>
            </div>
            <div className='navbar-right'>
                <Link to='/books' className='navbar-link'>Books</Link>
                <Link to='/addbook' className='navbar-link'>Add Book</Link>
                <Link to='/addclient' className='navbar-link'>Add Client</Link>
                <Link to='/dashboard' className='navbar-link'>Dashboard</Link>
                <Link to='/Signup' className='navbar-link'>Signup</Link>
                <Link to='/Login' className='navbar-link'>Login</Link>
            </div>
        </nav>
    )
}

export default Navbar