import React from "react";

import Link from "../components/Link";

export default function Sobre() {
  return (
    <>
      <div className="text-neutral-50">
        <h1>Um Lugar de Fácil Acesso</h1>
        <p>
          <strong>
            O <Link name={"VagasDB"} href={"https://vagasdb.vercel.app"} /> foi
            criado para listar o “Trabalhe Conosco” em um lugar de fácil acesso
          </strong>
          , para que você não precise acessar diversos sites para achá-los. Além
          disso, listamos outros recursos que o auxiliaram a encontrar um
          emprego, como a sessão de Cursos de Graça, onde são listados diversos
          sites que oferecem cursos com certificados gratuitos.
        </p>

        <p>
          <strong>
            Gostaria que acrescentássemos uma empresa, site de curso, etc. ao
            site ou corrigíssemos alguma informação existente? Envie uma
            mensagem para o e-mail abaixo:
          </strong>
        </p>

        <strong>
          <Link
            name={"andrey.tar.xz@gmail.com"}
            href={"mailto:andrey.tar.xz@gmail.com"}
          />
        </strong>
      </div>
    </>
  );
}
