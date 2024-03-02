import React from "react";

import { Outlet } from "react-router-dom";
import privateRoutes from "utils/routes/privateRoutes";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
const DashboardLayout = () => {
  return (
    <div>
      <DefaultNavbar routes={privateRoutes} />
      {/* <Presentation /> */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
