import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LOGIN_ROUTE, ROUTES, ROUTE_PATH } from "./config/routes.config";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route) => (
          <Route {...route} />
        ))}
        <Route path={ROUTE_PATH.HOME} element={LOGIN_ROUTE.element} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
