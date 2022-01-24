import { observer } from 'mobx-react-lite';
import { ReactElement, useContext } from 'react';
import { StateContext } from '../../state/context';
import { HoldState } from '../../state/HoldState';
import { EHoldTypes } from '../Hold/HoldTypes';
import './HoldButton.css'
import { IHoldButton } from './HoldButtonTypes';

export const HoldButton = observer(({ name, label }: IHoldButton): ReactElement => {
    const { currentHold} = useContext(StateContext);
  
    const isDisabled = (currentHold: HoldState): boolean => {
      return name === currentHold.getHold();
    };
  
    const handleHoldTypeChange = (name: EHoldTypes): void =>
      currentHold.setHold(name);
  
    return (
      <button
        disabled={isDisabled(currentHold)}
        className={`button button__${name}`}
        onClick={() => handleHoldTypeChange(name)}
      >
        {label}
      </button>
    );
  });