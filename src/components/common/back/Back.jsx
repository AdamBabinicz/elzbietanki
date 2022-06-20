import React from "react";
import { useLocation } from "react-router-dom";

const Back = ({ title }) => {
  const location = useLocation();

  return (
    <>
      <section className="back">
        <h3>Start / {location.pathname.split("/")[1]}</h3>
        <h2>{title}</h2>
      </section>
      <div className="marigin"></div>
    </>
  );
};

export default Back;
