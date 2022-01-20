import "./OldHeader.css";
import { useContext } from "react";
import { StateContext } from "../../state/context";
import { observer } from "mobx-react-lite";
import { TooltipText } from "../TooltipText/TooltipText";
import { saveBoulder } from "../../utilities/helpers";
import * as mobx from "mobx";

export const OldHeader = observer(({ loadData }: { loadData: Function }) => {
  const { historicalBoulders, loggedUser, allUsers, appError } =
    useContext(StateContext);
  const handleUpgrade = async () => {
    if (loggedUser.user) {
      historicalBoulders.currentBoulder.addAscent(loggedUser.user);
      await saveBoulder(historicalBoulders.currentBoulder, appError, loggedUser);
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
        <span
          className="clickable"
          onClick={() => historicalBoulders.increaseCount()}
        >
          {" "}
          {">>"}
        </span>
      </h1>{" "}<button className={loggedUser.user &&
        !historicalBoulders.currentBoulder.checkAscents(loggedUser.user) ? 'button button__login' : 'invisible button button__login'} onClick={handleUpgrade}>
            Zrobiłem
          </button>
    </>
  );
});
