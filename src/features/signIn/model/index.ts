import { E_Routes } from "app/router/routes";
import { LOCALSTORAGE_TOKEN_KEY } from "shared/constants";
import type { NavigateFunction } from "react-router-dom";

export interface FormFields {
  username: string;
  password: string;
}
export const formFieldsNames: FormFields = {
  username: "username",
  password: "password",
};

export const onFinish = (
  values: FormFields,
  setUser: (name: string) => void,
  navigate: NavigateFunction
): void => {
  localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, "template_token");
  setUser(values.username);
  navigate(E_Routes.home);
};

export const onFinishFailed = (errorInfo: any): void => {
  console.log("Failed:", errorInfo);
};
