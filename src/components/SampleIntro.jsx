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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 uplaod-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
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
