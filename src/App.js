import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
// import Presentation from "layouts/pages/presentation";
import LandingPageLayout from "layouts/LandingPageLayout";

// Material Kit 2 React routes
import publicRoutes from "routes";
import { getRoutes } from "utils/getRoutes";
import DashboardLayout from "layouts/DashboardLayout";
import privateRoutes from "utils/routes/privateRoutes";
export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);
  const isAuthenticated = false;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {/* <Route path="/" element={<LandingPageLayout />}>
          {getRoutes(publicRoutes)}
        </Route> */}
        {isAuthenticated ? (
          <Route path="/" element={<DashboardLayout />}>
            {getRoutes(privateRoutes)}
          </Route>
        ) : (
          <>
            <Route path="/" element={<LandingPageLayout />}>
              {getRoutes(publicRoutes)}
            </Route>
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}
