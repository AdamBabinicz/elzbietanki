import React from "react";
import { coursesCard } from "../../dummydata";
import { FaCross } from "react-icons/fa";
import "./courses.css";

const CoursesCard = () => {
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val) => {
            return (
              <div className="items box">
                <div className="content flex">
                  <div className="left">
                    <div className="img">
                      <img src={val.cover} alt="..." />
                    </div>
                  </div>
                  <div className="text">
                    <h2>{val.coursesName}</h2>
                    <div className="rate">
                      <FaCross />
                      <label htmlFor="">(ś.p.)</label>
                    </div>
                    <div className="details">
                      {val.courTeacher.map((details) => (
                        <>
                          <div className="box">
                            <div className="dimg">
                              <img src={details.dcover} alt="..." />
                            </div>
                            <div className="para">
                              <h4>{details.name}</h4>
                            </div>
                          </div>
                          <span>{details.totalTime}</span>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="price">
                  <h3>
                    {val.priceAll} / {val.pricePer}
                  </h3>
                  <br />
                  <a href={val.link} target="_blank" rel="noopener noreferrer">
                    <button className="outline-btn">Zobacz</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;

// http://janchrzcicielnysa.pl/parafia/maria-paschalis-jahn
