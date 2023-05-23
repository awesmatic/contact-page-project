import React, { FC } from "react";
import { Link } from "react-router-dom";

const SIdeBar: FC = () => {
  return (
    <div className="w-full sm:w-5/12 border-r-4 border-sky-600 p-2 flex flex-row sm:flex-col">
      <Link
        to="/contact"
        className="px-2 py-2 m-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        <h4 className="logo-title">Contact </h4>
      </Link>
      <Link
        to="/createContact"
        className="px-2 py-2 m-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        <h4 className="logo-title">Create Contact</h4>
      </Link>
      <Link
        to="/mapsAndCharts"
        className="px-2 py-2 m-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        <h4 className="logo-title">Charts and Maps </h4>
      </Link>
    </div>
  );
};

export default SIdeBar;
