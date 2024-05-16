/* eslint-disable no-unused-vars */
import { useState } from "react";

function SampleIntro() {
  const [image, setImage] = useState("/retro1.jpg");
  const [name, setName] = useState("{name}");

  return (
    <div className="intro-container">
      <div className="Image-input">
        <input
          type="file"
          id="image-file"
          accept="image/x-png, image/jpeg"
          style={{ display: "none" }}
        />
        <label htmlFor="image-file" className="image-input">
          Upload a nice cover
        </label>
      </div>
      <div className="intro-box">
        <h2>{name}</h2>
        <p>{"{ about you }"}</p>
      </div>
    </div>
  );
}

export { SampleIntro };
