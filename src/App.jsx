/* eslint-disable no-unused-vars */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Headers } from "./pages/Headers";
import { LinkTree } from "./pages/LinkTree";
import { CreateTree } from "./pages/CreateTree";

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route to={"/"}></Route>
      </Routes>
      <LinkTree />
      <CreateTree />
    </BrowserRouter>
  );
}

export default App;
