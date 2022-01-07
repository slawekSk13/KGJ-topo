import "./Menu.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CustomLink } from "../CustomLink/CustomLink";
import { queryElementParameters } from "../../utilities/helpers";
import { TooltipText } from "../TooltipText/TooltipText";
import { MenuWrapper } from "../MenuWrapper/MenuWrapper";
import { ESide } from "../MenuWrapper/MenuWrapperTypes";

export const Menu = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  const { height } = queryElementParameters("main");

  document.addEventListener("keydown", (e) => {
    e.key === "Escape" && setActive(false);
  });
  return (
    <MenuWrapper side={ESide.LEFT}>
      <>
        
        <ul className="menu-list">
          <li>
            <ul>
              <li onClick={handleClick}>
                <CustomLink to="/">Nowy</CustomLink>
                <TooltipText
                  className="tooltip-text__right"
                  text="Masz coś nowego?"
                />
              </li>
              <li onClick={handleClick}>
                <CustomLink to="/old">Przeglądaj</CustomLink>
                <TooltipText
                  className="tooltip-text__right"
                  text="Sprawdź, czy jest coś nowego"
                />
              </li>
              <li onClick={handleClick}>
                <CustomLink to="/stats">Statystyki</CustomLink>
                <TooltipText
                  className="tooltip-text__right"
                  text="Komu zgina się najlepiej w tym tygodniu?"
                />
              </li>
            </ul>
          </li>
          <li onClick={handleClick}>
            <CustomLink to="/login">Zaloguj</CustomLink>
            <TooltipText
              className="tooltip-text__right"
              text="Zacznij rozmowę pozdrowieniami od wspólnych znajomych"
            />
          </li>
        </ul>
      </>
    </MenuWrapper>
  );
};
