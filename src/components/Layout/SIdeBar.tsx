import React, { FC } from "react";
import { Link } from "react-router-dom";

const SIdeBar: FC = () => {
  return (
    <div className="w-2/12 border-r-4 border-sky-600 p-4">
      <Link to="/contact" className="navbar-brand">
        <h4 className="logo-title">Contact </h4>
      </Link>
      <Link to="/createContact" className="navbar-brand">
        <h4 className="logo-title">Create Contact</h4>
      </Link>
      <Link to="/dashboard" className="navbar-brand">
        <h4 className="logo-title">Charts and Maps </h4>
      </Link>
    </div>
  );
};

export default SIdeBar;
