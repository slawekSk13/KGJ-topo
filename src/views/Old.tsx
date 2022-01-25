import { HoldsMap } from "../components/HoldsMap/HoldsMap";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { StateContext } from "../state/context";
import { OldHeader } from "../components/OldHeader/OldHeader";
import { FilterBar } from "../components/FilterBar/FilterBar";
import { getBouldersFromFirebase } from "../utilities/firebase/firebaseDB";

export const Old = observer(() => {
  const { appMessage, historicalBoulders} = useContext(StateContext);

  const loadData = async () => {
    try {
      const { code, data, error } = await getBouldersFromFirebase();
      historicalBoulders.setBoulders(data);
      appMessage.removeCode("connection");
      error && appMessage.setCode(code);
      return data;
    } catch (error) {
      console.log(error);
      appMessage.setCode("connection");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {appMessage.checkCode("connection") ? (
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
