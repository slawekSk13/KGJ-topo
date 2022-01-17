import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { StateContext } from "../../state/context";
import { getUsersListFromFirebase } from "../../utilities/firebase";
import "./Main.css";
import { IMainProps } from "./MainTypes";
export const Main = observer(({ children }: IMainProps) => {
  const { allUsers, loading } = useContext(StateContext);
  const loadAllUSers = async () => {
    loading.setLoading();
    try {
      const usersList = await getUsersListFromFirebase();
      usersList && allUsers.setUsers(usersList.data);
    } catch (err) {
      console.log(err);
    } finally {
      loading.clearLoading();
    }
  };
  window.addEventListener("load", loadAllUSers);
  return (
    <main className="main" id="main">
      {children}
    </main>
  );
});
