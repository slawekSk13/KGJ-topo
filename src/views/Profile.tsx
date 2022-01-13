import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { CustomLink } from "../components/CustomLink/CustomLink";
import { Input } from "../components/Input/Input";
import { EInputTypes } from "../components/Input/InputTypes";
import { StateContext } from "../state/context";

export const Profile = observer(() => {
  const { loggedUser, allUsers } = useContext(StateContext);
  const displayName = loggedUser.user
    ? allUsers.getUserDisplayName(loggedUser.getUserUid())
    : "";
  const photoURL = loggedUser.user
    ? allUsers.getUserPhotoURL(loggedUser.getUserUid())
    : "/logo512.png";
    const handleClick = () => {
return null
    }
  const profileComponent = (
    <>
      <img src={`${photoURL}`} alt="User avatar" className="user-avatar" />
      <Input
        onChange={(e) =>
          allUsers.setUserDisplayName(loggedUser.getUserUid(), e.target.value)
        }
        value={displayName ? displayName : ""}
        type={EInputTypes.TEXT}
        placeholder={"jak się nazywasz?"}
        name={"displayName"}
      ></Input>
      <button className="button button__login" onClick={handleClick}>
        Zapisz zmiany
      </button>
    </>
  );
  return loggedUser.user ? (
    profileComponent
  ) : (
    <CustomLink to="/login">Zaloguj się</CustomLink>
  );
});

//stan globalny, żeby po zmianie podstrony nie stracić danych lub ostrzeżenie
