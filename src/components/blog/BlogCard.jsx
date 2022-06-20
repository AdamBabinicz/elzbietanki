import React from "react";
import { blog } from "../../dummydata";
import { FaUserAlt, FaCalendarAlt, FaComments } from "react-icons/fa";
import "./blog.css";

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => {
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
              <p>{val.desc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogCard;
