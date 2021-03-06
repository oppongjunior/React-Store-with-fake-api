import React from "react";
import CartTableItem from "./CartTableItem";

function CartTable({ cart, cartTotal }) {

  return (
    <div className="row">
      <div className="col-md-12 my-5">
        <div className="table-responsive">
        <table className="table table-light table-hover table-borderless ">
          <thead className="thead-inverse text-uppercase">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">subtotal</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item,index) => {
              return (
                <CartTableItem key={index} productId = {item.index} {...item} />
              );
            })}

          </tbody>
        </table>
      </div>
      <div className="col-md-4">
        <div className="card mb-3">
          <div className="card-header h3 text-uppercase">Cart Summary</div>
          <div className="card-body text-muted">
            <h5 className="card-title">Cart Total : $ {parseFloat(cartTotal).toFixed(2)} </h5>
            <p className="card-subtitle"></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CartTable;
