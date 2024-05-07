import { Links } from "../components/Links.jsx";
import { Intro } from "../components/Intro.jsx";

function LinkTree() {
  return (
    <div className="container">
      <div className="card">
        <Intro />
        <Links />
      </div>
    </div>
  );
}

export { LinkTree };
