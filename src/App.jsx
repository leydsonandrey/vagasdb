import React from "react"
import { Outlet } from "react-router-dom"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App() {
   return (
      <>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
     </>
   )
}