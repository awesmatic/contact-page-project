import React, { FC } from "react";
import { Link } from "react-router-dom";

const SIdeBar: FC = () => {
  return (
    <div className="border-2 border-sky-600">
      <Link to="/dashboard" className="navbar-brand">
        <h4 className="logo-title">Contact </h4>
      </Link>
      <Link to="/dashboard" className="navbar-brand">
        <h4 className="logo-title">Charts and Maps </h4>
      </Link>
    </div>
  );
};

export default SIdeBar;
