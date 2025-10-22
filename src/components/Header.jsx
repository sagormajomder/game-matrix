import { Link, NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import HeaderLogo from "../assets/logo.png";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { user, signOutUser, isLoading, setIsLoading } = useAuth();

  const navigate = useNavigate();

  function handleLogOut() {
    signOutUser()
      .then(() => {
        toast.success("User logout successful.");
        setIsLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }

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
      {!user && (
        <>
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
      )}
      {user && (
        <div className="mt-2 flex items-center gap-3 sm:mt-0">
          <Link to="/profile" className="overflow-hidden rounded-full p-0">
            <img
              className="h-8 w-8 rounded-full object-cover"
              src={user?.photoURL}
              alt="User Profile Picture"
            />
          </Link>
          <button
            className="bg-primary text-base-100 w-3/4 cursor-pointer rounded-sm px-3 py-1.5 font-semibold sm:w-auto"
            onClick={handleLogOut}
          >
            LogOut
          </button>
        </div>
      )}
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
        <div className="navbar-end hidden items-center sm:flex">
          <ul className="menu menu-horizontal items-center gap-1 px-1">
            {links}
          </ul>
        </div>
      </nav>
    </header>
  );
}
