import logo from './logo.svg';
import './App.css';
import Home from './components/Auth/HomePage.js';
import LoginForm from './components/Auth/LoginForm.js';
import SignUpForm from './components/Auth/SignUpForm.js';
function App() {
  return (
    <div className="App">
      <Home />
      {/* <SignUpForm /> */}
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
