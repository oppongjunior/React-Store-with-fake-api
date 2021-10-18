import React,{useEffect} from 'react'
import { fetchProducts } from '../ReduxStore/products/productActions'
import { connect } from 'react-redux';
import Loading from '../Components/Loading/Loading';
import Error from '../Components/Errors/Error';
import ProductList from '../Components/ProductList/ProductList';
import { useParams } from 'react-router';


function Home({products, fetchProducts}) {
    const searchWord = useParams().key;
    useEffect(() => {
        fetchProducts();
    }, [])

    if(products.loading === true){
        return(
            <Loading title="Loading Products...." />
        )
    }else if(products.error){
        console.log(products.error)
        return(
            <Error title="Opps! server error. Please try later" />
        )
    }
    else if(products.products.length ===  0){
        return (
            <Error title="Opps! no products found" />
        )
    }
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div>
                        <h4 className="display-4 text-center"><b>Result for {searchWord}</b> Products</h4>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <ProductList products={products.products} />
            </div>
        </div>
    )
    
}
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProducts : () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
