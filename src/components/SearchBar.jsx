export default function SearchBar({ value, placeholder, onChange }) {
  return (
    <input
      type="search"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete="on"
      className="w-full h-10 mb-5 p-3 hover-theme placeholder-neutral-400 shadow-style"
    />
  );
}
