import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { TiTimesOutline } from "react-icons/ti";
import Modal from "../../Portal/Modal";

const Header = () => {
  const [click, setClick] = useState(false);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Start</Link>
            </li>
            <li>
              <Link to="/meczenniczki">Męczenniczki</Link>
            </li>
            <li>
              <Link to="/siostry">Siostry</Link>
            </li>
            <li>
              <Link to="/rysunki">Rysunki</Link>
            </li>
            <li>
              <Link to="/blogoslawione">Błogosławione</Link>
            </li>
            <li>
              <Link to="/beatyfikacja">Beatyfikacja</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button" onClick={() => Toggle()}>
              Czytaj
            </div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <TiTimesOutline /> : <AiOutlineBars />}
          </button>
        </nav>
      </header>
      <Modal
        show={modal}
        close={Toggle}
        title="Męczenniczki elżbietańskie: nowe orędowniczki wszystkich, którzy doznają przemocy"
      >
        <p>
          Poniosły śmierć z rąk żołnierzy Armii Czerwonej. „Myślę też, że
          męczenniczki mogą być wzorem wierności na dzisiejsze czasy. Nam
          brakuje wierności, rozpadają się małżeństwa, księża odchodzą, siostry
          rezygnują…” – opowiada s. Aleksandra.
        </p>
        <br />
        <p>
          <em>pl.aleteia.org/2022/06/11/meczenniczki-elzbietanskie</em>
        </p>
      </Modal>
    </>
  );
};

export default Header;
