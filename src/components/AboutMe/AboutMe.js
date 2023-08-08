import React from "react";
import Foto from "../../images/foto.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <h3 className="about-me__header">Студент</h3>
      <div className="about-me__container-info">
        <div className="about-me__info">
          <h2 className="about-me__name">Марина</h2>
          <h4 className="about-me__profession">
            Фронтенд-разработчик, 37 лет
          </h4>
          <p className="about-me__paragraph">
          Родилась и живу в городе Самара. Закончила университет по специальности юрист.
          Увлекаюсь рисованием и леттерингом.
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