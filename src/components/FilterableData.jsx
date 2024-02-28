import { useState } from "react"

import NavButton from "./NavButton"
import SearchBar from "./SearchBar"
import Card from "./Card"

export default function FilterableData({ data }) {
  const [filterText, setFilterText] = useState("")

  return (
    <>
      <nav className="flex flex-row flex-wrap gap-5">
        <NavButton name="Empresas" link="/categorias/empresas" />
        <NavButton name="Sites de Vagas" link="/categorias/sites-de-vagas" />
        <NavButton name="Cursos de Graça" link="/categorias/cursos-de-graça" />
        <NavButton name="Sites de Concursos" link="/categorias/sites-de-concursos" />
      </nav>

      <hr className="my-5 border-neutral-800" />

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