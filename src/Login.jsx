import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import icons
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const siteKey = "6LfVhmoqAAAAABi8wXMpfUCscx8a03poUwZ9mJV-";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      setErrorMessage("Please complete the reCAPTCHA");
      return;
    }
    if (username === "admin@gmail.com" && password === "Admin123@") {
      alert("Login successful!");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setErrorMessage("");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et mi orci. Sed ut metus ac odio aliquet malesuada.
        </p>
      </div>

      <div className="login-right">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>SIGN IN</h2>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="E-mail"
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <div className="recaptcha">
            <ReCAPTCHA sitekey={siteKey} onChange={handleRecaptchaChange} />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember</label>
          </div>

          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
