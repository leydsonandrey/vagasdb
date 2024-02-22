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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProductTable
          data={data}
          filterText={filterText}
        />
      </div>
    </>
  );
}

function ProductTable({ data, filterText }) {
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
      <ProductRow
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

function ProductRow({ data }) {
  return (
    <Card data={data} />
  );
}

function Card({ data }) {
  function ListLinks({ name, data }) {
    return data ? <li><a href={data} target="_blank" className="hover:underline text-blue-500">{name}</a></li> : ""
  }

  return (
    <>
      <section className="w-full bg-black rounded-lg text-white break-words p-3">
        <div className="mb-3">
          <a className="hover:underline" href={data.site} target="_blank"><h3 className="text-2xl">{data.title}</h3></a>
          {data.email ? <a className="hover:underline text-gray-400" href={`mailto:${data.email}`}>{data.email}</a> : ""}
        </div>
        <ul>
          <ListLinks name="Trabalhe Conosco" data={data.trabalhe_conosco} />
          <ListLinks name="Portal de Vagas" data={data.portal_de_vagas} />
          <ListLinks name="LinkedIn" data={data.linkedin} />
          <ListLinks name="Gupy" data={data.gupy} />
          <ListLinks name="PandaPé" data={data.pandape} />
          <ListLinks name="InfoJobs" data={data.infojobs} />
        </ul>
      </section>
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
      className="w-full h-10 mb-5 border-2 rounded-md border-black p-3"
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
    <>
      <header className="w-full h-20 bg-black text-white flex justify-center items-center mb-5">
        <h2 className="text-3xl">
          <a href="/">Work With Us</a>
        </h2 >
      </header >

      <main className="flex justify-center p-5">
        <div className="responsive-width">
          <nav className="flex flex-row gap-5">
            <Button value="Empresas" active={navSeletion} onClick={() => { setNavSeletion(true) }} />
            <Button value="Sites de vagas" active={!navSeletion} onClick={() => { setNavSeletion(false) }} />
          </nav>
          {navSeletion ? <FilterableData data={DB_BUSINESS} /> : <FilterableData data={DB_SITES} />}
        </div>
      </main>
  )
}

{/*
{DATA_BASE.map(DATA_BASE =>
  <Card data={DATA_BASE} />
)}
*/}
