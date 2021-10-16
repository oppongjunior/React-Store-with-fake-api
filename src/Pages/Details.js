import React,{useEffect} from 'react'
import { connect} from 'react-redux'
import {fetchProduct} from "../ReduxStore/Single/singleActions";
import {useParams} from "react-router-dom"
import Loading from '../Components/Loading/Loading';
import Error from '../Components/Errors/Error';
import SingleProduct from '../Components/SingleProduct/SingleProduct';

let product_id = "";
export const Details = ({fetchProductFunc,single}) => {
    
    product_id = useParams().id;

    useEffect(() => {
        fetchProductFunc()
    },[fetchProductFunc])

    if(single.single === ""){
        return(
            <Loading title="Loading Product...." />
        )
    }
    if(single.loading === true){
        return(
            <Loading title="Loading Product...." />
        )
    }else if(single.error){
        console.log(single.error)
        return(
            <Error title="Opps! server error. Please try later" />
        )
    }
    return(
        <div className="container">
            <SingleProduct product={single.single} />
        </div>
    )

}
const mapStateToProps = (state,ownprops) => {
    return {
        single: state.single
    }
}

const mapDispatchToProps = (dispatch,ownprops) => {
    return {
        fetchProductFunc: () => dispatch(fetchProduct(product_id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Details)

