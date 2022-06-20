import React from "react";
import Title from "../common/title/Title";
import { online } from "../../dummydata";

const OnlineCourses = () => {
  return (
    <div>
      <section className="online">
        <div className="container">
          <Title subtitle="świadectwa" title="męczeństwa sióstr" />
          <div className="content grid3">
            {online.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt="..." />
                  <img src={val.hoverCover} alt="..." className="show" />
                </div>
                <h2>{val.courseName}</h2>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineCourses;
