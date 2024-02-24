import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Root from "./pages/root";
import { FilterableData } from "./pages/root"
import ErrorPage from "./error-page";

import { DB_BUSINESS } from "./db/business"
import { DB_SITES } from "./db/sites"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<FilterableData data={DB_BUSINESS} />} />
      <Route path="sites-de-vagas" element={<FilterableData data={DB_SITES} />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
