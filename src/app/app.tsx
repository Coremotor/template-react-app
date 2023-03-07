import React from "react";
import type { FC } from "react";
import "app/global.css";
import Root from "app/router/root";
import { App, Spin } from "antd";
import { useLoadingStore } from "app/store";

const InitApp: FC = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);

  return (
    <Spin size="large" spinning={isLoading}>
      <App>
        <Root />
      </App>
    </Spin>
  );
};

export default InitApp;
