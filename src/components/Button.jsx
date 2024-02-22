export default function Button({
  value,
  onClick,
  id,
  active
}) {

  let buttonProp = "p-2 border-style rounded-md mb-5"

  return (
    <input
      type="button"
      id={id}
      value={value}
      onClick={onClick}
      className={active ? `${buttonProp} text-neutral-950 bg-neutral-50 hover:bg-neutral-200` : `${buttonProp} text-neutral-400 bg-neutral-900 hover:text-neutral-50 hover:bg-neutral-950 shadow-style`} />
  )

}
