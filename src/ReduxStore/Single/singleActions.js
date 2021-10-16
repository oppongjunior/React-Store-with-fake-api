import singleConstants from "./singleConstant";
import axios from "axios";

export const requestProduct = ()=>({
    type:singleConstants.FETCH_SINGLE_REQUEST,
})

//action fetch success
export const requestSuccess = (products)=>({
    type:singleConstants.FETCH_SINGLE_SUCCESS,
    payload:products
})

//action fetch failure
export const requestFailure = (error)=>({
    type:singleConstants.FETCH_SINGLE_FAILURE,
    payload:error
})

//Product action creator
export const fetchProduct = (id)=>{
    return (dispatch)=>{
        dispatch(requestProduct());
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(function (response) {
            dispatch(requestSuccess(response.data))
        })
        .catch(function (error) {
            dispatch(requestFailure(error))
        })
    }
}