import "./ProfileImage.css";
import { IProfileImageProps } from "./ProfileImageTypes";

export const ProfileImage = ({ photoURL, alt }: IProfileImageProps) => (
  <img src={photoURL} alt={alt} className="user-avatar" />
);
