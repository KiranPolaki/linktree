// import { Intro } from "./Intro";
// import { Links } from "./Links";
import { SampleIntro } from "./SampleIntro";
import { SampleLinks } from "./SampleLinks";

function SampleTemplate() {
  return (
    <div className="sample-container">
      <div className="card">
        <SampleIntro />
        <SampleLinks />
      </div>
      {/* <Intro />
      <Links /> */}
    </div>
  );
}

export { SampleTemplate };
