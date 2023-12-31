import React, { useState } from 'react';
import '../../styles/signup.css';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); 
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          role, 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Sign up successful:', data.message);
      } else {
        console.error('Sign up failed:', data.error);
        setError(data.error); 
      }
    } catch (error) {
      console.error('Error during sign up:', error.message);
      setError('An unexpected error occurred.'); 
    }
  };

  const handleCloseError = () => {
    setError(null); 
  };

  return (
    <>
      <div className='signup'>
        <div className="sign_up_form max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="border rounded w-full py-2 px-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="border rounded w-full py-2 px-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">
                Role:
              </label>
              <select
                id="role"
                className="border rounded w-full py-2 px-3"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </form>
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
    </>
  );
};

export default SignUpForm;
