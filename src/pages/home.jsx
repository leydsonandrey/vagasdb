import React from "react"
import { Outlet } from "react-router-dom"

import FilterableData from "../components/FilterableData"

export default function Root() {
  return (
    <>
      <Outlet />
    </>
  )
}
