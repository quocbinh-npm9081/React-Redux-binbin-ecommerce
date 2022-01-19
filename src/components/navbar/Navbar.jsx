import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';



const Navbar = () => {

    const state = useSelector((state) => state.handleCart)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
                <Link className="navbar-brand text-uppercase fw-bold fs-4" to="/home">binbin colection</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="buttons d-flex">
                        <Link className="btn btn-outline-dark " to="/login">
                            <span>
                                Login
                            </span>
                        </Link>
                        <Link className="btn btn-outline-dark ms-2" to="/register">
                            <span>
                                Register
                            </span>
                        </Link>
                        <Link className="d-flex align-items-center btn btn-outline-dark ms-2" to="/cart">
                            <i className='bx bx-cart-alt'></i>
                            <span>
                                ({state.length})
                            </span>
                        </Link>

                    </div>
                </div>

            </nav >
        </div >
    );
}

export default Navbar;
