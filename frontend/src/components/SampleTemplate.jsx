// import { Intro } from "./Intro";
// import { Links } from "./Links";
import { useState } from "react";
import { SampleIntro } from "./SampleIntro.jsx";
import { SampleLinks } from "./SampleLinks.jsx";
import { DummyCard } from "./cards/DummyCard.jsx";
import { DummyCard2 } from "./cards/DummyCard2.jsx";

function SampleTemplate({ sampleTree, setSampleTree, links, setLinks }) {
  const [cardComponents, setCardComponents] = useState([
    <DummyCard
      sampleTree={sampleTree}
      setSampleTree={setSampleTree}
      links={links}
      setLinks={setLinks}
    />,
    <DummyCard2 />,
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  function nextSlide() {
    setActiveIndex((prevIndex) =>
      prevIndex === cardComponents.length - 1 ? 0 : prevIndex + 1
    );
  }

  function prevSlide() {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cardComponents.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className="sample-container">
      <div className="sample-card">
        <button className="btn-naviagte" onClick={prevSlide}>
          <img src="/left-arrow.png" alt="left-navigate" className="navigate" />
        </button>
        <div className="card">
          {/* from here */}
          {cardComponents[activeIndex]}
          {/* Until here */}
        </div>
        <button className="btn-naviagte" onClick={nextSlide}>
          <img
            src="/right-arrow.png"
            alt="right-navigate"
            className="navigate"
          />
        </button>
      </div>
    </div>
  );
}

export { SampleTemplate };
