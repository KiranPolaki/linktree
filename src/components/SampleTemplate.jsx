/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { Intro } from "./Intro";
// import { Links } from "./Links";
import { useState } from "react";
import { SampleIntro } from "./SampleIntro.jsx";
import { SampleLinks } from "./SampleLinks.jsx";

function SampleTemplate({ sampleTree, setSampleTree, links, setLinks }) {
  return (
    <div className="sample-container">
      <div className="sample-card">
        <img src="/left-arrow.png" alt="left-navigate" className="navigate" />
        <div className="card">
          <SampleIntro sampleTree={sampleTree} setSampleTree={setSampleTree} />
          <SampleLinks links={links} setLinks={setLinks} />
        </div>
        <img src="/right-arrow.png" alt="right-navigate" className="navigate" />
      </div>
    </div>
  );
}

export { SampleTemplate };
