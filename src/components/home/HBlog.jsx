import React from "react";
import Title from "../common/title/Title";
import { blog } from "../../dummydata";
import { FaUserAlt, FaCalendarAlt, FaComments } from "react-icons/fa";

const HBlog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Title subtitle="11 czerwca 2022'" title="Beatyfikacja" />
          <div className="grid2">
            {blog.slice(0, 3).map((val) => {
              return (
                <div className="items shadow">
                  <div className="img">
                    <img src={val.cover} alt="..." />
                  </div>
                  <div className="text">
                    <div className="admin flexSB">
                      {/* <span>
                        <FaUserAlt />
                        <label htmlFor="">{val.type}</label>
                      </span> */}
                      <span>
                        <FaCalendarAlt />
                        <label htmlFor="">{val.date}</label>
                      </span>
                      {/* <span>
                        <FaComments />
                        <label htmlFor="">{val.com}</label>
                      </span> */}
                    </div>
                    <h2>{val.title}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HBlog;
