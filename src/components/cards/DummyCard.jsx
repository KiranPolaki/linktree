import { SampleIntro } from "../SampleIntro";
import { SampleLinks } from "../SampleLinks";
function DummyCard({ sampleTree, setSampleTree, links, setLinks }) {
  return (
    <div className="dummy-component">
      <SampleIntro sampleTree={sampleTree} setSampleTree={setSampleTree} />
      <SampleLinks links={links} setLinks={setLinks} />
    </div>
  );
}

export { DummyCard };
