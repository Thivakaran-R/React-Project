import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="maincard">
      <div className="shoes">
        <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" />
        <h2>Shoes</h2>
        <p>
          <b>Price :</b> 300
        </p>
        <button>Add To Card</button>
      </div>
      <div className="shoes">
        <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRha2luZyUyMGdvb2QlMjBwcm9kdWN0JTIwcGhvdG9zfGVufDB8MHwwfHx8Mg%3D%3D" />
        <h2>Camera</h2>
        <p>
          <b>Price :</b> 300
        </p>
        <button>Add To Card</button>
      </div>
      <div className="shoes">
        <img src="https://photopro.bg/wp-content/uploads/2020/03/8.jpg" />
        <h2>Men Watch</h2>
        <p>
          <b>Price :</b> 300
        </p>
        <button>Add To Card</button>
      </div>
    </div>
  );
};

export default Card;
