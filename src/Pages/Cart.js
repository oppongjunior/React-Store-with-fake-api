import React, { useEffect } from "react";
import { connect } from "react-redux";
import CartTable from "../Components/CartTable/CartTable";
import { fetchCart } from "../ReduxStore/carts/cartActions";
import Error from "../Components/Errors/Error";

export const Cart = ({ cart, fetchCartFunc }) => {
  useEffect(() => {
    fetchCartFunc();
  }, []);

  
  if (cart.cart.length === 0) {
    return (
      <Error title="No Item in cart"/>
    );
  }
  
  return (
    <div className="container">
      <CartTable cart={cart.cart} cartTotal={cart.cartTotal} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCartFunc: () => dispatch(fetchCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
