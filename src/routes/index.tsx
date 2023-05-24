import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import CreateContact from "../components/Contact/CreateContact";
import ContactPage from "../components/Contact/Contact";
import Home from "../pages/Home";
import MapsAndCharts from "../components/MapsAndCharts/MapsAndCharts";

const IndexRouters: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/createContact" element={<CreateContact />} />
        <Route path="/editContact" element={<CreateContact />} />
        <Route path="/mapsAndCharts" element={<MapsAndCharts />} />
      </Routes>
    </>
  );
};

export default IndexRouters;
