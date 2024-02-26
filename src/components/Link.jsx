export default function Link({href, name}) {
  return (
    <a
      href={href}
      target="_blank"
      className="hover:underline text-blue-400 hover:text-blue-500 visited:text-blue-800"
    >
      {name}
    </a>
  )
}