import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CustomLink } from "../CustomLink/CustomLink";
import { queryElementParameters } from "../../utilities/helpers";

export const Menu = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  const { height } = queryElementParameters("main");
  console.log(height)

  document.addEventListener("keydown", (e) => {
    e.key === "Escape" && setActive(false);
  });
  return (
    <>
      <nav
        className={active ? `menu menu__active` : `menu`}
        style={{ height: height }}
      >
        <FontAwesomeIcon
          className="hamburger"
          icon={active ? faTimes : faBars}
          size={"2x"}
          onClick={handleClick}
        />
        <ul className="menu-list">
          <li>
            <ul>
            <li onClick={handleClick} className="tooltip">
            <CustomLink to="/">Nowy</CustomLink>
            <span className="tooltip-text tooltip-text__right">Masz coś nowego?</span>
          </li>
          <li onClick={handleClick} className="tooltip">
            <CustomLink to="/old">Przeglądaj</CustomLink>
            <span className="tooltip-text tooltip-text__right">Sprawdź, czy jest coś nowego</span>
          </li>
          <li onClick={handleClick} className="tooltip">
            <CustomLink to="/stats">Statystyki</CustomLink>
            <span className="tooltip-text tooltip-text__right">
              Komu zgina się najlepiej w tym tygodniu?
            </span>
          </li>
            </ul>
          </li>
          <li onClick={handleClick} className="tooltip">
            <CustomLink to="/login">Zaloguj</CustomLink>
            <span className="tooltip-text tooltip-text__right">
              Zacznij rozmowę pozdrowieniami od wspólnych znajomych
            </span>
          </li>
        </ul>
      </nav>
      {active && <div onClick={handleClick} className="menu-background" />}
    </>
  );
};
