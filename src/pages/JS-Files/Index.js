import React from "react";
import "../CSS-Files/Index.css";
import { Link } from "react-router-dom";

export default function Index() {
  // const Indexinlinestyle = {
  // }
  // style={Indexinlinestyle}

  return (
    <div>
      <div className="main-container">
        <h1>Welcome to Sangito :/\: </h1>
        <p>"Where words fail, music speaks." - kp</p>

        <section>
          <button>
            <Link to="/login">LOGIN</Link>
          </button>

          <button>
            <Link to="/registration ">REGISTER</Link>
          </button>
        </section>
      </div>
    </div>
  );
}
