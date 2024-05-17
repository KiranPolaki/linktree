// import { Intro } from "./Intro";
// import { Links } from "./Links";
import { useState } from "react";
import { SampleIntro } from "./SampleIntro.jsx";
import { SampleLinks } from "./SampleLinks.jsx";
import { DummyCard } from "./cards/DummyCard.jsx";

function SampleTemplate({ sampleTree, setSampleTree, links, setLinks }) {
  const [cardComponents, setCardComponents] = useState([]);
  return (
    <div className="sample-container">
      <div className="sample-card">
        <img src="/left-arrow.png" alt="left-navigate" className="navigate" />
        <div className="card">
          {/* from here */}
          <DummyCard
            sampleTree={sampleTree}
            setSampleTree={setSampleTree}
            links={links}
            setLinks={setLinks}
          />
          {/* Until here */}
        </div>
        <img src="/right-arrow.png" alt="right-navigate" className="navigate" />
      </div>
    </div>
  );
}

export { SampleTemplate };
