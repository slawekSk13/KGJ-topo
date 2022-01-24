import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../state/context";
import "./InfoModal.css";

export const InfoModal = observer(() => {
  const { appError } = useContext(StateContext);
  const [isActive, setIsActive] = useState(true);
  const [isOut, setIsOut] = useState(false);
  const getMessage = (codeArray: string[]) => {
    if (codeArray.some((el) => el === "holds")) {
      return "Dodaj chwyty";
    }
  };

  const modalOut = () => {
    setIsActive(false);
    setIsOut(true);
    setTimeout(() => appError.clearCode(), 1200);
  };

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
        <p className="modal-info">{getMessage(appError.getCode())}</p>
      </div>
    </div>
  );
});
