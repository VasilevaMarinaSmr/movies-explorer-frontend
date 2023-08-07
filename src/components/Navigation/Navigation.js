import React, { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import MenuBurger from "../MenuBurger/MenuBurger";

const Navigation = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const updateWindowSize = () => setWindowSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  });

  return <>{windowSize < 769 ? <MenuBurger /> : <Menu /> }</>;
};

export default Navigation;
