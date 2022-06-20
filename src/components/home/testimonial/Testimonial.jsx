import React, { isValidElement } from "react";
import Title from "../../common/title/Title";
import { testimonial } from "../../../dummydata";
import { IoIosQuote } from "react-icons/io";
import "./style.css";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial padding">
        <div className="container">
          <Title
            subtitle="Te dziesięć elżbietanek reprezentuje ponad sto sióstr zamordowanych w czasie II wojny światowej przez sowieckich żołnierzy"
            title="Papież uznał męczeństwo 10 elżbietanek zamordowanych na Śląsku"
          />
          <div className="content grid2">
            {testimonial.map((val) => (
              <div className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="..." />
                    <IoIosQuote />
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
