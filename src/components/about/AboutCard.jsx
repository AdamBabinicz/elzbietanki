import React from "react";
import Title from "../common/title/Title";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import "./about.css";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/8.webp" alt="..." />
          </div>
          <div className="right row">
            <Title subtitle="Zgromadzenie" title="Sióstr św. Elżbiety" />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="..." />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <br />
            <p>https://selzbietanki.com</p>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;
