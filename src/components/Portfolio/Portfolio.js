import arrow from "../../images/icon-cursor.svg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__projects">
        <li className="portfolio__project">
          <p className="portfolio__project-type">Статичный сайт</p>
          <a
            className="portfolio__link "
            href="https://github.com/VasilevaMarinaSmr/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="portfolio__link-arrow"
              src={arrow}
              alt="Ссылка на проект со статичным сайтом"
            />
          </a>
        </li>
        <li className="portfolio__project">
          <p className="portfolio__project-type">Адаптивный сайт</p>
          <a
            className="portfolio__link "
            href="https://github.com/VasilevaMarinaSmr/russian-travel"
            rel="noreferrer"
          >
            <img
              className="portfolio__link-arrow"
              src={arrow}
              alt="Ссылка на проект с адаптивным сайтом"
            />
          </a>
        </li>
        <li className="portfolio__project">
          <p className="portfolio__project-type">Одностраничное приложение</p>
          <a
            className="portfolio__link "
            href="https://github.com/VasilevaMarinaSmr/react-mesto-api-full-gha"
            rel= "noreferrer"
          >
            <img
              className="portfolio__link-arrow"
              src={arrow}
              alt="Ссылка на проект с одностраничным приложением"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
