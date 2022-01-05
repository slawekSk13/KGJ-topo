import "./OldHeader.css";
import { Problem } from "../../state";
import { voidFunc } from "../../utilities/types";

export const OldHeader = ({
  handleCountDecrease,
  handleCountIncrease,
  boulder,
}: {
  handleCountDecrease: voidFunc;
  handleCountIncrease: voidFunc;
  boulder: Problem;
}) => {
  return (
    <>
      <h1 className="boulder-name">
        <span className="clickable" onClick={handleCountDecrease}>
          {"<<"}{" "}
        </span>
        {`${boulder.name} - ${boulder.grade}`}
        <span className="clickable" onClick={handleCountIncrease}>
          {" "}
          {">>"}
        </span>
      </h1>
      <h3 className="boulder-author">{boulder.author}</h3>
    </>
  );
};
