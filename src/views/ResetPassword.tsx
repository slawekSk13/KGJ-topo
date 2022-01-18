import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Input } from "../components/Input/Input";
import { EInputTypes } from "../components/Input/InputTypes";
import { StateContext } from "../state/context";
import { handleResetPassword } from "../utilities/firebase/firebaseAuth";
import { changeLocation } from "../utilities/helpers";

export const ResetPassword = observer(() => {
  const { appError } = useContext(StateContext);
  const [email, setEmail] = useState<string>("");
  const handleClick = async () => {
    try {
      const response = await handleResetPassword(email);
      if (response.error) {
        appError.setCode(response.code);
      } else {
          appError.clearCode();
        changeLocation("login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const isEmailInvalid = () => {
    return (
      appError.checkCode("auth/user-not-found") ||
      appError.checkCode("auth/invalid-email") ||
      appError.checkCode("auth/missing-email")
    );
  };
  return (
    <>
      {isEmailInvalid() && <p>Podano błędny e-mail</p>}
      <Input
        type={EInputTypes.EMAIL}
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="e-mail"
      />

      <button className="button button__login" onClick={handleClick}>
        Resetuj
      </button>
    </>
  );
});
