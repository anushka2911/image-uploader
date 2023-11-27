import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Auth/HomePage';
import LoginForm from './components/Auth/LoginForm';
import SignUpForm from './components/Auth/SignUpForm';
import ImageUploadForm from './components/AdminDashboard/AdminDashboard';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/admin-dashboard" element={<ImageUploadForm />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
      </Routes>
    </Router>

  );
}

export default App;
