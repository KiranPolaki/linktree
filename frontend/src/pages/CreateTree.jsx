/* eslint-disable no-unused-vars */
// import { LinkTree } from "./LinkTree.jsx";
import { Input } from "../components/Input.jsx";
import { SampleTemplate } from "../components/SampleTemplate.jsx";
import { useState } from "react";

function CreateTree() {
  const [sampleTree, setSampleTree] = useState({
    img: "",
    name: "",
    bio: "",
    experience: "",
  });
  const [links, setLinks] = useState([]);
  return (
    <div className="create-continer">
      <Input
        sampleTree={sampleTree}
        setSampleTree={setSampleTree}
        links={links}
        setLinks={setLinks}
      />
      <SampleTemplate
        sampleTree={sampleTree}
        setSampleTree={setSampleTree}
        links={links}
        setLinks={setLinks}
      />
    </div>
  );
}

export { CreateTree };
