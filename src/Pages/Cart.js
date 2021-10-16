import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import CartTable from '../Components/CartTable/CartTable';
import { fetchCart } from '../ReduxStore/carts/cartActions';


export const Cart = ({cart, fetchCartFunc}) => {
    useEffect(() => {
        fetchCartFunc()
    }, [])

    return (
        <div className="container">
            <CartTable cart={cart.cart} />    
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCartFunc: () => dispatch(fetchCart())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
