import type { FC } from "react";
import { SignInForm } from "features/signIn";
import { AuthPageContainer } from "shared/layout/containers";

const SignIn: FC = () => {
  return (
    <AuthPageContainer>
      <SignInForm />
    </AuthPageContainer>
  );
};

export default SignIn;
