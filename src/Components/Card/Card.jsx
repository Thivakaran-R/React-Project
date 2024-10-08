import React, { useState } from "react";
import "./Card.css";

import products from "./products.json"; // Importing the JSON file

const Card = () => {
  return (
    <div>
      <div className="maincard">
        {products.map((product) => (
          <div key={product.id} className="shoes">
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>
              <b>Price: </b>
              {product.price}
            </p>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
