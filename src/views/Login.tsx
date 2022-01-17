import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Input } from "../components/Input/Input";
import { EInputTypes } from "../components/Input/InputTypes";
import { StateContext } from "../state/context";
import { handleLogin } from "../utilities/firebase/firebaseAuth";
import { changeLocation } from "../utilities/helpers";

export const Login = observer(() => {
  const { boulder, loggedUser, appError, loading } = useContext(StateContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleClick = async (): Promise<void> => {
    loading.setLoading();
    const loginEffect = await handleLogin({ email, password });
    if (loginEffect.error) {
      appError.setCode(loginEffect.code);
      loading.clearLoading();
      console.log(loginEffect.error)
      // add info for user if login was unsuccesfull
    } else if (loginEffect.user) {
      loggedUser.setUser(loginEffect.user);
      boulder.setAuthor(loginEffect.user.uid);
      changeLocation('old');
      loading.clearLoading();
    }
  };
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
        type={EInputTypes.PASSWORD}
        name="passw"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="hasło"
      />
      <button className="button button__login" onClick={handleClick}>
        Zaloguj się
      </button>
    </>
  );
});
