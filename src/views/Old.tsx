import { getFromFirebase } from "../utilities/firebase";
import { HoldsMap } from "../components/HoldsMap/HoldsMap";
import { useContext, useEffect, useState } from "react";
import { Problem } from "../state";
import { observer } from "mobx-react-lite";
import { StateContext } from "../state/context";
import { OldHeader } from "../components/OldHeader/OldHeader";
import { FilterBar } from "../components/FilterBar/FilterBar";
import { EDataTypes } from "../utilities/types";

export const Old = observer(() => {
  const [boulders, setBoulders] = useState<Problem[]>([new Problem()]);
  const [count, setCount] = useState(0);

  const { appError } = useContext(StateContext);

  const loadData = async () => {
    const { code, data, error } = await getFromFirebase(EDataTypes.BOULDERS);
    setBoulders(data);
    error && appError.setCode(code);
  };

  const handleCountIncrease = (): void => {
    setCount((prev) => {
      if (prev < boulders.length - 1) {
        return prev + 1;
      } else return 0;
    });
  };

  const handleCountDecrease = (): void => {
    setCount((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else return boulders.length - 1;
    });
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <OldHeader
        boulder={boulders[count]}
        handleCountDecrease={handleCountDecrease}
        handleCountIncrease={handleCountIncrease}
      />
      <HoldsMap boulder={boulders[count]} />
      <FilterBar />
    </>
  );
});
