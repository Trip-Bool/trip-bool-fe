import React from "react";
import Button from "@mui/material/Button"
import { useAuth0 } from "@auth0/nextjs-auth0";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      sx={{
        marginLeft: 4,
      }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default LoginButton;