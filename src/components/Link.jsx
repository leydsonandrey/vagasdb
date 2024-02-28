export default function Link({href, name}) {
  return (
    <a
      href={href}
      target="_blank"
      className="hover:underline text-blue-500 hover:text-blue-600 visited:text-blue-800"
    >
      {name}
    </a>
  )
}