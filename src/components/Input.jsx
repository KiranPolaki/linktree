import { useState } from "react";

function Input({ sampleTree, setSampleTree, links, setLinks }) {
  const [linkName, setLinkName] = useState("");
  const [inputLink, setInputLink] = useState("");
  function handleLinks() {}
  return (
    <div className="input-container">
      <div className="input-card">
        {console.log(typeof sampleTree.name)}
        <input
          className="input-box"
          type="text"
          maxLength={19}
          placeholder="Name: Sukuna.."
          value={sampleTree.name}
          onChange={(e) =>
            setSampleTree({ ...sampleTree, name: e.target.value })
          }
        />
        <input
          className="input-box"
          type="text"
          maxLength={35}
          placeholder="Bio: I am king of curses.."
          value={sampleTree.bio}
          onChange={(e) => {
            setSampleTree({ ...sampleTree, bio: e.target.value });
          }}
        />
        <input
          className="input-box"
          type="text"
          maxLength={35}
          placeholder="Experience: 100+years from Heian period..."
          value={sampleTree.experience}
          onChange={(e) => {
            setSampleTree({ ...sampleTree, experience: e.target.value });
          }}
        />
      </div>
      <div className="links-card">
        <div className="input-links">
          <input
            type="text"
            className="input-box"
            placeholder="Display Name: Github"
            // value={link}
          />
          <input
            className="input-box-links"
            type="text"
            placeholder="Links: one at a time.."
          />
          <button className="links-btn" onClick={handleLinks}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export { Input };
