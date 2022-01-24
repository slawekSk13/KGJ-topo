import { HoldButton } from "../HoldButton/HoldButton";
import { IHoldButton } from "../HoldButton/HoldButtonTypes";
import "./HoldSwitch.css";
import { IHoldSwitchProps } from "./HoldSwitchTypes";

export const HoldSwitch = ({ holdSwitchButtons }: IHoldSwitchProps) => {
  return (
    <div className="hold-switch">
      {holdSwitchButtons.map((holdButton: IHoldButton) => {
        const { name, label } = holdButton;
        return <HoldButton key={name} name={name} label={label} />;
      })}
    </div>
  );
};
