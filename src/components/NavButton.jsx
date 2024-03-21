import { NavLink } from "react-router-dom"

export default function Nav({ link, name, color }) {
  let bgButton = "bg-neutral-900"

  if (color) {
    bgButton = color
  }

  return (
    <NavLink
      to={link}>
      {({ isActive }) => (
        <div
          className={isActive
            ? "p-2 border-style rounded-md text-neutral-950 bg-neutral-50 hover:text-neutral-900 shadow-styleext-neutral-50 font-semibold"
            : `${bgButton} p-2 border-style rounded-md text-neutral-400 hover:text-neutral-50 hover:bg-neutral-950 hover:ring-2 hover:ring-neutral-700 shadow-style`
          }>
          {name}
        </div>
      )}
    </NavLink>
  )
}
