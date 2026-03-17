import React, { useState } from "react";
import "./App.css";
import Dashboard from "./dashboard";
import Profile from "./Profile";
import Appointment from "./Appointment";

function App() {

  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "drvictor@practo.com" && password === "123456") {
      setPage("dashboard");
    } else {
      alert("Invalid Login");
    }
  };

  if (page === "dashboard")
    return <Dashboard setPage={setPage} />;

  if (page === "profile")
    return <Profile setPage={setPage} />;

  if (page === "appointment")
    return <Appointment setPage={setPage} />;

  return (
    <div className="login-container">

      <div className="login-box">
        <h2>Doctor Portal</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Doctor Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

        </form>
      </div>

    </div>
  );
}

export default App;
