import { AppError } from "./AppError";
import { HistoricalBoulders } from "./HistoricalBoulders";
import { HoldState } from "./HoldState";
import { LoggedUser } from "./LoggedUser";
import { Problem } from "./Problem";

export const boulder = new Problem();
export const currentHold = new HoldState();
export const appError = new AppError();
export const loggedUser = new LoggedUser();
export const historicalBoulders = new HistoricalBoulders();
