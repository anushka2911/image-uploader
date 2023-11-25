import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Auth/HomePage';
import LoginForm from './components/Auth/LoginForm';
import SignUpForm from './components/Auth/SignUpForm';
import ImageUploadForm from './components/AdminDashboard/AdminDashboard';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/login" element={<LoginForm />} />
    //     <Route path="/signup" element={<SignUpForm />} />
    //   </Routes>
    // </Router>

    <ImageUploadForm/>
  );
}

export default App;
