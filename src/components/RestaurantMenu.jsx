import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" +
        +resId
    );
    const json = await data.json();
    //console.log(json.data);
    setResInfo(json.data);
  };
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0].card?.card?.info || {};

  return resInfo === null ? (
    <p>shimmer should go here</p>
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines}-{costForTwoMessage}
      </p>
    </div>
  );
}

export default RestaurantMenu;
