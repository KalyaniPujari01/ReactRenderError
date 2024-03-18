import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Index from "./pages/JS-Files/Index";
import Login from "./pages/JS-Files/Login";
import Registration from "./pages/JS-Files/Registration";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Index />} />
      <Route path="Login" element={<Login />} />
      <Route path="Registration" element={<Registration />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
