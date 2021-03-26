import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const Cardlist = (props) => (
  <div className="card-list">
    {props.cats.map((c) => (
      <Card key={c.id} cat={c} />
    ))}
  </div>
);
