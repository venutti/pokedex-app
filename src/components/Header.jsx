import React from "react";
import Logo from "../resources/pokemon-logo.jpg";

export default function Header() {
  return (
    <header className="headerContent">
      <p>This application is running in: {process.env.NODE_ENV}</p>
      <p>{process.env.REACT_APP_MESSAGE}</p>
      <img className="logo" src={Logo} alt="Logo de pokemon" />
    </header>
  );
}
