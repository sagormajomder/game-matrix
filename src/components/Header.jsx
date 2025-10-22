import { Link, NavLink } from "react-router";
import HeaderLogo from "../assets/logo.png";

export default function Header() {
  const links = (
    <>
      <li>
        <NavLink className="rounded-sm" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-sm" to="/games">
          Games
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-sm" to="/register">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          // className="bg-primary text-base-100 rounded-sm px-3 py-1.5 font-semibold"
          className="rounded-sm"
          to="/login"
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <header className="bg-base-300 shadow-sm">
      <nav className="navbar mx-auto max-w-7xl px-4">
        <div className="navbar-start basis-full sm:basis-1/2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-300 z-1 mt-3 w-52 rounded-md p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="flex items-center gap-0.5" to="/">
            <img className="h-12 -rotate-30" src={HeaderLogo} alt="" />
            <span className="text-2xl font-bold">
              Game<span className="text-primary">Matrix</span>{" "}
            </span>
          </Link>
        </div>
        <div className="navbar-end hidden sm:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </nav>
    </header>
  );
}
