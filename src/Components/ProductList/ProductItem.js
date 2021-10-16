import React from 'react';
import {Link} from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';

import "./ProductItem.css";
import { addItemToCart,removeCart } from '../../ReduxStore/carts/cartActions';


function ProductItem({product}) {
    const dispatch = useDispatch();
    const cartList = useSelector(store => store.cart.cart);

    const {id, title,price,image,category,rating, description} = product;
    let newTitle = title;

    if(newTitle.length> 22){
        newTitle = title.substring(0,22)+"...";
    }

    //get product id from cart
    let cartProductIDs = cartList.map((item)=>item.id);

    const addCart = ()=>{
        let newProduct = {...product,quantity:1};
        let toStore = [...cartList,newProduct];
        localStorage.setItem("cart", JSON.stringify(toStore) )
        dispatch(addItemToCart(newProduct));
    }

    const removeItemFromCart = ()=>{
        let toStore = cartList.filter((item)=>item.id !== id);
        localStorage.setItem("cart", JSON.stringify(toStore) )
        dispatch(removeCart(id))
    }
    return (
        <div className="col-md-6 col-lg-3 my-3">
            <div className="card">
                <Link to={`/details/${id}`} className="p-5"><img src={image} className="card-img-top img-fluid product-image" alt="..."/></Link>
                <div className="card-body">
                    <Link to="/" className="text-muted"><h5 className="card-title">{newTitle}</h5></Link>
                    <h6 className="card-subtitle">$ {price}</h6>
                </div>
                <div className="card-footer text-center">
                    {
                        cartProductIDs.includes(id)?(
                        <button className="btn btn-dark text-uppercase" onClick={()=>removeItemFromCart()} >Remove Cart</button>
                        ):
                        (
                            <button className="btn btn-outline-dark text-uppercase" onClick={()=>addCart()} >Add to Cart</button>
                        )
                    }
                   
                </div>
            </div>
        </div>
    )
}


export default ProductItem;
