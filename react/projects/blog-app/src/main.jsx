import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Pages from "./pages/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="create" element={<Pages.CreatePost />} />
          <Route path="posts">
            <Route index element={<Pages.AllPost />} />
            <Route path=":id" element={<Pages.ViewPost />} />
            <Route path=":id/edit" element={<Pages.EditPost />} />
          </Route>
          <Route path="search" element={<Pages.SearchPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
