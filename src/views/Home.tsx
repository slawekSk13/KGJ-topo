import { ButtonsGroup } from "../components/ButtonsGroup/ButtonsGroup";
import { AddNewBoulder } from "../components/AddNewBoulder/AddNewBoulder";
import { buttonsArray } from "../utilities/constants";
import { useState } from "react";
import { AddNewBoulderMenu } from "../components/AddNewBoulderMenu/AddNewBoulderMenu";

export const Home = () => {
  const [showOptions, setShowOptions] = useState(true);
  const handleShowOptions = () => {
    setShowOptions((prev) => !prev);
  };
  return showOptions ? <AddNewBoulderMenu handleShowOptions={handleShowOptions} /> : (
    <>
      <AddNewBoulder />
      <ButtonsGroup buttonsArray={buttonsArray} />
      <button className="button button__login" onClick={handleShowOptions}>
          Cofnij
        </button>
    </>
  );
};
