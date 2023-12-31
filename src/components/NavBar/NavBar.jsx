import { NavLink } from "react-router-dom"

import styles from "./NavBar.module.css"
import { useAuthValue } from "../../context/AuthContext"
import { useAuthentication } from "../../hooks/useAuthentication";


export default function NavBar() {
  const { user } = useAuthValue();

  const {LogOut} = useAuthentication()
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
            Home
          </NavLink>
        </li>
        {!user &&
          <>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : '')}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : '')}>
                Register
              </NavLink>
            </li>
          </>}
        {user &&
          <>
            <li>
              <NavLink to="/posts/create" className={({ isActive }) => (isActive ? styles.active : '')}>
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : '')}>
                DashBoard
              </NavLink>
            </li>
          </>}
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>
            About
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={LogOut}>
              Sair
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}
