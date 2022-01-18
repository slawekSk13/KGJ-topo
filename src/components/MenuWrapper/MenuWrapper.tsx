import "./MenuWrapper.css";
import { useEffect, useState } from "react";
import { queryElementParameters } from "../../utilities/helpers";
import { ESide, IMenuWrapperProps } from "./MenuWrapperTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCheck,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export const MenuWrapper = ({ children, side }: IMenuWrapperProps) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState<number>();

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  const handleHeight = () => {
    const { height } = queryElementParameters("main");
    setHeight(height);
  };

  const escapeListener = (e: KeyboardEvent) => {
    e.key === "Escape" && setActive(false);
  }

  useEffect(() => {
    handleHeight();
    return () => {
      window.removeEventListener("resize", handleHeight);
      document.removeEventListener("keydown", escapeListener);
    };
  }, [active]);

  window.addEventListener("resize", handleHeight);
  document.addEventListener("keydown", escapeListener);
  return (
    <>
      <nav
        className={
          active ? `menu menu__active menu__${side}` : `menu menu__${side}`
        }
        style={active ? { height } : undefined}
        onClick={handleClick}
      >
        {side === ESide.LEFT ? (
          <FontAwesomeIcon
            className="hamburger"
            icon={active ? faTimes : faBars}
            size={"2x"}
          />
        ) : (
          <FontAwesomeIcon
            className="hamburger"
            icon={active ? faCheck : faSearch}
            size={"2x"}
          />
        )}
        {children}
      </nav>
      <div
        onClick={handleClick}
        className="menu-background"
        style={{ height }}
      />
    </>
  );
};
