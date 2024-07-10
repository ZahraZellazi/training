import React, { useState } from 'react';

function Greetings() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // add your code here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // add your code here
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <div>
          <h1>Welcome Back!</h1>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Greetings;
