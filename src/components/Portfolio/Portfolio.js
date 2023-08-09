import arrow from "../../images/icon-cursor.svg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__projects">
        <li className="portfolio__project">
          <a
            className="portfolio__link "
            href="https://github.com/VasilevaMarinaSmr/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__project-type">Статичный сайт</p>
            <div className="portfolio__arrow-container">
              <img
                className="portfolio__link-arrow"
                src={arrow}
                alt="Ссылка на проект со статичным сайтом"
                target="_blank"
              />
            </div>
          </a>
        </li>
        <li className="portfolio__project">
          <a
            className="portfolio__link "
            href="https://github.com/VasilevaMarinaSmr/russian-travel"
            rel="noreferrer"
            target="_blank"
          >
            <p className="portfolio__project-type">Адаптивный сайт</p>
            <div className="portfolio__arrow-container">
              <img
                className="portfolio__link-arrow"
                src={arrow}
                alt="Ссылка на проект с адаптивным сайтом"
              />
            </div>
          </a>
        </li>
        <li className="portfolio__project">
          <a
            className="portfolio__link "
            href="https://github.com/VasilevaMarinaSmr/react-mesto-api-full-gha"
            rel="noreferrer"
            target="_blank"
          >
            <p className="portfolio__project-type">Одностраничное приложение</p>
            <div className="portfolio__arrow-container">
              <img
                className="portfolio__link-arrow"
                src={arrow}
                alt="Ссылка на проект с одностраничным приложением"
              />
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
