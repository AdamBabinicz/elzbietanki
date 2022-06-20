import React from "react";
import "./footer.css";
import {
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaUserAlt,
  FaCalendarAlt,
  FaMap,
  FaPhone,
} from "react-icons/fa";
import { blog } from "../../../dummydata.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="newsletter">
        <div className="container flexSB">
          <div className="left row">
            <h2>Wspólnota Młodzieży Elżbietańskiej</h2>
            <span>
              “W kontaktach z młodymi, spotykają oni u nas często inny świat,
              tak różny od tego, w którym się znajdują i do którego chcą się
              dostosować. Nasza posługa wśród młodzieży polega na cichym
              proteście przeciwko kulturze ego.”
            </span>
          </div>
          <div className="right row">
            <img src="../images/29.jpg" alt="..." />
            {/* <input type="text" placeholder="email" />
            <FaPaperPlane /> */}
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h2>Radom</h2>
            <span>2022 - {new Date().getFullYear()}.</span>
            <p>Elżbietanki - niczym panny mądre!</p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
          <div className="box link">
            <h3>Mapa strony</h3>
            <ul>
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
          </div>
          <div className="box link">
            <h3>Linki</h3>
            <ul>
              <a
                href="//selzbietanki.com/lorem-ipsum/historia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Historia</li>
              </a>
              <a
                href="//www.youtube.com/watch?v=VcaGygRvQh0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Beatyfikacja</li>
              </a>
              <a
                href="//www.radiomaryja.pl/kosciol/10-faktow-ktore-warto-znac-przed-beatyfikacja-siostr-elzbietanek"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Wiedza</li>
              </a>
              <a
                href="//www.zyciezakonne.pl/wiadomosci/kraj/co-nowe-blogoslawione-elzbietanki-mowia-wspolczesnemu-swiatu-121195"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Kult</li>
              </a>
              <a
                href="//www.onet.pl/informacje/kai/przestrzelony-kielich-i-10-swiec-podczas-beatyfikacji-siostr-elzbietanek/kpm69x2,30bc1058"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Relikwie</li>
              </a>
              <a
                href="//www.youtube.com/watch?v=JYoWtgGolsI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Radio Maryja</li>
              </a>
            </ul>
          </div>
          <div className="box">
            <h3>Beatyfikacja</h3>
            {blog.slice(0, 3).map((val) => {
              return (
                <div className="items flexSB">
                  <div className="img">
                    <img src={val.cover} alt="..." />
                  </div>
                  <div className="text">
                    {/* <span>
                      <FaUserAlt />
                      <label htmlFor="">{val.type}</label>
                    </span> */}
                    <span>
                      <FaCalendarAlt />
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <h4>{val.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="box last">
            <h3>Masz pytania?</h3>
            <ul>
              <li>
                <FaMap />
                26-610 Radom
              </li>
              {/* <li>
                <FaPhone />
                +123 456 789
              </li> */}
              <a href="mailto:puaro@vp.pl">
                <li>
                  <FaPaperPlane />
                  puaro@vp.pl
                </li>
              </a>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          <strong>elżbietanki</strong>
        </p>
      </div>
    </>
  );
};

export default Footer;
