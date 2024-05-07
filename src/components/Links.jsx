/* eslint-disable no-unused-vars */
import { useState } from "react";
import { ShimmerLinks } from "./ShimmerLinks";

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
    {
      id: 3,
      name: "git",
      link: "https://github.com",
    },
  ]);
  return (
    <div className="links-container">
      {links.length === 0 ? (
        <ShimmerLinks />
      ) : (
        links.map((link) => {
          return (
            <a
              href={link?.link}
              target="_blank"
              key="link?.id"
              className="links"
            >
              <img src={`${link?.link}/favicon.ico`} width="25" height="25" />
            </a>
          );
        })
      )}
      {}
    </div>
  );
}

export { Links };
