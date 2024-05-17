import { useEffect, useState } from "react";
function SampleLinks({ setLinks, links }) {
  return (
    <div className="sample-links-container">
      {console.log(links, "links")}
      {links.length === 0 ? (
        <></>
      ) : (
        links.map((link) => {
          return (
            <div className="sample-link" key={link?.id}>
              <img
                src={`${link?.link}/favicon.ico`}
                width="25"
                height="25"
                className="img-link"
              />
              <a
                href={link?.link}
                target="_blank"
                key="link?.id"
                className="sample"
              >
                <p>{link?.name}</p>
              </a>
            </div>
          );
        })
      )}
    </div>
  );
}

export { SampleLinks };
