import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeCart } from "../../ReduxStore/carts/cartActions";
import Stars from "../Stars/Stars";

function SingleProduct({ product }) {
  const dispatch = useDispatch();
  const cartList = useSelector((store) => store.cart.cart);

  const { id, title, price, image, category, rating, description } = product;
  let newTitle = title;
  if (newTitle.length > 22) {
    newTitle = title.substring(0, 22) + "...";
  }

  //get product id from cart
  let cartProductIDs = cartList.map((item) => item.id);

  const addCart = () => {
    let newProduct = { ...product, quantity: 1 };
    let toStore = [...cartList, newProduct];
    localStorage.setItem("cart", JSON.stringify(toStore));
    dispatch(addItemToCart(newProduct));
  };
  const removeItemFromCart = () => {
    let toStore = cartList.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(toStore));
    dispatch(removeCart(id));
  };
  return (
    <div className="row justify-content-center my-5">
      <div className="col-lg-4">
        <div>
          <img
            src={`${product.image}`}
            alt={product.title}
            className="img-fluid"
          />
        </div>
      </div>
      <div className="col-lg-6 my-5">
        <div className="card border-light mb-3">
          <div className="card-header text-center h3 text-uppercase">
            {product.title}
          </div>
          <div className="card-body text-muted">
            <h5 className="card-title text-uppercase">{product.category}</h5>
            <h5 className="card-title text-uppercase text-primary">
              $ {product.price}
            </h5>
            <h6 className="card-title text-uppercase mt-3">Product info</h6>
            <p className="card-text">{product.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span>Reviews: </span>
                <span>{rating.count}</span>
              </div>
              <div>
                <Stars rate={rating.rate} />
              </div>
            </div>
            <div className="card-footer text-center mt-5">
              {cartProductIDs.includes(id) ? (
                <button
                  className="btn btn-dark text-uppercase"
                  onClick={() => removeItemFromCart()}
                >
                  Remove cart
                </button>
              ) : (
                <button
                  className="btn btn-outline-dark text-uppercase"
                  onClick={() => addCart()}
                >
                  add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
