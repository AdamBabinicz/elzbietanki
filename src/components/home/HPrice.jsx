import React from "react";
import PriceCard from "../pricing/PriceCard";
import Title from "../common/title/Title";

const HPrice = () => {
  return (
    <>
      <section className="hprice padding container">
        <Title
          subtitle="(Ap 3, 20)"
          title="jeśli kto posłyszy mój głos i drzwi otworzy, wejdę do niego i będę z nim wieczerzał, a on ze mną"
        />
        <div className="price container grid">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default HPrice;
