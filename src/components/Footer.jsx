import Link from "./Link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center border-style-top p-5">
      <div className="responsible-width">
        <p className="text-neutral-200 text-center mb-2">
          Feito com &#10084; por{" "}
          <Link
            href="https://leydsonandrey.github.io/links"
            name="Leydson Andrey"
          />
        </p>
        <p className="text-neutral-200 text-center">
          <Link
            href="https://github.com/leydsonandrey/vagasdb"
            name="Repositório no Github"
          />
        </p>
      </div>
    </footer>
  );
}
