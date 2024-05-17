import { useEffect, useState } from "react";

function Input({ sampleTree, setSampleTree, links, setLinks }) {
  const [linkName, setLinkName] = useState("");
  const [inputLink, setInputLink] = useState("");
  const [bio, setBio] = useState({});
  let id = 1;
  function handleLinks() {
    setLinks([...links, { id: id, name: linkName, link: inputLink }]);
    id++;
    setLinkName("");
    setInputLink("");
  }

  function handleSave() {
    // * save this data somewhere so that we can always have a look at this while shufting to other cards
  }

  return (
    <div className="input-container">
      <div className="input-card">
        <input
          className="input-box"
          type="text"
          maxLength={19}
          placeholder="Name: Sukuna.."
          value={sampleTree?.name}
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
        <div className="input-links">
          <input
            className="input-box-links"
            type="text"
            maxLength={35}
            placeholder="Experience: 100+years from Heian period..."
            value={sampleTree.experience}
            onChange={(e) => {
              setSampleTree({ ...sampleTree, experience: e.target.value });
            }}
          />
          <button className="links-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      <div className="links-card">
        <div className="input-links">
          <input
            type="text"
            className="input-box"
            placeholder="Display Name: Github"
            value={linkName}
            onChange={(e) => setLinkName(e.target.value)}
          />
          <input
            className="input-box-links"
            type="text"
            placeholder="Links: one at a time.."
            value={inputLink}
            onChange={(e) => setInputLink(e.target.value)}
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
