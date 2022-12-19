import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Game from "./Pages/Game";
import Home from "./Pages/Home";
import Result from "./Pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
