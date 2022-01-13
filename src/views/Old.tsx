import { getBouldersFromFirebase } from "../utilities/firebase";
import { HoldsMap } from "../components/HoldsMap/HoldsMap";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { StateContext } from "../state/context";
import { OldHeader } from "../components/OldHeader/OldHeader";
import { FilterBar } from "../components/FilterBar/FilterBar";

export const Old = observer(() => {
  const { appError, historicalBoulders} = useContext(StateContext);

  const loadData = async () => {
    try {
      const { code, data, error } = await getBouldersFromFirebase();
      historicalBoulders.setBoulders(data);
      appError.removeCode("connection");
      error && appError.setCode(code);
      return data;
    } catch (error) {
      console.log(error);
      appError.setCode("connection");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {appError.checkCode("connection") ? (
        <div>Nie ma internetów</div>
      ) : (
        <>
          <OldHeader loadData={loadData} />
          <HoldsMap boulder={historicalBoulders.getCurrentBoulder()} />
        </>
      )}
      <FilterBar />
    </>
  );
});
