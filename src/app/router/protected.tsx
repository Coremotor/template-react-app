import { Navigate } from "react-router-dom";
import React from "react";
import type { FC } from "react";
import { E_Routes } from "app/router/routes";
interface I_Protected {
  isAllowed: boolean;
  redirectPath?: string;
  children?: any;
}
export const Protected: FC<I_Protected> = ({
  isAllowed,
  redirectPath = E_Routes.home,
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
