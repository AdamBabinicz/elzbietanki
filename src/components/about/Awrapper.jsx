import React from "react";
import { awrapper } from "../../dummydata";

const Awrapper = () => {
  return (
    <>
      <section className="awrapper">
        <div className="container grid2">
          {awrapper.map((val) => (
            <div className="box flex">
              <div className="img">
                <img src={val.cover} alt="..." />
              </div>
              <div className="text">
                <h2>{val.data}</h2>
                <h3>{val.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Awrapper;
