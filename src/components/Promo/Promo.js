import React from "react";
import NavTab from "../NavTab/NavTab";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo_blok-top">
        <h1 className="promo__header">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
      <NavTab />
    </section>
  );
}

export default Promo;
