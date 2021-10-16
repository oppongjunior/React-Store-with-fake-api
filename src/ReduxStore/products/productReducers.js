const initialProduct = {
    loading:false,
    products:[],
    error:""
}

//products reducer
export const productReducers = (state = initialProduct,action)=>{
    switch(action.type){
        case "FETCH_PRODUCT_REQUEST":
            return ({
                ...state,
                loading:true
            })
        case "FETCH_PRODUCT_SUCCESS":
            return({
                ...state,
                products:action.payload,
                loading:false
            })
        case "FETCH_PRODUCT_FAILURE":
            return({
                ...state,
                error:action.payload,
                loading:false
            })
        default:
            return state
    }
}