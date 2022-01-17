import "./ImageInput.css";
import { ProfileImage } from "../ProfileImage/ProfileImage";
import { IImageInputProps } from "./ImageInputTypes";

export const ImageInput = ({
  photoURL,
  handleImageInputChange,
}: IImageInputProps) => {
  return (
    <>
      <input
        type="file"
        id="fileInput"
        className="file-input"
        onChange={handleImageInputChange}
      />
      <label htmlFor="fileInput" className="clickable">
        <ProfileImage photoURL={photoURL} alt={"alt"} />
      </label>
    </>
  );
};
