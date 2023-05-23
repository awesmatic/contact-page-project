import React, { FC } from "react";
import Header from "./Header";
import SIdeBar from "./SIdeBar";
import IndexRouters from "../../routes/index";

const index: FC = () => {
  return (
    <div className="h-full sm:p-5 p-0 flex flex-col ">
      <div className=" flex justify-center items-center bg-sky-600 p-0 sm:p-4 ">
        <Header />
      </div>
      <div className="h-full flex flex-col  sm:flex-row border-2 border-sky-600 ">
        <SIdeBar />
        <IndexRouters />
      </div>
    </div>
  );
};

export default index;
