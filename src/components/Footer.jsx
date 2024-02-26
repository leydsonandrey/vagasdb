import Link from "./Link"

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center border-style-top p-5">
      <div className="responsible-width">
        <p className="text-neutral-50 text-center mb-2">Feito com &#10084; por <Link href="https://andrey-tar-xz.github.io/links" name="Leydson Andrey" /></p>
        <p className="text-neutral-50 text-center"><Link href="https://github.com/andrey-tar-xz/workwithus" name="Repositório no Github" /></p>
      </div>
    </footer>
  )
}
