// import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
  return (
    <>
        <nav className="navbar">
            <div className='navbar-container'>
                    <Link to="/" className="navbar-logo">
                        EXPLORE OUTSIDE <FontAwesomeIcon icon={faMountainSun} />
                    </Link>
                    <ul>
                        <li className='nav-item'>
                        <Link to="/hiking" className='nav-links'>
                            Hiking
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to="/backpacking" className='nav-links'>
                            Backpacking
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to="/camping" className='nav-links'>
                            Camping
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to="/contact" className='nav-links'>
                            Contact
                        </Link>
                        </li>
                    </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar