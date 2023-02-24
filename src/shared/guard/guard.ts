import { LOCALSTORAGE_TOKEN_KEY } from "shared/constants";

export const isAllowed = (): boolean => {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) !== null;
};
