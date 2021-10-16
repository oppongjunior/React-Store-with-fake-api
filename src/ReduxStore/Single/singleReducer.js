const initialSingle = {
    loading:false,
    single:"",
    error:""
}

//products reducer
export const singleReducers = (state = initialSingle,action)=>{
    switch(action.type){
        case "FETCH_SINGLE_REQUEST":
            return ({
                ...state,
                loading:true
            })
        case "FETCH_SINGLE_SUCCESS":
            return({
                ...state,
                single:action.payload,
                loading:false
            })
        case "FETCH_SINGLE_FAILURE":
            return({
                ...state,
                error:action.payload,
                loading:false
            })
        default:
            return state
    }
}