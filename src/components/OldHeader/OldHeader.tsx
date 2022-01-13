import "./OldHeader.css";
import { useContext } from "react";
import { StateContext } from "../../state/context";
import { observer } from "mobx-react-lite";
import { TooltipText } from "../TooltipText/TooltipText";
import { saveBoulder } from "../../utilities/helpers";

export const OldHeader = observer(({loadData}: {loadData: Function}) => {
  const { historicalBoulders, loggedUser, allUsers, appError } =
    useContext(StateContext);
  const handleUpgrade = async () => {
    if (loggedUser.user) {
      historicalBoulders.currentBoulder.addAscent(loggedUser.user);
      await saveBoulder(
        historicalBoulders.currentBoulder,
        appError
      );
      loadData();
    } else {
      alert("not logged in");
    }
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
