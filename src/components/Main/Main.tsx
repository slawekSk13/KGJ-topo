import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { StateContext } from "../../state/context";
import { getUsersListFromFirebase } from "../../utilities/firebase";
import "./Main.css";
import { IMainProps } from "./MainTypes";
export const Main = observer(({ children }: IMainProps) => {
  const { allUsers, loading } = useContext(StateContext);
  const loadAllUSers = async () => {
    // loading.setLoading();
    const usersList = await getUsersListFromFirebase();
    usersList && allUsers.setUsers(usersList.data);
    // loading.clearLoading();

    //add error handling
  };
  window.addEventListener("load", loadAllUSers);
  return (
    <main className="main" id="main">
      {children}
    </main>
  );
});
