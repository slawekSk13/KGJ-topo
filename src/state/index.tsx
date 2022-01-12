import { AllUsers } from "./AllUsers";
import { AppError } from "./AppError";
import { HistoricalBoulders } from "./HistoricalBoulders";
import { HoldState } from "./HoldState";
import { LoggedUser } from "./LoggedUser";
import { Boulder } from "./Problem";

export const boulder = new Boulder();
export const currentHold = new HoldState();
export const appError = new AppError();
export const loggedUser = new LoggedUser();
export const historicalBoulders = new HistoricalBoulders();
export const allUsers = new AllUsers();
