import "./OldHeader.css";
import { useContext } from "react";
import { StateContext } from "../../state/context";
import { observer } from "mobx-react-lite";
import { TooltipText } from "../TooltipText/TooltipText";

export const OldHeader = observer(() => {
  const { historicalBoulders, loggedUser } = useContext(StateContext);
  const handleUpgrade = () => {
    loggedUser.user
      ? historicalBoulders.currentBoulder.addAscent(loggedUser.user)
      : alert("not logged in");
  };
  return (
    <>
      <h1 className="boulder-name">
        <span
          className="clickable"
          onClick={() => historicalBoulders.decreaseCount()}
        >
          {"<<"}{" "}
        </span>
        <span className="tooltip">
          {`${historicalBoulders.currentBoulder.getName()} - ${historicalBoulders.currentBoulder.getGrade()}`}
          <TooltipText
            className={`tooltip-text__bottom`}
            text={`Autor: ${historicalBoulders.currentBoulder.getAuthor()}, ${
              historicalBoulders.currentBoulder.getAscents().length === 0
                ? "bez powtórzeń"
                : "powtórzone przez: " +
                  historicalBoulders.currentBoulder
                    .getAscents()
                    .map((el) => el.userUid)
                    .join(", ")
            }`}
          />
        </span>
        <span
          className="clickable"
          onClick={() => historicalBoulders.increaseCount()}
        >
          {" "}
          {">>"}
        </span>
      </h1>{" "}
      {loggedUser.user &&
        !historicalBoulders.currentBoulder.checkAscents(loggedUser.user) && (
          <button className="button button__login" onClick={handleUpgrade}>
            Zrobiłem
          </button>
        )}
    </>
  );
});
