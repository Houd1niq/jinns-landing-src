import { Button } from "../Button/Button";
import "./Form.scss";
import React, { useState } from "react";

let baseUrl = "";

if (import.meta.env.DEV) {
  baseUrl = "http://localhost:3000";
}

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch(`${baseUrl}/admin/add-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        question,
      }),
    });
    if (response.ok) {
      alert("Your application has been sent!");
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className="pre-register-form">
      <h3 className="pre-register-form__title">Pre-register</h3>
      <p className="pre-register-form__label">
        Send an application for pre-registration and try to become one of the
        first
      </p>
      <input
        onChange={(e) => setName(e.target.value)}
        className="pre-register-form__input"
        placeholder="discord username#1234*"
        type="text"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="pre-register-form__input"
        placeholder="email*"
        type="email"
      />
      <textarea
        onChange={(e) => {
          setQuestion(e.target.value);
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + 25 + "px";
        }}
        className="pre-register-form__input"
        placeholder="any questions?"
      ></textarea>
      <Button>SEND!</Button>
    </form>
  );
};
