import { LinkTree } from "./LinkTree.jsx";
import { Input } from "../components/Input.jsx";
function CreateTree() {
  return (
    <div className="create-continer">
      <LinkTree className="create" />
      <Input />
    </div>
  );
}

export { CreateTree };
