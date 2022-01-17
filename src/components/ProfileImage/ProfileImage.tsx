import { useState } from "react";
import "./ProfileImage.css";
import { IProfileImageProps } from "./ProfileImageTypes";

export const ProfileImage = ({ photoURL, alt }: IProfileImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
    {!imageLoaded && <img
    src='/logo512.png'
    alt={alt}
    className="user-avatar placeholder"
    onLoad={() => setImageLoaded(true)}
  />}
      <img
        src={photoURL}
        alt={alt}
        className="user-avatar"
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
};
