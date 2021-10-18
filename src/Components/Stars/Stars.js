import React from "react";
import "./Star.css";

function Stars({ rate }) {
  console.log(rate);
  if (rate < 1) {
      return(
    <>
      <span className="fas fa-star-half-alt"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
    </>);
  }
  if (rate === 1) {
      return(
    <>
      <span className="fas fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
    </>);
  }

  if (rate > 1 && rate < 2) {
      return(
    <>
      <span className="fas fa-star"></span>
      <span className="fas fa-star-half-alt"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
    </>);
  }
  if (rate === 2) {
      return(
    <>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
    </>);
  }
  if (rate > 2  && rate < 3) {
      return(
    <>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star-half-alt"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
    </>);
  }
  if (rate === 3) {
      return(
    <>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
    </>);
  }
  if (rate > 3  && rate < 4) {
      return(
    <>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star-half-alt"></span>
      <span className="far fa-star"></span>
    </>);
  }
  if (rate === 4) {
      return(
    <>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="far fa-star"></span>
    </>);
  }
  if (rate > 4  && rate < 5) {
      return(
    <>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star-half-alt"></span>
    </>);
  }
  if (rate === 5) {
      return(
    <>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
    </>);
  }

  return (
    <>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
      <span className="far fa-star"></span>
    </>
  );
}

export default Stars;
