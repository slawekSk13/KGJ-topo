
import { MenuWrapper } from "../MenuWrapper/MenuWrapper";
import { ESide } from "../MenuWrapper/MenuWrapperTypes";
import "./FilterBar.css";

export const FilterBar = () => {

  return (
   <MenuWrapper side={ESide.RIGHT}><h1>Filter Bar</h1></MenuWrapper>
  );
};
