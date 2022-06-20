import React from "react";
import { price } from "../../dummydata";
import { GiOpenBook } from "react-icons/gi";

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className="items shadow">
          <h4>{val.name}</h4>
          <h2>
            <span>
              <GiOpenBook />
            </span>
            {val.price}
          </h2>
          <p>{val.desc}</p>
          <a href={val.link} target="_blank">
            <button className="outline-btn">Czytaj</button>
          </a>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
