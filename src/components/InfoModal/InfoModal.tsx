import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../state/context";
import "./InfoModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AppError } from "../../state/AppError";

export const InfoModal = observer(() => {
  const { appError } = useContext(StateContext);
  const [isActive, setIsActive] = useState(true);
  const [isOut, setIsOut] = useState(false);
  const getMessage = (appError: AppError) => {
    if (appError.checkCode('holds')) {
      return "Dodaj chwyty";
    } else if (appError.checkCode('noname')) {
        return 'Podaj nazwę'
    }
  };

  let timeoutId:  ReturnType<typeof setTimeout>;

  const modalOut = () => {
    setIsActive(false);
    setIsOut(true);
    timeoutId = setTimeout(() => appError.clearCode(), 1200);
  };

  const escapeListener = (e: KeyboardEvent) => {
    e.key === "Escape" && modalOut();
  };

  useEffect(() => {
    document.addEventListener("keydown", escapeListener);
    return () => {
      document.removeEventListener("keydown", escapeListener);
      timeoutId && clearTimeout(timeoutId);
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
      onClick={modalOut}
    >
      <div className="modal-background">
        <p className="modal-info">
          {getMessage(appError)}
          <FontAwesomeIcon className="close" icon={faTimes} />
        </p>
      </div>
    </div>
  );
});
