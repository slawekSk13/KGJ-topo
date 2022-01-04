import { ReactElement, useContext } from "react";
import { handleNewHold } from "../../utilities/helpers";

import { StateContext } from "../../state/context";
import { HoldsMap } from "../HoldsMap/HoldsMap";
import { observer } from "mobx-react-lite";

export const AddNewBoulder = observer((): ReactElement => {
  const { boulder, currentHold, appError } = useContext(StateContext);
  const handleMapClick = (e: { clientX: number; clientY: number }): void => {
    currentHold &&
      boulder.setHolds(
        handleNewHold(e, boulder.getHolds(), currentHold.getHold())
      );
  };
  const handleChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    boulder.setName(value);
  };

  return (
    <>
      <div className="tooltip">
        <input
          onChange={handleChange}
          className={"boulder-name boulder-name-input clickable"}
          value={boulder.getName()}
          placeholder="Podaj nazwę"
        />
        {appError.checkCode('noname') && boulder.getName() === "" && (
          <span
            className="tooltip-text tooltip-text__bottom clickable"
            onClick={() => appError.removeCode("noname")}
          >
            Nazwiesz to jakoś?
          </span>
        )}
      </div>
      <HoldsMap boulder={boulder} handleMapClick={handleMapClick} />
    </>
  );
});
