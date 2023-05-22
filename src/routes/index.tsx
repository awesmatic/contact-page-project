import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { FC } from "react";

const IndexRouters: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact/*" element={<Home />} />
        <Route path="/Chart-and-maps" element={<Home />} />
      </Routes>
    </>
  );
};

export default IndexRouters;
