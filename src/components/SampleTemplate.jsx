/* eslint-disable no-unused-vars */
// import { Intro } from "./Intro";
// import { Links } from "./Links";
import { SampleIntro } from "./SampleIntro.jsx";
import { SampleLinks } from "./SampleLinks.jsx";

function SampleTemplate() {
  return (
    <div className="sample-container">
      <div className="sample-card">
        <img src="/left-arrow.png" alt="left-navigate" className="navigate" />
        <div className="card">
          <SampleIntro />
          {/* <SampleLinks /> */}
        </div>
        <img src="/right-arrow.png" alt="right-navigate" className="navigate" />
      </div>
      {/* <Intro />
      <Links /> */}
    </div>
  );
}

export { SampleTemplate };
