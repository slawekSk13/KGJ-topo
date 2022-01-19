import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { StateContext } from "../../state/context";
import { getMapsListFromFirebase, getUsersListFromFirebase } from "../../utilities/firebase/firebaseDB";
import "./Main.css";
import { IMainProps } from "./MainTypes";
export const Main = observer(({ children }: IMainProps) => {
  const { allUsers, maps, loading } = useContext(StateContext);
  const loadData = async () => {
    loading.setLoading();
    try {
      const usersList = await getUsersListFromFirebase();
      const mapsList = await getMapsListFromFirebase();
      usersList && allUsers.setUsers(usersList.data);
      mapsList && maps.setMaps(mapsList.data);
    } catch (err) {
      console.log(err);
    } finally {
      loading.clearLoading();
    }
  };
  window.addEventListener("load", loadData);
  return (
    <main className="main" id="main">
      {children}
    </main>
  );
});
