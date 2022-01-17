import { IFirebaseReturn, IUserReturn } from "../types";

export const handleDataError = (err: any): IFirebaseReturn => {
  return { code: err.code, error: true, data: [] };
};
export const handleUserError = (err: any): IUserReturn => {
  return { code: err.code, error: true, user: null };
};
