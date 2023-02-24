import type { FC } from "react";
import { Link } from "react-router-dom";
import { E_Routes } from "app/router/routes";
import { Button, Form, Input, Typography } from "antd";
const { Text } = Typography;

export const SignUpForm: FC = () => {
  const onFinish = (values: any): void => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo: any): void => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Repeat password"
        name="repeat-password"
        rules={[{ required: true, message: "Please repeat your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>

      <Text>
        <Link to={E_Routes.signIn}>Sign In</Link>
      </Text>
    </Form>
  );
};
