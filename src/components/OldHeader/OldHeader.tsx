import "./OldHeader.css";
import { useContext } from "react";
import { StateContext } from "../../state/context";
import { observer } from "mobx-react-lite";
import { TooltipText } from "../TooltipText/TooltipText";

export const OldHeader = observer(() => {
  const { historicalBoulders, loggedUser } = useContext(StateContext);
  const handleUpgrade = () => {
    loggedUser.user
      ? historicalBoulders.addAscent(loggedUser.user)
      : alert("not logged in");
  };
  return (
    <>
      <div className="tooltip">
        <h1 className="boulder-name">
          <span
            className="clickable"
            onClick={() => historicalBoulders.decreaseCount()}
          >
            {"<<"}{" "}
          </span>
          {`${historicalBoulders.getName()} - ${historicalBoulders.getGrade()}`}
          <span
            className="clickable"
            onClick={() => historicalBoulders.increaseCount()}
          >
            {" "}
            {">>"}
          </span>
        </h1>{" "}
        <TooltipText
          className={`tooltip-text__bottom`}
          text={`Autor: ${historicalBoulders.getAuthor()}, powtórzone przez: ${
            historicalBoulders.getAscents()[0]?.userUid
          }`}
        />
      </div>
      {loggedUser.user && !historicalBoulders.checkAscents(loggedUser.user) && (
        <button className="button button__login" onClick={handleUpgrade}>
          Zrobiłem
        </button>
      )}
    </>
  );
});
