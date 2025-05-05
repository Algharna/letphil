import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home 🏠
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/search">
                  Search 🔎
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/posts">
                  All Posts 📃
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/create">
                  Create Post 📃
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
