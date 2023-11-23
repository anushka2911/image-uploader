import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const LoginForm = () => {
  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          var decodedCredentialResponse = jwtDecode(
            credentialResponse.credential
          );
          console.log(decodedCredentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </>
  );
};

export default LoginForm;
