import { useState } from "react"
import { DB_BUSINESS } from "./db/db_business"
import { DB_SITES } from "./db/db_sites"
import SearchBar from "./components/SearchBar"
import Button from "./components/Button"
import Logo from './assets/wwu.svg';

function FilterableData({ data }) {
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
  );
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

function Card({ data }) {
  function ListLinks({ name, data }) {
    return data ?
      <li className="py-2">
        <a
          href={data}
          target="_blank"
          className="link-hover text-blue-400 hover:text-blue-500"
        >
          {name}
        </a>
      </li> : ""
  }

  return (
    <section className="border-style bg-neutral-900 w-auto border rounded-xl text-neutral-50 shadow-style break-words p-3">
      <div className="mb-2">
        <h3 className="text-2xl">
          <a className="link-hover text-neutral-50" href={data.site} target="_blank">{data.title}</a>
        </h3>
        {data.email ? <h4><a className="hover:underline text-neutral-400" href={`mailto:${data.email}`}>{data.email}</a></h4> : ""}
      </div>
      <ul className="divide-y divide-neutral-800">
        <ListLinks name="Trabalhe Conosco" data={data.trabalhe_conosco} />
        <ListLinks name="Portal de Vagas" data={data.portal_de_vagas} />
        <ListLinks name="LinkedIn" data={data.linkedin} />
        <ListLinks name="Gupy" data={data.gupy} />
        <ListLinks name="PandaPé" data={data.pandape} />
        <ListLinks name="InfoJobs" data={data.infojobs} />
      </ul>
    </section>
  )
}

export default function App() {
  const [navSeletion, setNavSeletion] = useState(true)

  return (
    <>
      <header className="border-style-bottom w-full h-20 flex justify-center items-center text-neutral-50">
        <a href="/">
          <img src={Logo} alt='Work With Us logo' className="w-20" />
        </a>
      </header>

      <main className="flex justify-center p-5 bg-neutral-950">
        <div className="responsive-width">
          <nav className="flex flex-row gap-5">
            <Button
              value="Empresas"
              active={navSeletion}
              onClick={() => { setNavSeletion(true) }} />

            <Button
              value="Sites de vagas"
              active={!navSeletion}
              onClick={() => { setNavSeletion(false) }} />
          </nav>
          {navSeletion ? <FilterableData data={DB_BUSINESS} /> : <FilterableData data={DB_SITES} />}
        </div>
      </main>

      <footer className="w-full flex justify-center items-center border-style-top p-5">
        <div className="responsible-width">
          <p className="text-neutral-50 text-center mb-2">Feito com &#10084; por <a href="https://andrey-tar-xz.github.io/links" className="hover:underline text-blue-500">Leydson Andrey</a></p>
          <p className="text-neutral-50 text-center"><a href="https://github.com/andrey-tar-xz/workwithus" className="hover:underline text-blue-500">Repositório no Github</a></p>
        </div>
      </footer>
    </>
  )
}

{/*
{DATA_BASE.map(DATA_BASE =>
  <Card data={DATA_BASE} />
)}
*/}
