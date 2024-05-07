/* eslint-disable no-unused-vars */
import { useState } from "react";

function Links() {
  const [links, setLinks] = useState([
    {
      id: 1,
      name: "Linkedin",
      link: "https://linkedin.com",
    },
    {
      id: 2,
      name: "twitter",
      link: "https://x.com",
    },
  ]);
  return (
    <div className="links-container">
      {links.map((link) => {
        return (
          <div key="link?.id">
            <a href={link?.link}>
              <img src={`${link?.link}/favicon.ico`} width="25" height="25" />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export { Links };
