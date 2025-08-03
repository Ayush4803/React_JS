import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkValidData } from "../../utils/validate"; // ✅ import validator

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errMsg, setErrMsg] = useState(null); // store error message

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ get values from refs
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // ✅ validate
    const validationError = checkValidData(email, password);
    setErrMsg(validationError);
    if (validationError) return; // stop if invalid

    console.log("Logging in with:", email, password);

    // ✅ Simulate successful login (later replace with Firebase/Backend)
    localStorage.setItem("isLoggedIn", "true");

    navigate("/"); // redirect to home
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          ref={emailRef} // ✅ using useRef
          required
        />

        <input
          type="password"
          placeholder="Password"
          ref={passwordRef} // ✅ using useRef
          required
        />

        {/* Show error if any */}
        {errMsg && <p className="error-message">{errMsg}</p>}

        <button type="submit">Log In</button>
        <p className="note">Demo only — no backend connected yet</p>
      </form>
    </div>
  );
};

export default Login;
