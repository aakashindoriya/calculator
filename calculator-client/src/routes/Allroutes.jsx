import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Hra from "./Hra";

export default function Allrouts() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hra" element={<Hra />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </>
  );
}
