import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let baseUrl = "";

if (import.meta.env.DEV) {
  baseUrl = "http://localhost:3000";
}

export const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("here");

    const response = await fetch(baseUrl + "/admin/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({ title, heading, text }),
    });
    if (response.status === 401) {
      alert("Нет доступа");
      localStorage.clear();
      navigate("/admin-login", { replace: true });
    }
    setHeading("");
    setTitle("");
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      <label htmlFor="">
        Тема письма
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Тема письма"
          type="text"
        />
      </label>
      <label htmlFor="">
        Заголовок
        <input
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          placeholder="Заголовок"
          type="text"
        />
      </label>
      <label htmlFor="">
        Текст письма
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Текст письма"
        />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};
