import React from "react"
import { Link } from "react-router-dom"

import Logo from "../assets/wwu.svg"
import NavButton from "./NavButton"

export default function Header() {
  return (
    <header className="border-style-bottom w-full h-20 flex flex-row justify-center px-5">
      <div className="responsive-width">
        <div className="flex flex-row items-center gap-5 bg-neutral text-neutral-50">
          <Link to="/"><img src={Logo} alt='Work With Us logo' className="w-20" /></Link>
          <NavButton link="categorias" name="Início" color="bg-neutral-950" />
          <NavButton link="sobre" name="Sobre" color="bg-neutral-950" />
        </div>
      </div>
    </header>
  )
}
