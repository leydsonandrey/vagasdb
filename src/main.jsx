import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom"

import "./index.css"
import App from "./App"
import Home from "./pages/home"
import FilterableData from "./components/FilterableData"
import Sobre from "./pages/sobre"
import ErrorPage from "./error-page"

import { DB_EMPRESAS } from "./db/empresas"
import { DB_SITES } from "./db/sites"
import { DB_CURSOS } from "./db/cursos"
import { DB_CONCURSOS } from "./db/concursos"

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/categorias" />}/>
      <Route path="/categorias" element={<Home />}>
        <Route index element={<Navigate to="/categorias/empresas"/>} /> 
        <Route path="/categorias/empresas" element={<FilterableData data={DB_EMPRESAS}/>}/>
        <Route path="/categorias/sites-de-vagas" element={<FilterableData data={DB_SITES}/>}/>
        <Route path="/categorias/cursos-de-graça" element={<FilterableData data={DB_CURSOS}/>}/>
        <Route path="/categorias/sites-de-concursos" element={<FilterableData data={DB_CONCURSOS}/>}/>
      </Route>
      <Route path="sobre" element={<Sobre />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
)
