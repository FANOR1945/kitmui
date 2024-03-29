// En un nuevo archivo, por ejemplo, routesUtils.js

import { Route } from "react-router-dom";

export const getRoutes = (routes) =>
  routes.map((route) => {
    if (route.collapse) {
      return getRoutes(route.collapse);
    }

    if (route.route) {
      return <Route exact path={route.route} element={route.component} key={route.key} />;
    }

    return null;
  });
