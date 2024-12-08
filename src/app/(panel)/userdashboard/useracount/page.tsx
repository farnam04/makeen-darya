import React, { Fragment } from "react";
import Header from "@/Component/Landing/Header/Header";
import Navbar from "@/Component/Landing/Navbar/Navbar";
import NavbarDashboard from "@/Component/UserDashbord/Navbar/NavbarDashboard";

const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <div className="px-20 py-10 flex justify-between items-center">
        <NavbarDashboard/>
      </div>
    
    </Fragment>
  );
};

export default page;
