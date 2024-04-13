import React from "react"

import Link from "../components/Link"

export default function Sobre() {
  return (
    <>
      <div className="text-neutral-50">
        <h1>Um Lugar de Fácil Acesso</h1>
        <p><strong>O <Link name={"Work With Us"} href={"https://workwithus.vercel.app"} /> foi criado para listar o “Trabalhe Conosco” em um lugar de fácil acesso</strong>, para que você não precise acessar diversos sites para achá-los. Atualmente, também listamos outros recursos que o ajudaram a encontrar um emprego, como a sessão de <strong>Cursos de Graça</strong>, onde é listado diversos sites que, como o nome diz, oferecem cursos com certificados gratuitamente.</p>

        <p><strong>Gostaria que adicionássemos alguma empresa, site de curso, etc., ao site ou corrigíssemos alguma informação? Manda uma mensagem para o e-mail abaixo:</strong></p>

        <strong>
          <Link name={"andrey.tar.xz@gmail.com"} href={"mailto:andrey.tar.xz@gmail.com"} />
        </strong>
      </div>
    </>
  )
}