import React, { FC } from "react";
import Header from "./Header";
import SIdeBar from "./SIdeBar";
import IndexRouters from "../../routes/index";

const index: FC = () => {
  return (
    <div className="flex flex-col ">
      <div className=" flex justify-center items-center bg-sky-600 p-4 ">
        <Header />
      </div>
      <div className="flex border-2 border-sky-600 h-96">
        <SIdeBar />
        <IndexRouters />
      </div>
    </div>
  );
};

export default index;
