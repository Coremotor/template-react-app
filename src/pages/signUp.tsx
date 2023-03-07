import React from "react";
import type { FC } from "react";
import { AuthPageContainer } from "shared/layout/containers";
import { SignUpForm } from "features/signUp";

const SignUp: FC = () => {
  return (
    <AuthPageContainer>
      <SignUpForm />
    </AuthPageContainer>
  );
};

export default SignUp;
