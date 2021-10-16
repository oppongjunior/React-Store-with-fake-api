
const initialCart = {
    loading:false,
    addLoading:"false",
    cart:[],
    cartTotal:0,
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
                cartTotal:state.cart.reduce(function (acc, curr) {
                    return acc + curr.quantity * curr.price;
                },0),
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
                cart:[...state.cart, action.payload],
                cartTotal:state.cart.reduce(function (acc, curr) {
                    return acc + curr.quantity * curr.price;
                },0),
            }) 
        case "REMOVE_CART":
            return({
                ...state,
                cart:state.cart.filter((item)=>item.id !== action.payload),
                cartTotal:state.cart.reduce(function (acc, curr) {
                    return acc + curr.quantity * curr.price;
                },0),
            })
        case "INCREASE_QUANTITY":
            return({
                ...state,
                cartTotal:state.cart.reduce(function (acc, curr) {
                    return acc + curr.quantity * curr.price;
                },0),
                cart:state.cart.map((item)=>{
                    if(item.id === action.payload){
                        return {
                            ...item,
                            quantity:item.quantity+1
                        }
                    }
                    return item
                })
            })
        case "DECREASE_QUANTITY":
            return({
                ...state,
                cartTotal:state.cart.reduce(function (acc, curr) {
                    return acc + curr.quantity * curr.price;
                },0),
                cart:state.cart.map((item)=>{
                    if(item.id === action.payload){
                        if(item.quantity <2){
                            return item
                        }
                        return {
                            ...item,
                            quantity:item.quantity-1
                        }
                    }
                    return item
                })
            })        
        default:
            return state
    }
}