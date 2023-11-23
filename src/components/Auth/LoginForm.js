import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="google-login flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login with Google</h2>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            var decodedCredentialResponse = jwtDecode(
              credentialResponse.credential
            );
            console.log(decodedCredentialResponse);
            setLoading(false);
          }}
          onError={() => {
            console.log("Login Failed");
            setLoading(false);
          }}
          onRequest={() => {
            setLoading(true);
          }}
        />
        {loading && <p className="text-center mt-2">Logging in...</p>}
      </div>
    </div>
  );
};

export default LoginForm;
