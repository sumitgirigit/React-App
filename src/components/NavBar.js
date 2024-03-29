import React from 'react'
import logo from '../logo_1.png';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#"><img className="logo" src={logo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">How Work</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contacts</a>
                        </li>
                    </ul>    
                </div>
            </div>
        </nav>
    )
}

export default NavBar
