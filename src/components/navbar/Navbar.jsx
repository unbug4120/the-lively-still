import React, { useEffect } from "react";
import "./Navbar.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Signinbutton } from "../signinbutton/signin";
const signout = () => {
  localStorage.removeItem("userinfo");
  window.location.reload();
};

export function Navbar() {
  const issignedin = localStorage.getItem("userinfo");
  let isadmin = false;
  if (issignedin) {
    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    if (userinfo.email === "tunghx0701@gmail.com") {
      isadmin = true;
    }
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="cowandmilk">
          <span className="milk">🥛</span>
          <span className="cow">🐄</span>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-list-alt"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/films">
                Films
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/writings">
                Writings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {isadmin ? (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
            ) : null}
          </ul>

          <div className="signinbutton">
            {issignedin ? (
              <button className="signing signoutcolor" onClick={signout}>
                <span>Sign Out</span>
                <i className="fas fa-sign-in-alt"></i>
              </button>
            ) : (
              <Signinbutton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
