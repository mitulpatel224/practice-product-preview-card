import React from "react";
import mob from "../assets/images/image-product-mobile.jpg";
import desk from "../assets/images/image-product-desktop.jpg";

function Card() {
  return (
    <article className="card-wrapper">
      <div className="card-header">
        <figure>
          <img className="card-img device-sm" src={mob} alt="product-image" />
          <img className="card-img device-lg" src={desk} alt="product-image" />
        </figure>
      </div>
      <div className="card-body">
        <span className="card-label">Perfume</span>
        <h1 className="card-title">Gabrielle Essence Eau De Parfum</h1>
        <p className="card-description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="card-footer">
          <div className="price-wrapper">
            <span className="current-price">$149.99</span>{" "}
            <del className="old-price">$169.99</del>
          </div>
          <button className="call-to-action">Add to Cart</button>
        </div>
      </div>
    </article>
  );
}

export default Card;
