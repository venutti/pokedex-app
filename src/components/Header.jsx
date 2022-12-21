import React from "react";
import Logo from "../resources/pokemon-logo.jpg";

export default function Header() {
  return (
    <header className="headerContent">
      <img className="logo" src={Logo} alt="Logo de pokemon" />
    </header>
  );
}
