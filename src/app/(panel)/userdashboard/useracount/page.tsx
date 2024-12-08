import React, { Fragment } from "react";
import Header from "@/Component/Landing/Header/Header";
import Navbar from "@/Component/Landing/Navbar/Navbar";
import NavbarDashboard from "@/Component/UserDashbord/Navbar/NavbarDashboard";
import UserAcount from "@/Component/UserDashbord/UserAcount/UserAcount";

const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <div className="px-20 py-10 flex justify-between items-center">
        <NavbarDashboard />
        <UserAcount/>
      </div>
    </Fragment>
  );
};

export default page;
