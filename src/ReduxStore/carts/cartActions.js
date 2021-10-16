import axios from "axios";
import cartConstants from "../carts/cartActionTypes";

export const requestCart = ()=>({
    type:cartConstants.FETCH_CART_REQUEST,
})

//action fetch success
export const requestCartSuccess = (products)=>({
    type:cartConstants.FETCH_CART_SUCCESS,
    payload:products
})

//action fetch failure
export const requestCartFailure = (error)=>({
    type:cartConstants.FETCH_CART_FAILURE,
    payload:error
})

//action add cart
export const addItemToCart = (item)=>({
    type:cartConstants.ADD_CART,
    payload:item
})
//action add cart
export const removeCart = (id)=>({
    type:cartConstants.REMOVE_CART,
    payload:id
})

//Product action creator
export const fetchCart = ()=>{
    return (dispatch)=>{
        dispatch(requestCart());
        let cart = localStorage.getItem("cart");
        if(cart){
            cart = JSON.parse(cart);
            dispatch(requestCartSuccess(cart))
        }else{
            dispatch(requestCartSuccess([]))
        }
    }
}
