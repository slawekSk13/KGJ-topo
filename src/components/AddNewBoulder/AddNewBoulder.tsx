import "./AddNewBoulder.css";
import { IClick } from "./AddNewBoulderTypes";
import { ReactElement, useContext } from "react";
import { handleNewHold } from "../../utilities/helpers";
import { StateContext } from "../../state/context";
import { HoldsMap } from "../HoldsMap/HoldsMap";
import { observer } from "mobx-react-lite";
import { AddNewBoulderMenu } from "../AddNewBoulderMenu/AddNewBoulderMenu";

export const AddNewBoulder = observer((): ReactElement => {
  const { boulder, currentHold, maps } = useContext(StateContext);
  const handleMapClick = (e: IClick): void => {
    const { sizeX, sizeY, radius } = maps.getMap(boulder.getMap());
    currentHold &&
      boulder.setHolds(
        handleNewHold(e, boulder.getHolds(), currentHold.getHold(), {
          sizeX,
          sizeY,
          radius,
        })
      );
  };

  return (
    <>
      <HoldsMap boulder={boulder} handleMapClick={handleMapClick} />
      <AddNewBoulderMenu />
    </>
  );
});
