
  
  export interface IButtonType {
    handleButtonClick: VoidFunction;
    label: string;
    className?: string
  }

  export interface IValidateBoulderReturn {
    holdsNotValid: boolean;
    nameNotValid: boolean;
  }