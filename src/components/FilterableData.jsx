import React, { useState, useEffect } from "react";

import Button from "./Button";
import SearchBar from "./SearchBar";
import Card from "./Card";

import { DB_EMPRESAS } from "../db/empresas";
import { DB_SITES } from "../db/sites";
import { DB_CURSOS } from "../db/cursos";
import { DB_CONCURSOS } from "../db/concursos";

export default function FilterableData() {
  const [filterText, setFilterText] = useState("");
  const [window, setWindow] = useState(1);

  let data = DB_EMPRESAS;

  // TODO: concertar essa gambiarra
  if (window === 1) {
    data = DB_EMPRESAS;
  }
  if (window === 2) {
    data = DB_SITES;
  }
  if (window === 3) {
    data = DB_CURSOS;
  }
  if (window === 4) {
    data = DB_CONCURSOS;
  }

  return (
    <>
      <nav className="flex flex-row flex-wrap gap-5">
        <Button
          name="Empresas"
          onClick={() => setWindow(1)}
          isActive={window === 1 ? true : false}
        />
        <Button
          name="Vagas"
          onClick={() => setWindow(2)}
          isActive={window === 2 ? true : false}
        />
        <Button
          name="Cursos"
          onClick={() => setWindow(3)}
          isActive={window === 3 ? true : false}
        />
        <Button
          name="Concursos"
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
      <CardList data={data} filterText={filterText} db={window} />
    </>
  );
}

// function CardList({ data, filterText }) {
//   const cards = []

//   data.forEach((dataValue) => {
//     if (
//       dataValue.title.toLowerCase().indexOf(
//         filterText.toLowerCase()
//       ) === -1
//     ) {
//       return
//     }

//     cards.push(
//       <Card
//         data={dataValue}
//         key={dataValue.title} />
//     )
//   })

//   return (
//     <>
//       {cards}
//     </>
//   )
// }

const CardList = ({ data, filterText, db }) => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 15;

  useEffect(() => {
    setPage(0);
  }, [db]);

  useEffect(() => {
    setPage(0);
  }, [filterText]);

  const lowerCaseFilter = filterText.toLowerCase();

  const filteredData = data.filter((dataValue) =>
    dataValue.title.toLowerCase().includes(lowerCaseFilter),
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = page * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handlePrevious = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
    scrollToTop();
  };

  const handleNext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    scrollToTop();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {paginatedData.map((dataValue) => (
        <Card key={dataValue.title} data={dataValue} />
      ))}

      {totalPages > 1 && (
        <div className="col-span-full place-self-center">
          <div>
            {page != 0 && <Button name="Anterior" onClick={handlePrevious} />}
            <span className="text-white mx-5">
              {page + 1} de {totalPages}
            </span>
            {page != totalPages - 1 && (
              <Button name="Próximo" onClick={handleNext} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
