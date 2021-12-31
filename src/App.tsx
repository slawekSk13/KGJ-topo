import { buttonsArray } from "./utilities/constants";

import { boulder, currentHold } from "./state";

import { ButtonsGroup } from "./components/ButtonsGroup/ButtonsGroup";
import { HoldsMap } from "./components/HoldsMap/HoldsMap";

export const App = () => {
    return (
      <>
        <ButtonsGroup buttonsArray={buttonsArray} />
        <HoldsMap boulder={boulder} currentHold={currentHold}/>
      </>
    );
  }