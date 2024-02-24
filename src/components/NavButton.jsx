import { NavLink } from "react-router-dom";

export default function Nav({ link, name }) {
  return (
    <NavLink
      to={link}>
      {({ isActive }) => (
        <div
          className={isActive
            ? "p-2 border-style rounded-md text-neutral-950 bg-neutral-50 hover:text-neutral-900 shadow-styleext-neutral-50"
            : "p-2 border-style rounded-md text-neutral-400 bg-neutral-900 hover:text-neutral-50 hover:bg-neutral-950 shadow-style"
          }>
          {name}
        </div>
      )}
    </NavLink>
  )
}
