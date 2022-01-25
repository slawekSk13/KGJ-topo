import { AppMessage } from "../../state/AppMessage";
import * as mobx from "mobx";

const successMessages: string[] = [
  "Brawo!",
  "Kim jesteś? Jesteś zwycięzcą!",
  "Good effort!",
  "Good job!",
  "Twój lud jest z ciebie dumny",
  "Przynosisz chwałę swojej rodzinie",
  "Tak trzymaj!",
  "Kolejny krok naprzód",
  "Nie zatrzymuj się!",
  "SIŁA!!!",
  "O to chodzi!",
  "Dobrze!",
  "Dobra robota!",
  "Koledze się, widzę, dzisiaj dobrze zgina!",
];

const getSuccessMessage = (successMessages: string[]) => {
  const max = successMessages.length;
  const random = Math.floor(Math.random() * max);
  return successMessages[random];
};

export const getMessage = (appMessage: AppMessage) => {
  if (appMessage.checkCode("holds")) {
    return "1-2 chwyty na start i przynajmniej jeden na top!";
  } else if (appMessage.checkCode("noname")) {
    return "Podaj nazwę";
  } else if (
    appMessage.checkCode("auth/invalid-email") ||
    appMessage.checkCode("auth/user-not-found")
  ) {
    return "Niepoprawny adres e-mail...";
  } else if (appMessage.checkCode("auth/wrong-password")) {
    return "Błędne hasło!";
  } else if (appMessage.checkCode("boulder-added")) {
    return "Problem zapisany!";
  } else if (appMessage.checkCode("boulder-not-added")) {
    return "Wystąpił problem z zapisem problemu! Spróbuj jeszcze raz";
  } else if (appMessage.checkCode("boulder-done")) {
    return getSuccessMessage(successMessages);
  } else {
    return `Wystąpiły błędy: ${mobx.toJS(appMessage.getCode()).join(", ")}`;
  }
};
