import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home_page container mx-auto p-8 bg-white mt-10 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/anushka2911/images/main/uploads/img_uploader.jpg"
            alt="Uploaded Image"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center">
            Welcome to Image Uploader
          </h1>
          <p className="text-center mb-8">
            Share and discover amazing images!
          </p>

          <Link to="/login" className="login flex flex-col justify-center items-center btn btn-primary m-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue">
            Log In
          </Link>

          <Link to="/signup" className="signup_user flex flex-col justify-center items-center m-2 btn btn-primary bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue">
            Sign Up
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Home;
