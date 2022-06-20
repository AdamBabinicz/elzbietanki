import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const data =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5055007.412151468!2d19.133981807710352!3d51.783036525872994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc65f36db901%3A0x4829102bf2911b22!2sZgromadzenie%20zakonne%20Si%C3%B3str%20%C5%9Bw.%20El%C5%BCbiety!5e0!3m2!1spl!2spl!4v1655476373373!5m2!1spl!2spl";

  return (
    <>
      <Back title="Kontakt" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={data}></iframe>
          </div>
          <div className="right row">
            <h2>Kontakt</h2>
            <p>
              <b>
                "Posługując się nami, Pan Jezus nadal chodzi ulicami i
                odprowadza dzieci do szkoły, zawozi do szpitala w razie
                potrzeby, przyjmuje wędrowców, karmi głodnych i otwiera drzwi
                domu dla sierot."
              </b>
            </p>
            <div className="items grid2">
              <div className="box">
                <h4>Adres:</h4>
                <p>
                  Rycerska 2
                  <br /> 00-254 Warszawa
                </p>
              </div>
              <div className="box">
                <h4>Link:</h4>
                <a
                  href="//selzbietanki.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>selzbietanki.com</p>
                </a>
              </div>
              <div className="box">
                <h4>Telefon:</h4>
                <p>22 8311843</p>
              </div>
            </div>
            <img src="../images/20.jpg" alt="..." />
            {/* <form action="">
              <div className="flexSB">
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email" />
              </div>
              <input type="text" placeholder="Temat" />
              <textarea name="" id="" cols="30" rows="10">
                Napisz
              </textarea>
              <button className="primary-btn">Wyślij</button>
            </form> */}
            <h3>Zobacz na:</h3>
            <span>Facebook, Instagram, Twitter, YouTube</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
