/* eslint-disable no-unused-vars */
import { useState } from "react";

function Intro() {
  const [image, setImage] = useState("/retro1.jpg");
  const [name, setName] = useState("Saikiran");
  return (
    <div className="intro-container">
      <div className="Image">
        <img src={image} className="img" />
      </div>
      <div className="intro-box">
        <h2>{name}</h2>
        <p>Web-Anime-Devops</p>
      </div>
    </div>
  );
}

export { Intro };
