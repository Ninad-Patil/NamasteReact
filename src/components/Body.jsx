import React from "react";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Body() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setCardData(json?.data?.cards[2]?.data?.data?.cards);
      //console.log(json?.data?.cards[2]?.data?.data?.cards);
    }
    getData();
  }, []);
  return (
    <>
      <div className="card-container">
        {cardData.map((card) => {
          //always check for return
          return (
            <Link key={card.data.id} to={"/restaurant/" + card.data.id}>
              <Cards card={card} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Body;
