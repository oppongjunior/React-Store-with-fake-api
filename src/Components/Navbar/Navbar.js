import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { fetchCart } from '../../ReduxStore/carts/cartActions';
import "./Navbar.css";

function Navbar() {
    const cart = useSelector((state)=>state.cart.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCart());
    }, [])
    
    let totalCount = 0;

    cart.forEach(element => {
        totalCount+=element.quantity
    }); 
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
                <div className="container">
                    <Link className="navbar-brand text-uppercase" to="/">Store App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart"><span><i className="fas fa-shopping-cart"></i></span> <b>{totalCount}</b></Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
