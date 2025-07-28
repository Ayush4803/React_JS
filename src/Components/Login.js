import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);

    // ✅ Simulate login (real app would verify this with a backend)
    localStorage.setItem('isLoggedIn', 'true');

    navigate('/'); // Redirect to Home page
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log In</button>
        <p className="note">Demo only — no backend connected yet</p>
      </form>
    </div>
  );
};

export default Login;
