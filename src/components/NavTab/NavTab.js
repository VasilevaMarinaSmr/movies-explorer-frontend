import "./NavTab.css";

function NavTab() {
  return (
    <nav className="NavTab">
      <ul className="NavTab__list">
        <li className="NavTab__item">
          <a className="NavTab__link" href="#about-project">
            О проекте
          </a>
        </li>
        <li className="NavTab__item">
          <a className="NavTab__link" href="#techs">
            Технологии
          </a>
        </li>
        <li className="NavTab__item">
          <a className="NavTab__link" href="#about-me">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
