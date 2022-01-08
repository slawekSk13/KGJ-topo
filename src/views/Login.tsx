import { useState } from "react";
import { Input } from "../components/Input/Input";
import { EInputTypes } from "../components/Input/InputTypes";
import { handleLogin } from "../utilities/firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async () => {
    const loginEffect = await handleLogin({ email, password });
    console.log(loginEffect);
  };
  return (
    <>
      <Input
        type={EInputTypes.EMAIL}
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='e-mail'
      />
      <Input
        type={EInputTypes.PASSWORD}
        name="passw"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='hasło'
      />
      <button className="button button__login" onClick={handleClick}>
        Zaloguj się
      </button>
    </>
  );
};
