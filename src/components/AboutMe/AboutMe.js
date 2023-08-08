import React from "react";
import Foto from "../../images/foto.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <h3 className="about-me__header">Студент</h3>
      <div className="about-me__container-info">
        <div className="about-me__info">
          <h4 className="about-me__name">Марина</h4>
          <h5 className="about-me__profession">
            Фронтенд-разработчик, 37 лет
          </h5>
          <p className="about-me__paragraph">
          Родилась и живу в городе Самара. Закончила университет по специальности юрист.
          Увлекаюсь рисованием и леттерингом. С помощью государственной программы 
          «Цифровые профессии» решила попробовать себя в области веб-разработки.
          После окончания курса хочу найти удаленную работу.
          </p>
          <div className="about-me__links">
            <a
              className="about-me__link"
              href="https://github.com/VasilevaMarinaSmr"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <img src={Foto} alt="Фото" className="about-me__photo" />
      </div>
    </section>
  );
}
export default AboutMe;