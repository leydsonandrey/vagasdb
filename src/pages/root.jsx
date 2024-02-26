import { useState } from "react"
import { Outlet } from "react-router-dom";

import Header from "../components/Header"
import Main from "../components/Main"
import NavButton from "../components/NavButton"
import SearchBar from "../components/SearchBar"
import Card from "../components/Card"
import Footer from "../components/Footer"

export function FilterableData({ data }) {
  const [filterText, setFilterText] = useState("")

  return (
    <>
      <SearchBar
        value={filterText}
        placeholder="Pesquisar..."
        onChange={(e) => setFilterText(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <CardList
          data={data}
          filterText={filterText}
        />
      </div>
    </>
  )
}

function CardList({ data, filterText }) {
  const cards = []

  data.forEach((dataValue) => {
    if (
      dataValue.title.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return
    }
    cards.push(
      <Card
        data={dataValue}
        key={dataValue.title} />
    )
  })

  return (
    <>
      {cards}
    </>
  )
}

export default function Root() {
  return (
    <>
      <Header />
      <main className="flex justify-center p-5 bg-neutral-950">
        <div className="responsive-width">
          <nav className="flex flex-row gap-5 mb-5">
            <NavButton link="/" name="Empresas" />
            <NavButton link="/sites-de-vagas" name="Sites de Vagas" />
          </nav>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
