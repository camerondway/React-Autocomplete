import React from "react";
import { render } from "react-dom";
import "./index.css";
import Autocomplete from "./components/Autocomplete";

function App() {
  return (
    <div className="container">
      <h1>React Autocomplete Demo</h1>
      <h2>Start typing and experience the autocomplete wizardry!</h2>
      <Autocomplete
        suggestions={[
          "8Ball & MJG",
          "Cities Aviv",
          "BlocBoy JB",
          "Criminal Manne",
          "Crunchy Black",
          "Mr. Del",
          "Drumma Boy",
          "Evil Pimp",
          "Playa Fly",
          "Frayser Boy",
          "Gangsta Boo",
          "Gangsta Pat",
          "Yo Gotti",
          "Indo G",
          "Jazze Pha",
          "Juicy J",
          "Al Kapone",
          "Koopsta Knicca",
          "La Chat",
          "Lecrae",
          "Lil Wyte",
          "Lord Infamous",
          "Lord T & Eloise",
          "Moneybagg Yo",
          "OG Boo Dirty",
          "DJ Paul",
          "Project Pat",
          "Seed of 6ix",
          "Kia Shine",
          "Snootie Wild",
          "Tela (rapper)",
          "The Kaze",
          "Three 6 Mafia",
          "Young Dolph"
        ]}
      />
    </div>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);
