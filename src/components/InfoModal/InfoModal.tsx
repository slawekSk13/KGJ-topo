import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../state/context";
import "./InfoModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { getMessage } from "./InfoModalHelpers";

export const InfoModal = observer(() => {
  const { appMessage } = useContext(StateContext);
  const [isActive, setIsActive] = useState(true);
  const [isOut, setIsOut] = useState(false);

  const modalOut = () => {
    setIsActive(false);
    setIsOut(true);
    setTimeout(() => {
      appMessage.clearCode();
    }, 1200);
  };

  const escapeListener = (e: KeyboardEvent) => {
    e.key === "Escape" && modalOut();
  };

  useEffect(() => {
    document.addEventListener("keydown", escapeListener);
    const timeoutId = setTimeout(modalOut, 5000);
    return () => {
      document.removeEventListener("keydown", escapeListener);
      clearTimeout(timeoutId);
    };
  });

  return (
    <div
      className={
        isActive
          ? "modal modal__active"
          : isOut
          ? "modal modal__active out"
          : "modal"
      }
      onClick={() => modalOut()}
    >
      <div className="modal-background">
        <p className="modal-info">
          {getMessage(appMessage)}
          <FontAwesomeIcon className="close clickable" icon={faTimes} />
        </p>
      </div>
    </div>
  );
});
