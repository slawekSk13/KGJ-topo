import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Input } from "../components/Input/Input";
import { EInputTypes } from "../components/Input/InputTypes";
import { StateContext } from "../state/context";

export const Profile = observer(() => {
  const { loggedUser } = useContext(StateContext);
  const [displayName, setDisplayName] = useState<string>(loggedUser.getUserDisplayName());
  return (
    <Input
      onChange={(e) => setDisplayName(e.target.value)}
      value={displayName}
      type={EInputTypes.EMAIL}
      placeholder={"jak się nazywasz?"}
      name={"displayName"}
    ></Input>
  );
});

//stan globalny, żeby po zmianie podstrony nie stracić danych lub ostrzeżenie
