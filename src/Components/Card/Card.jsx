import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div>
      <div className="shoes">
        <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" />
        <h5>Shoes</h5>
        <p>
          <b>Price :</b>300
        </p>
        <button>Add To Card</button>
      </div>
    </div>
  );
};

export default Card;
