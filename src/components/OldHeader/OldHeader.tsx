import "./OldHeader.css";
import { useContext, useEffect } from "react";
import { StateContext } from "../../state/context";
import { observer } from "mobx-react-lite";
import { TooltipText } from "../TooltipText/TooltipText";
import { saveBoulder } from "../../utilities/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export const OldHeader = observer(({ loadData }: { loadData: Function }) => {
  const { historicalBoulders, loggedUser, allUsers, appMessage } =
    useContext(StateContext);
  const handleUpgrade = async () => {
    if (loggedUser.user) {
      historicalBoulders.currentBoulder.addAscent(loggedUser.user);
      await saveBoulder(
        historicalBoulders.currentBoulder,
        appMessage,
        loggedUser
      );
      appMessage.setCode("boulder-done");
      loadData();
    } else {
      appMessage.setCode("not-logged");
    }
  };

  const handleKeyboardEvent = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      historicalBoulders.decreaseCount();
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      historicalBoulders.increaseCount();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboardEvent);
    return () => {
      window.removeEventListener("keydown", handleKeyboardEvent);
    };
  });

  return (
    <>
      <h1 className="boulder-name">
        <FontAwesomeIcon
          className="clickable"
          icon={faCaretLeft}
          onClick={() => historicalBoulders.decreaseCount()}
          size={"2x"}
        />

        <span className="tooltip title">
          {historicalBoulders.currentBoulder.getName()}
          <br /> {historicalBoulders.currentBoulder.getGrade()}
          {historicalBoulders.currentBoulder.getAuthor() && (
            <TooltipText
              className={`tooltip-text__bottom`}
              text={`Autor: ${allUsers.getUserDisplayName(
                historicalBoulders.currentBoulder.getAuthor()
              )}, ${
                !(historicalBoulders.currentBoulder.getAscents().length > 0)
                  ? "bez przejść"
                  : "zrobili: " +
                    historicalBoulders.currentBoulder
                      .getAscents()
                      .map((el) => allUsers.getUserDisplayName(el.userUid))
                      .join(", ")
              }`}
            />
          )}
        </span>
        <FontAwesomeIcon
          className="clickable"
          icon={faCaretRight}
          onClick={() => historicalBoulders.increaseCount()}
          size={"2x"}
        />
      </h1>{" "}
      <button
        className={
          loggedUser.user &&
          !historicalBoulders.currentBoulder.checkAscents(loggedUser.user)
            ? "button button__login"
            : "invisible button button__login"
        }
        onClick={handleUpgrade}
      >
        Zrobiłem
      </button>
    </>
  );
});
