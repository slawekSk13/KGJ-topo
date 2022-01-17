import { observer } from "mobx-react-lite";
import { ChangeEvent, useContext, useState } from "react";
import { CustomLink } from "../components/CustomLink/CustomLink";
import { ImageInput } from "../components/ImageInput/ImageInput";
import { Input } from "../components/Input/Input";
import { EInputTypes } from "../components/Input/InputTypes";
import { StateContext } from "../state/context";
import { updateUserProfile, uploadProfileImage } from "../utilities/firebase";
import { changeLocation } from "../utilities/helpers";

export const Profile = observer(() => {
  const { loggedUser, loading, allUsers } = useContext(StateContext);
  const setDefaultNewDisplayName = (): string => {
    return loggedUser.user ? loggedUser.getUserDisplayName() : "";
  };
  const setDefaultNewImageURL = () => {
    if (loggedUser.user && loggedUser.getUserImage()) {
      return loggedUser.getUserImage();
    } else return "/logo512.png";
  };
  const [newDisplayName, setNewDisplayName] = useState(
    setDefaultNewDisplayName()
  );
  const [newImageURL, setNewImageURL] = useState(setDefaultNewImageURL());
  const [newImage, setNewImage] = useState<File | undefined>();
  const handleImageInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    const files = target.files;
    const file = files ? files[0] : null;
    const fileURL = file && URL.createObjectURL(file);
    fileURL && setNewImageURL(fileURL);
    file && setNewImage(file);
  };
  const handleCancel = () => {
    setNewDisplayName(setDefaultNewDisplayName());
    setNewImageURL(setDefaultNewImageURL());
    changeLocation();
    return null;
  };
  const handleConfirm = async () => {
    try {
      loading.setLoading();
      let newPhotoFirebaseURL = "";
      newImage &&
        (newPhotoFirebaseURL = await uploadProfileImage(
          newImage,
          loggedUser.getUserUid()
        ));
      const userToSave = {
        uid: loggedUser.getUserUid(),
        displayName: newDisplayName,
        photoURL: newPhotoFirebaseURL,
      };
      await updateUserProfile(userToSave);
      loading.clearLoading();
    } catch (err) {
      console.log(err);
      loading.clearLoading();
    }
    return null;
  };
  const profileComponent = (
    <>
      <ImageInput
        photoURL={newImageURL}
        handleImageInputChange={handleImageInputChange}
      />
      <Input
        onChange={(e) => setNewDisplayName(e.target.value)}
        value={newDisplayName}
        type={EInputTypes.TEXT}
        placeholder={"jak się nazywasz?"}
        name={"displayName"}
      ></Input>{" "}
      <div>
        <button className="button button__login" onClick={handleCancel}>
          Anuluj
        </button>
        <button className="button button__login" onClick={handleConfirm}>
          Zapisz zmiany
        </button>
      </div>
    </>
  );
  return loggedUser.user ? (
    profileComponent
  ) : (
    <CustomLink to="/login">Zaloguj się</CustomLink>
  );
});

//stan globalny, żeby po zmianie podstrony nie stracić danych lub ostrzeżenie
