import React from "react";
import Badge from "react-bootstrap/Badge";
import formatPokemonName from "../utils/formatPokemonName";
import colours from "../resources/colourTypes";

export default function TypePill({ type }) {
  const bgc = `${colours[type]}`;
  return (
    <Badge pill bg={bgc} style={{ backgroundColor: bgc }}>
      {formatPokemonName(type)}
    </Badge>
  );
}
