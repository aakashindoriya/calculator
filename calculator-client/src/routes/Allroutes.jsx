import { Route, Routes } from "react-router-dom";
import Home from "./Home";

export default function Allrouts() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </>
  );
}
