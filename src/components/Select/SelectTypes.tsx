import { IUserToSave } from "../../utilities/types";

export interface ISelectProps {
  label: string;
  options: IUserToSave[];
  onChange: (uid: string) => void;
  value: string;
}
