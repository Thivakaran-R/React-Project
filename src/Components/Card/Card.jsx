import React, { useState } from "react";
import "./Card.css";

const Card = () => {

  const [cartProduct, setCartProduct] = useState(null);

  
  const handleAddToCart = (product) => {
    setCartProduct(product);
  };

  return (
    <div>
      <div className="maincard">
        <div className="shoes">
          <img
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
            alt="Shoes"
          />
          <h2>Shoes</h2>
          <p>
            <b>Price: </b>300
          </p>
          <button
            onClick={() =>
              handleAddToCart({
                img: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
                name: "Shoes",
                price: 300,
              })
            }
          >
            Add To Cart
          </button>
        </div>

        <div className="shoes">
          <img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRha2luZyUyMGdvb2QlMjBwcm9kdWN0JTIwcGhvdG9zfGVufDB8MHwwfHx8Mg%3D%3D"
            alt="Camera"
          />
          <h2>Camera</h2>
          <p>
            <b>Price: </b>300
          </p>
          <button
            onClick={() =>
              handleAddToCart({
                img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRha2luZyUyMGdvb2QlMjBwcm9kdWN0JTIwcGhvdG9zfGVufDB8MHwwfHx8Mg%3D%3D",
                name: "Camera",
                price: 300,
              })
            }
          >
            Add To Cart
          </button>
        </div>

        <div className="shoes">
          <img
            src="https://photopro.bg/wp-content/uploads/2020/03/8.jpg"
            alt="Men Watch"
          />
          <h2>Men Watch</h2>
          <p>
            <b>Price: </b>300
          </p>
          <button
            onClick={() =>
              handleAddToCart({
                img: "https://photopro.bg/wp-content/uploads/2020/03/8.jpg",
                name: "Men Watch",
                price: 300,
              })
            }
          >
            Add To Cart
          </button>
        </div>
        
      </div>
      <div className="card">
        {cartProduct ? (
          <div>
            <img src={cartProduct.img} alt={cartProduct.name} />
            <h3>{cartProduct.name}</h3>
            <p>
              <b>Price: </b> {cartProduct.price}
            </p>
          </div>
        ) : (
          <p>No items in cart</p>
        )}
      </div>
    </div>
  );
};

export default Card;
