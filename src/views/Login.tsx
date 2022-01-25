import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Input } from "../components/Input/Input";
import { EInputTypes } from "../components/Input/InputTypes";
import { SmallLink } from "../components/SmallLink/SmallLink";
import { StateContext } from "../state/context";
import { handleLogin } from "../utilities/firebase/firebaseAuth";
import { getUsersListFromFirebase } from "../utilities/firebase/firebaseDB";
import { changeLocation } from "../utilities/helpers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const Login = observer(() => {
  const { boulder, loggedUser, appMessage, loading, allUsers } =
    useContext(StateContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClick = async (): Promise<void> => {
    loading.setLoading();
    try {
      const loginEffect = await handleLogin({ email, password });
      if (loginEffect.error) {
        appMessage.setCode(loginEffect.code);
      } else if (loginEffect.user) {
        loggedUser.setUser(loginEffect.user);
        boulder.setAuthor(loginEffect.user.uid);
        const usersList = await getUsersListFromFirebase();
        usersList && allUsers.setUsers(usersList.data);
        changeLocation();
      }
    } catch (err) {
      console.log("err");
    } finally {
      loading.clearLoading();
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const enterListener = (e: KeyboardEvent) => {
    e.key === "Enter" && handleClick();
  };

  window.addEventListener("keydown", enterListener);

  return (
    <>
      <Input
        type={EInputTypes.EMAIL}
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="e-mail"
      />
      <Input
        type={showPassword ? EInputTypes.TEXT : EInputTypes.PASSWORD}
        name="passw"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="hasło"
      >
        <FontAwesomeIcon
          className="clickable password-visibility-toggler"
          icon={showPassword ? faEyeSlash : faEye}
          onClick={handlePasswordVisibility}
        />
      </Input>
      <button className="button button__login" onClick={handleClick}>
        Zaloguj się
      </button>
      <SmallLink
        location="reset-password"
        text="
        Zresetuj hasło"
      />
    </>
  );
});
