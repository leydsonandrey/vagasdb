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

import { DB_EMPRESAS } from "./db/empresas"
import { DB_SITES } from "./db/sites"
import { DB_CURSOS } from "./db/cursos"
import { DB_CONCURSOS } from "./db/concursos";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<FilterableData data={DB_EMPRESAS} />} />
      <Route path="sites-de-vagas" element={<FilterableData data={DB_SITES} />} />
      <Route path="cursos-de-graça" element={<FilterableData data={DB_CURSOS} />} />
      <Route path="sites-de-concursos" element={<FilterableData data={DB_CONCURSOS} />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
