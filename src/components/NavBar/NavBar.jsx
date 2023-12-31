import { NavLink } from "react-router-dom"

import styles from "./NavBar.module.css"


export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">
          Mini <span>Blog</span>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
