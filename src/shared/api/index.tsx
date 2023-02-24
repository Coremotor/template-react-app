import axios from "axios";
import { E_Routes } from "app/router/routes";
import { useLoadingStore } from "app/store";
import { notification } from "antd";
import { LOCALSTORAGE_TOKEN_KEY } from "shared/constants";

export const request = axios.create({
  // baseURL: "config.baseUrl",
  responseType: "json",
});

const setIsLoading = useLoadingStore.getState().setIsLoading;

const showErrorMsg = (description: string): void => {
  notification.open({
    type: "error",
    message: "Response",
    description,
  });
};

request.interceptors.request.use(
  (config) => {
    setIsLoading(true);

    const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
    if (token !== null) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  async (error) => {
    setIsLoading(false);
    return await Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    setIsLoading(false);
    return response;
  },
  async (error) => {
    setIsLoading(false);
    console.log(error);
    showErrorMsg(error.message);
    if (error.response.data.statusCode === 401) {
      localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
      location.replace(E_Routes.signIn);
    }
    return await Promise.reject(error);
  }
);
