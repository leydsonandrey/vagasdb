export default function Card({ data }) {
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
    <section className="p-3 w-auto border-style bg-neutral-900 border rounded-xl text-neutral-50 shadow-style break-words hover:ring-2 hover:ring-neutral-700">
      <div className="mb-2">
        <h3 className="text-2xl">
          <a className="link-hover text-neutral-50" href={data.site} target="_blank">{data.title}</a>
        </h3>
        {data.email ? <a className="hover:underline text-neutral-400 py-3 sm:py" href={`mailto:${data.email}`}>{data.email}</a> : ""}
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


