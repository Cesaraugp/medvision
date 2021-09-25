import React from "react";
import { useSelector } from "react-redux";

const OwnedHouses = ({ personID }) => {
  const houses = useSelector((state) =>
    state.houses.filter((house) => house.ownerID === personID)
  );
  console.log(houses);
  // const houses = useSelector((state) => state.houses);

  return (
    <div>
      {" "}
      {houses &&
        houses.map((house, i) => (
          <div class="card lg:card-side bordered">
            <div class="card-body">
              <h2 class="card-title">HOUSE {i} </h2>
              <p>{house.description}</p>
              <p>{house.address}</p>
              <div class="card-actions">
                <button class="btn btn-primary">Get Started</button>
                <button class="btn btn-ghost">More info</button>
              </div>
            </div>
          </div>
        ))}{" "}
    </div>
  );
};

export default OwnedHouses;
