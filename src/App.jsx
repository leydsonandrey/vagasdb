import { useState } from 'react';
import { DATA_BASE } from "./database"

function FilterableData({ data }) {
  const [filterText, setFilterText] = useState('');

  return (
    <>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
  let valid_email, valid_infojobs, valid_gupy, valid_portal_de_vagas

  if (data.email != null) {
    valid_email = true
  }

  if (data.infojobs != null) {
    valid_infojobs = true
  }

  if (data.gupy != null) {
    valid_gupy = true
  }

  if (data.portal_de_vagas != null) {
    valid_portal_de_vagas = true
  }

  return (
    <>
      <section className="w-full bg-black rounded-lg text-white text-wrap p-3">
        <h3 className="mb-3 text-2xl">{data.title}</h3>
        {valid_email && <a href={`mailto:${data.email}`} className="text-blue-500 hover:underline">{data.email}</a>}
        {valid_infojobs && <a href={data.infojobs} className="text-blue-500 hover:underline">InfoJobs</a>}
        {valid_gupy && <a href={data.gupy} className="text-blue-500 hover:underline">Gupy</a>}
        {valid_portal_de_vagas && <a href={data.portal_de_vagas} className="text-blue-500 hover:underline">Portal de Vagas</a>}
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
      className="w-full h-10 mb-5 border-2 rounded-md border-black p-3"
    />
  );
}

export default function App() {

  return (
    <>
      <header className="w-full h-20 bg-black text-white flex justify-center items-center mb-5">
        <h2 className="text-3xl">
          Info Business
        </h2>
      </header>

      <main className="flex justify-center m-5">
        <div className="w-full md:w-[768px] lg:w-[1024px]">
          <FilterableData data={DATA_BASE} />
        </div>
      </main >
    </>
  )
}

{/*
{DATA_BASE.map(DATA_BASE =>
  <Card data={DATA_BASE} />
)}
*/}
