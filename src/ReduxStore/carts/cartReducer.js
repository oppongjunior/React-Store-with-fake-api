
const initialCart = {
    loading:false,
    addLoading:"false",
    cart:[],
    error:""
}

//products reducer
export const cartReducers = (state = initialCart,action)=>{
    switch(action.type){
        case "FETCH_CART_REQUEST":
            return ({
                ...state,
                loading:true
            })
        case "FETCH_CART_SUCCESS":
            return({
                ...state,
                cart:action.payload,
                loading:false
            })
        case "FETCH_CART_FAILURE":
            return({
                ...state,
                error:action.payload,
                loading:false
            })
        case "ADD_CART":
            return({
                ...state,
                cart:[...state.cart, action.payload]
            }) 
        case "REMOVE_CART":
            return({
                ...state,
                cart:state.cart.filter((item)=>item.id !== action.payload)
            })           
        default:
            return state
    }
}