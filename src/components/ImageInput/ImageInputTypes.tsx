import { ChangeEvent } from "react";

export interface IImageInputProps {
    photoURL: string;
    handleImageInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }