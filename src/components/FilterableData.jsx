import { useState } from "react"

import Button from "./Button"
import SearchBar from "./SearchBar"
import Card from "./Card"

import { DB_EMPRESAS } from "../db/empresas"
import { DB_SITES } from "../db/sites"
import { DB_CURSOS } from "../db/cursos"
import { DB_CONCURSOS } from "../db/concursos"

export default function FilterableData() {
  const [filterText, setFilterText] = useState("")
  const [window, setWindow] = useState(1)

  let data = DB_EMPRESAS

  // TODO: concertar essa gambiarra
  if (window === 1) { data = DB_EMPRESAS }
  if (window === 2) { data = DB_SITES }
  if (window === 3) { data = DB_CURSOS }
  if (window === 4) { data = DB_CONCURSOS }
  
  return (
    <>
      <nav className="flex flex-row flex-wrap gap-5">
        <Button
          name="Empresas"
          onClick={() => setWindow(1)}
          isActive={window === 1 ? true : false}
        />
        <Button
          name="Sites de Vagas"
          onClick={() => setWindow(2)}
          isActive={window === 2 ? true : false}
        />
        <Button
          name="Cursos de Graça"
          onClick={() => setWindow(3)}
          isActive={window === 3 ? true : false}
        />
        <Button
          name="Sites de Concursos"
          onClick={() => setWindow(4)}
          isActive={window === 4 ? true : false}
        />
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