export default function Link({href, name}) {
  return (
    <a
      href={href}
      target="_blank"
      className="hover:underline text-blue-600 hover:text-blue-400"
    >
      {name}
    </a>
  )
}