import React, { useState } from "react";
import Title from "../common/title/Title";
import { faq } from "../../dummydata";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [click, setClick] = useState(false);
  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };

  return (
    <>
      <section className="faq">
        <Title subtitle="Ofiara życia" title="elżbietanek" />
        <div className="container">
          {faq.map((val, index) => (
            <div className="box">
              <button
                className="accordion"
                onClick={() => toggle(index)}
                key={index}
              >
                <h2>{val.title}</h2>
                <span>
                  {click === index ? <FaChevronDown /> : <FaChevronUp />}
                </span>
              </button>
              {click === index ? (
                <div className="text">
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
