import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import CreateContact from "../components/Contact/CreateContact";
import ContactPage from "../components/Contact/Contact";
import Home from "../pages/Home";

const IndexRouters: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/createContact" element={<CreateContact />} />
        <Route path="/Chart-and-maps" element={<Home />} />
      </Routes>
    </>
  );
};

export default IndexRouters;
