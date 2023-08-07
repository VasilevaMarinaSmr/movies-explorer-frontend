import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <h2 className="about-project__header">О проекте</h2>
      <div className="about-project__body">
        <div className="about-project__info">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__info">
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timetable">
        <p className="about-project__one-week">1 неделя</p>
        <p className="about-project__four-week">4 недели</p>
        <p className="about-project__topic">Back-end</p>
        <p className="about-project__topic">Front-end</p>
      </div>
    </section>
  );
}
export default AboutProject;