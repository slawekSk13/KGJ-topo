import "./MapInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { StateContext } from "../../state/context";
import { IMapInputProps } from "./MapInputTypes";

export const MapInput = ({ onChange, currentMaps }: IMapInputProps) => {
  const { maps } = useContext(StateContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClick = (uid: string) => {
    onChange(uid);
    setIsOpen(false);
  };

  return (
    <>
      <div className="map-input-label clickable" onClick={handleOpen}>
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
                className={
                  currentMaps.some((element) => element === el.uid)
                    ? "map-mini clickable map-mini-selected"
                    : "map-mini clickable"
                }
                src={el.url}
                onClick={() => handleClick(el.uid)}
              />
            ))}
      </div>
    </>
  );
};
