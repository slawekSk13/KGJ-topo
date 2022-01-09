import "./OldHeader.css";
import { useContext } from "react";
import { StateContext } from "../../state/context";
import { observer } from "mobx-react-lite";

export const OldHeader = observer(() => {
  const { historicalBoulders, loggedUser } = useContext(StateContext);
  const handleUpgrade = () => {
    loggedUser.user ? historicalBoulders.addAscent(loggedUser.user) : alert('not logged in');
    // console.log(historicalBoulders.shownBoulder.grade);
    // console.log(historicalBoulders.shownBoulder.getAscents())
    
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
        {`${historicalBoulders.getName()} - ${historicalBoulders.getGrade()}`}
        <span
          className="clickable"
          onClick={() => historicalBoulders.increaseCount()}
        >
          {" "}
          {">>"}
        </span>
      </h1>
      <button className="button button__login" onClick={handleUpgrade}>
        Zrobiłem
      </button>
    </>
  );
});
