import React from "react";
import type { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { E_Routes } from "app/router/routes";
import { Button, Form, Input, Typography } from "antd";
import { useUserStore } from "entities/user";
import {
  formFieldsNames,
  onFinish,
  onFinishFailed,
} from "features/signIn/model";
import type { FormFields } from "features/signIn/model";
const { Text } = Typography;

export const SignInForm: FC = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const [form] = Form.useForm<FormFields>();
  const onSubmit = (values: FormFields): void => {
    onFinish(values, setUser, navigate);
  };

  return (
    <Form
      form={form}
      name="signIn"
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Username"
        name={formFieldsNames.username}
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name={formFieldsNames.password}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>

      <Text>
        <Link to={E_Routes.signUp}>Sign Up</Link>
      </Text>
    </Form>
  );
};
