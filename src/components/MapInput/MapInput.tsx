import "./MapInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { StateContext } from "../../state/context";
import { IMapInputProps } from "./MapInputTypes";

export const MapInput = ({ onChange }: IMapInputProps) => {
  const { maps } = useContext(StateContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="map-input-label clickable" onClick={handleClick}>
        Wybierz ścianę
        <FontAwesomeIcon
          icon={faCaretDown}
          size="2x"
          className={isOpen ? "arrow arrow-up" : "arrow"}
        />
      </div>
      <div className={isOpen ? "map-input map-input-open" : "map-input"}>
        {maps.getMaps().length > 0 &&
          maps
            .getMaps()
            .map((el) => (
              <img
                key={el.uid}
                className="map-mini clickable"
                src={el.url}
                onClick={() => onChange(el.uid)}
              />
            ))}
      </div>
    </>
  );
};
