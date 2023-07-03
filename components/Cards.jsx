import React from "react";
import { useState, useEffect } from "react";
function Cards({ card }) {
  return (
    <div>
      <div className="card">
        <img
          className="card-img"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/" +
            card.data.cloudinaryImageId
          }
          alt=""
        />
        {console.log(card)}
        <div className="card-info">
          <span>{card.data.name}</span>
          <span>{card.data.address}</span>
          Rating: <span>{card.data.avgRating}</span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
