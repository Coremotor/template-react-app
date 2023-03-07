import React from "react";
import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "pages/home";
import About from "pages/about";
import NoMatch from "pages/noMatch";
import { E_Routes } from "app/router/routes";
import Layout from "shared/layout/layout";
import { Protected } from "app/router/protected";
import Profile from "pages/profile";
import SignIn from "pages/signIn";
import SignUp from "pages/signUp";
import Posts from "pages/posts";
import { LOCALSTORAGE_TOKEN_KEY } from "shared/constants";

const Root: FC = () => {
  const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) !== null;
  return (
    <Routes>
      <Route path={E_Routes.signIn} element={<SignIn />} />
      <Route path={E_Routes.signUp} element={<SignUp />} />
      <Route path={E_Routes.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={E_Routes.about} element={<About />} />
        <Route path={E_Routes.posts} element={<Posts />} />
        <Route path={E_Routes.noMatch} element={<NoMatch />} />
        <Route
          path={E_Routes.profile}
          element={
            <Protected isAllowed={token}>
              <Profile />
            </Protected>
          }
        />
      </Route>
    </Routes>
  );
};

export default Root;
