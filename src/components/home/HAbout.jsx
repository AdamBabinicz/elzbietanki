import React from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Title from "../common/title/Title";
import "../allcourses/courses.css";
import { coursesCard } from "../../dummydata";

const HAbout = () => {
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Title
            subtitle="Marcello Semeraro, Prefekt Kongregacji Spraw Kanonizacyjnych"
            title="Męczeństwo dziesięciu elżbietanek przywodzi na myśl przemoc, okrucieństwo i nienawiść, które teraz dotknęły Ukrainę"
          />

          <div className="coursesCard">
            {/* copy code form  coursesCard */}
            <div className="grid2">
              {coursesCard.slice(0, 3).map((val) => (
                <div className="items">
                  <div className="content ">
                    <div className="left">
                      <div className="img">
                        <img src={val.cover} alt="..." />
                      </div>
                    </div>
                    <div className="text">
                      <h2>{val.coursesName}</h2>
                      <div className="rate">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <label htmlFor="">(5.0)</label>
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
                  </div>
                  <button className="outline-btn">Czytaj</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  );
};

export default HAbout;
