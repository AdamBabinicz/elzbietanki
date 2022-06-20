import React from "react";
import "./hero.css";
import { BsArrowRight } from "react-icons/bs";
import Title from "../../common/title/Title";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title subtitle="10 męczenniczek" title="elżbietańskich" />
            <p>
              Elżbietanki poniosły śmierć męczeńską w obronie innych ludzi i
              własnego honoru. W rozmowie z Radiem Watykańskim relator procesu
              beatyfikacyjnego podkreślił, że siostry straciły życie w okrutny
              sposób, ale do końca trwały "na posterunku". – Są wartości, o
              które trzeba walczyć i warto zmagać się do końca. Druga sprawa, co
              uderza w ich postaciach, mając na względzie motyw męczeństwa,
              czyli agresję na ich cielesność, to piękno ciała, które jest
              również w sobie wielką wartością.
            </p>
            <div className="button">
              {/* <button className="primary-btn">
                Więcej <BsArrowRight />
              </button>
              <button>
                Czytaj <BsArrowRight />
              </button> */}
            </div>
          </div>
        </div>
      </section>

      <div className="marigin"></div>
    </>
  );
};

export default Hero;

// https://dorzeczy.pl/religia/312271/wroclaw-10-siostr-elzbietanek-zostalo-beatyfikowane.html

// https://dzieje.pl/dziedzictwo-kulturowe/we-wroclawiu-beatyfikacja-elzbietanek-ofiar-czerwonoarmistow-w-1945-r

// https://info.wiara.pl/gal/pokaz/7603370.Zycie-codzienne-dawnych-elzbietanek/7#gt
