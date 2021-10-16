import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../ReduxStore/Single/singleActions.js";

export const CartTableItem = (props) => {
  useEffect(() => {
    props.fetchProduct();
  }, []);
  
  return (
    <tr>
      <td>
        <img src={`${props.image}`} alt="" className="img-fluid w-25" />
      </td>
      <td>{props.title}</td>
      <td>$ {props.price}</td>
      <td>
        <div className="d-flex align-items-center">
          <button className="btn btn-light">+</button>
          <b className="mx-3">{props.quantity}</b>
          <button className="btn btn-light">-</button>
        </div>
      </td>
      <td>
        <button className="btn btn-danger">
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
