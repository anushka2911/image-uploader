import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const LoginForm = () => {
  const navigate = useNavigate(); 

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful");
        console.log("Message:", data.message);
        console.log("Role:", data.role);

        if (data.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      } else {
        console.error("Login failed:", data.error);
        setError(data.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An unexpected error occurred."); 
    } finally {
      setLoading(false);
    }
  };

  const handleCloseError = () => {
    setError(null); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="login-form flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border rounded"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && (
          <div className="error-modal">
            <p className="error-message">{error}</p>
            <button onClick={handleCloseError} className="close-btn">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
