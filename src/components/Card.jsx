import Link from "./Link";

export default function Card({ data, list }) {
  function ListLinks({ name, data }) {
    return data ? (
      <li className="py-2">
        <Link href={data} name={name} />
      </li>
    ) : (
      ""
    );
  }

  if (list) {
    return (
      <section className="p-3 w-auto hover-theme shadow-style break-words">
        <ul className="mb-2 space-y-2">
          <li className="text-2xl">
            <a
              className="link-hover text-neutral-200 font-semibold"
              href={data.site}
              target="_blank"
            >
              {data.title}
            </a>
          </li>
          <li>
            {data.email ? (
              <a
                className="py-1 sm:py hover:underline text-neutral-400 text-xl sm:text-lg"
                href={`mailto:${data.email}`}
              >
                {data.email}
              </a>
            ) : (
              ""
            )}
          </li>
        </ul>
        <ul className="divide-y text-xl sm:text-lg divide-neutral-800">
          <ListLinks name="Trabalhe Conosco" data={data.trabalhe_conosco} />
          <ListLinks name="Portal de Vagas" data={data.portal_de_vagas} />
          <ListLinks name="LinkedIn" data={data.linkedin} />
          <ListLinks name="Vagas.com.br" data={data.vagas} />
          <ListLinks name="Gupy Corporativo" data={data.gupy_corporativo} />
          <ListLinks name="Gupy" data={data.gupy} />
          <ListLinks name="PandaPé" data={data.pandape} />
          <ListLinks name="InfoJobs" data={data.infojobs} />
        </ul>
      </section>
    );
  }

  return (
    <a
      className="link-hover text-neutral-200 font-semibold"
      href={data.site}
      target="_blank"
    >
      <section className="p-3 w-auto hover-theme shadow-style break-words">
        <ul className="mb-2 space-y-2">
          <li className="text-2xl">{data.title}</li>
        </ul>
      </section>
    </a>
  );
}
