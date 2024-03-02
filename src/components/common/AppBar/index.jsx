import React from "react";

const AppBar = ({ routes }) => {
  console.log("routes", routes);

  const renderRoutes = (routes) => {
    return routes.map((route, index) => (
      <li key={index}>
        {route.route ? (
          <a href={route.route}>{route.name}</a>
        ) : (
          <>
            <span>{route.name}</span>
            {route.collapse && <ul>{renderRoutes(route.collapse)}</ul>}
          </>
        )}
      </li>
    ));
  };

  return <ul>{renderRoutes(routes.routes)}</ul>;
};

export default AppBar;
