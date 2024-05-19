/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

function SampleIntro({ sampleTree }) {
  const [image, setImage] = useState("/retro1.jpg");

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
          + Upload a nice cover
        </label>
      </div>
      <div className="intro-box">
        <h2>{sampleTree?.name === "" ? "{name}" : sampleTree?.name}</h2>
        <p>{sampleTree?.bio === "" ? "{ about you }" : sampleTree?.bio}</p>
        <p>
          {sampleTree?.experience === ""
            ? "{ Exp in tech / role }"
            : sampleTree.experience}
        </p>
      </div>
    </div>
  );
}

export { SampleIntro };
