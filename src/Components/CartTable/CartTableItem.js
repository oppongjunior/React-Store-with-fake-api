import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProduct, } from "../../ReduxStore/Single/singleActions.js";
import {decreaseQuantity, increaseQuantity, removeCart} from "../../ReduxStore/carts/cartActions"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./CartTable.css";


export const CartTableItem = (props) => {
  useEffect(() => {
    props.fetchProduct();
  }, []);
  
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cart.cart)

  const removeItemFromCart = ()=>{
      let toStore = cartList.filter((item)=>item.id !== props.id);
      localStorage.setItem("cart", JSON.stringify(toStore) )
    dispatch(removeCart(props.id))
  }
  const increaseCartQuantity = ()=>{
        let toStore = cartList.map((item)=>{
          if(item.id === props.id){
              return {
                  ...item,
                  quantity:item.quantity+1
              }
          }
          return item
      });
      localStorage.setItem("cart", JSON.stringify(toStore) )
      dispatch(increaseQuantity(props.id))
  }
  const decreaseCartQuantity = ()=>{
        let toStore = cartList.map((item)=>{
          if(item.id === props.id){
              return {
                  ...item,
                  quantity:item.quantity-1
              }
          }
          return item
      });
      localStorage.setItem("cart", JSON.stringify(toStore) )
      dispatch(decreaseQuantity(props.id))
  }
  let subTotal = props.price * props.quantity;
  
  return (
    <tr>
      <td>
        <img src={`${props.image}`} alt="" className="cart-image" />
      </td>
      <td><h6 className="h6 table-name-text">{props.title}</h6></td>
      <td><h6 className="h6 table-name-price text-primary">$ {parseFloat(props.price).toFixed(2)}</h6></td>
      <td>
        <div className="d-flex align-items-center">
          <button className="btn btn-light" onClick={()=>increaseCartQuantity()}>+</button>
          <b className="mx-3">{props.quantity}</b>
          <button className="btn btn-light" onClick={()=>decreaseCartQuantity()}>-</button>
        </div>
      </td>
      <td className="text-primary">$ {parseFloat(subTotal).toFixed(2)}</td>
      <td>
        <button className="btn btn-danger" onClick={()=>removeItemFromCart()}>
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.single,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //console.log(ownProps)
  return {
    fetchProduct: () => dispatch(fetchProduct(ownProps.id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartTableItem);
