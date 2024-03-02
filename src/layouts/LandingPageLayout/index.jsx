import React from "react";

// import Presentation from "pages/Presentation";

import { Outlet } from "react-router-dom";
import publicRoutes from "utils/routes/publicRoutes";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
const LandingPageLayout = () => {
  return (
    <div>
      <DefaultNavbar routes={publicRoutes} />
      {/* <Presentation /> */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LandingPageLayout;
