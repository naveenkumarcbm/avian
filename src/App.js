import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LOGIN_ROUTE, ROUTES, ROUTE_PATH } from "./config/routes.config";

function App() {
  return (
    <HashRouter>
      <Routes>
        {ROUTES.map((route) => (
          <Route {...route} />
        ))}
        <Route path={ROUTE_PATH.HOME} element={LOGIN_ROUTE.element} />
      </Routes>
    </HashRouter>
  );
}

export default App;
