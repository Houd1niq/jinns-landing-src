import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { MainPage } from "./pages/MainPage";
import { AdminLoginPage } from "./pages/AdminLoginPage";
import { AdminAllower } from "./pages/AdminAllower";
import { AdminPage } from "./pages/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainPage />}></Route>
        <Route path="/admin" element={<AdminAllower />}>
          <Route path="" element={<AdminPage />}></Route>
        </Route>
        <Route path="admin-login" element={<AdminLoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
