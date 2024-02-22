import { useState } from 'react';
import { DB_BUSINESS } from "./db_business"
import { DB_SITES } from "./db_sites"

function FilterableData({ data }) {
  const [filterText, setFilterText] = useState('');

  return (
    <>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
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
  const cards = [];

  data.forEach((dataValue) => {
    if (
      dataValue.title.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    cards.push(
      <Card
        data={dataValue}
        key={dataValue.title} />
    );
  });

  return (
    <>
      {cards}
    </>
  );
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
    <>
      <section className="border-style w-auto border rounded-xl text-neutral-50 shadow-style break-words p-3">
        <div className="mb-2">
          <h3 className="text-2xl">
            <a className="link-hover text-neutral-50" href={data.site} target="_blank">{data.title}</a>
          </h3>
         {data.desc ? <h4 className=" text-neutral-400">{data.desc}</h4> : ""}
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
      </section >
    </>
  )
}

function SearchBar({
  filterText,
  onFilterTextChange,
}) {
  return (
    <input
      type="text"
      value={filterText} placeholder="Pesquisar..."
      onChange={(e) => onFilterTextChange(e.target.value)}
      className="w-full h-10 mb-5 p-3 border-style rounded-md focus:border-1 focus:border-neutral-400 bg-neutral-950 focus:ring-4 focus:ring-neutral-700 focus:outline-0 text-neutral-50 placeholder-neutral-400 shadow-style"
    />
  );
}

function Button({ value, onClick, id, active }) {
  let buttonProp = "p-2 border-style rounded-md mb-5"
  return (
    <input
      type="button"
      id={id}
      value={value}
      onClick={onClick}
      className={active ?
        `${buttonProp} text-neutral-950 bg-neutral-50 hover:bg-neutral-200` :
        `${buttonProp} text-neutral-400 hover:text-neutral-50 hover:bg-neutral-900 shadow-style`}
    />
  )
}

export default function App() {
  const [navSeletion, setNavSeletion] = useState(true)

  return (
    <div>
      <header className="border-style-bottom w-full h-20 flex justify-center items-center text-neutral-50">
        <h2 className="text-3xl">
          <a href="/" className="hover:underline text-neutral-50">Work With Us</a>
        </h2>
      </header>

      <main className="flex justify-center p-5">
        <div className="responsive-width">
          <nav className="flex flex-row gap-5">
            <Button value="Empresas" active={navSeletion} onClick={() => { setNavSeletion(true) }} />
            <Button value="Sites de vagas" active={!navSeletion} onClick={() => { setNavSeletion(false) }} />
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
    </div>
  )
}

{/*
{DATA_BASE.map(DATA_BASE =>
  <Card data={DATA_BASE} />
)}
*/}
