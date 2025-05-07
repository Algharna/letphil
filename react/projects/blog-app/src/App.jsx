import { React, useState, useEffect } from "react";
import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar/navbar.jsx";

function App() {
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet context={{ posts, setPosts }} />
      </div>
    </>
  );
}

export default App;
