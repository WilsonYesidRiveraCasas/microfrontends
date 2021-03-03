import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./root.component.css";

export default function Root(props) {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/registrar" className="link">
          Registrar
        </Link>
        <Link to="/consultar" className="link">
          Consultar
        </Link>
      </nav>
    </BrowserRouter>
  );
}