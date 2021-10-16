import productConstants from "./productionActionTypes";
import axios from "axios";

export const requestProducts = ()=>({
    type:productConstants.FETCH_PRODUCT_REQUEST,
    
})

//action fetch success
export const requestSuccess = (products)=>({
    type:productConstants.FETCH_PRODUCT_SUCCESS,
    payload:products
})

//action fetch failure
export const requestFailure = (error)=>({
    type:productConstants.FETCH_PRODUCT_FAILURE,
    payload:error
})

//Product action creator
export const fetchProducts = ()=>{
    return (dispatch)=>{
        dispatch(requestProducts());
        axios.get("https://fakestoreapi.com/products")
        .then(function (response) {
            dispatch(requestSuccess(response.data))
        })
        .catch(function (error) {
            dispatch(requestFailure(error))
        })
    }
}