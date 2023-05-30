import "./Admin.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let baseUrl = "";

if (import.meta.env.DEV) {
  baseUrl = "http://localhost:3000";
}

export const AdminLoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch(baseUrl + "/admin/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    });
    const data = (await response.json()) as { accessToken: string };
    localStorage.setItem("accessToken", data.accessToken);
    navigate("/admin", { replace: true });
  }

  return (
    <div className="Admin">
      <form onSubmit={handleSubmit} className="admin-form">
        <input
          onChange={(e) => setLogin(e.target.value)}
          type="text"
          placeholder="login"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
