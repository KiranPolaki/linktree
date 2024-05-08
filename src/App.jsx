/* eslint-disable no-unused-vars */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopBar } from "./components/TopBar.jsx";
import { LinkTree } from "./pages/LinkTree.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Edit } from "./pages/Edit.jsx";
import { CreateTree } from "./pages/CreateTree.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<LinkTree />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/create" element={<CreateTree />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
