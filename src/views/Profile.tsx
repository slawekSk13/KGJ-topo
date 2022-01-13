import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { CustomLink } from "../components/CustomLink/CustomLink";
import { Input } from "../components/Input/Input";
import { EInputTypes } from "../components/Input/InputTypes";
import { StateContext } from "../state/context";

export const Profile = observer(() => {
  const { loggedUser, allUsers } = useContext(StateContext);
  const displayName = loggedUser.user ? allUsers.getUserDisplayName(loggedUser.getUserUid()) : '';
  return (
   loggedUser.user ?  <><Input
   onChange={(e) => allUsers.setUserDisplayName(loggedUser.getUserUid(), e.target.value)}
   value={displayName ? displayName : ''}
   type={EInputTypes.EMAIL}
   placeholder={"jak się nazywasz?"}
   name={"displayName"}
 ></Input></> : <CustomLink to="/login">Zaloguj się</CustomLink>
  );
});

//stan globalny, żeby po zmianie podstrony nie stracić danych lub ostrzeżenie
