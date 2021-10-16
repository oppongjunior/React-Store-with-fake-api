import React from "react";
import CartTableItem from "./CartTableItem";

function CartTable({ cart }) {

  return (
    <div className="row">
      <div className="col-md-12 my-5">
        <table className="table table-striped table-responsive ">
          <thead className="thead-inverse">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
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
    </div>
  );
}

export default CartTable;
