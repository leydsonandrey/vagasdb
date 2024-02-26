export default function SearchBar({
  value,
  placeholder,
  onChange
}) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full h-10 mb-5 p-3 border-style rounded-md focus:border-1 focus:border-neutral-400 bg-neutral-900 focus:bg-neutral-950 focus:ring-4 focus:ring-neutral-700 hover:ring-2 hover:ring-neutral-700 focus:outline-0 text-neutral-50 placeholder-neutral-400 shadow-style" />
  )
}