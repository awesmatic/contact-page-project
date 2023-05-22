import React, { FC } from "react";
import Header from "./Header";
import SIdeBar from "./SIdeBar";
// import Contact from "../../Routes/Contact";

const index: FC = () => {
  return (
    <div className="flex flex-col ">
      <div className=" flex justify-center items-center bg-sky-600 p-4 ">
        <Header />
      </div>
      <div className="border-2 border-sky-600">
        <SIdeBar />
        {/* <Contact /> */}
      </div>
    </div>
  );
};

export default index;
