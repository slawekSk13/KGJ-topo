import "./MenuWrapper.css";
import { useState } from "react";
import { queryElementParameters } from "../../utilities/helpers";
import { ESide, IMenuWrapperProps } from "./MenuWrapperTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCheck, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

export const MenuWrapper = ({ children, side }: IMenuWrapperProps) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  const { height } = queryElementParameters("main");

  document.addEventListener("keydown", (e) => {
    e.key === "Escape" && setActive(false);
  });
  return (
    <>
      <nav
        className={
          active ? `menu menu__active menu__${side}` : `menu menu__${side}`
        }
        style={active ? { height } : undefined} onClick={handleClick}
      >{side === ESide.LEFT ? <FontAwesomeIcon
      className="hamburger"
      icon={active ? faTimes : faBars}
      size={"2x"}
    /> : <FontAwesomeIcon
    className="hamburger"
    icon={active ? faCheck : faSearch}
    size={"2x"}
  />}
        {children}
      </nav>
      {active && (
        <div
          onClick={handleClick}
          className="menu-background"
          style={{ height }}
        />
      )}
    </>
  );
};
