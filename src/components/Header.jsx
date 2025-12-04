import { motion } from "motion/react";
import { BiLogIn } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { Link, NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import HeaderLogo from "../assets/logo.png";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { user, signOutUser, isLoading, setIsLoading } = useAuth();

  const navigate = useNavigate();

  function handleLoginLink() {
    navigate("/auth/login");
  }

  function handleLogOut() {
    signOutUser()
      .then(() => {
        toast.success("User logout successful.");
        navigate("/");
        setIsLoading(false);
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
      <li className={user ? "sm:mr-1" : ""}>
        <NavLink className="rounded-sm" to="/games">
          Games
        </NavLink>
      </li>
      <li className={user ? "sm:mr-1" : ""}>
        <NavLink className="rounded-sm" to="/about">
          About Us
        </NavLink>
      </li>
      <li className={user ? "sm:mr-1" : ""}>
        <NavLink className="rounded-sm" to="/contact">
          Contact Us
        </NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink className="rounded-sm" to="/auth/register">
              Register
            </NavLink>
          </li>
          <li className="inline-flex min-[25rem]:hidden min-[53.125rem]:inline-flex">
            <motion.button
              onClick={handleLoginLink}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary text-base-100 h-auto rounded-sm px-3 py-1 font-semibold"
            >
              <span className="flex items-center justify-center gap-1">
                <BiLogIn /> Login
              </span>
            </motion.button>
          </li>
        </>
      )}
      {user && (
        <div className="mt-2 ml-2 flex items-center gap-2.5 min-[25rem]:hidden min-[53.125rem]:mt-0 min-[53.125rem]:ml-0 min-[53.125rem]:flex min-[53.125rem]:gap-4">
          {isLoading ? (
            <span className="loading loading-ring loading-xl"></span>
          ) : (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/profile" className="overflow-hidden rounded-full p-0">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src={user?.photoURL}
                  alt="User Profile Picture"
                />
              </Link>
            </motion.button>
          )}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-base-100 flex w-3/4 cursor-pointer items-center justify-center gap-1 rounded-sm px-3 py-1.5 font-semibold hover:bg-[#34abe1] sm:w-auto"
            onClick={handleLogOut}
          >
            <TbLogout />
            LogOut
          </motion.button>
        </div>
      )}
    </>
  );

  return (
    <header className="bg-base-300 sticky top-0 z-100 border border-gray-800">
      <nav className="navbar mx-auto max-w-7xl px-4">
        {/* Navbar Start */}
        <div className="navbar-start basis-full min-[18.75rem]:basis-auto">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost min-[53.125rem]:hidden"
            >
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
              className="menu menu-sm dropdown-content bg-base-300 z-10 mt-3 w-52 rounded-md border border-gray-800 p-2"
            >
              {links}
            </ul>
          </div>
          <Link className="flex items-center gap-0.5" to="/">
            <img className="h-8 -rotate-30 sm:h-12" src={HeaderLogo} alt="" />
            <span className="text-xl font-bold sm:text-2xl">
              Game<span className="text-primary">Matrix</span>{" "}
            </span>
          </Link>
        </div>
        {/* Navbar End */}
        <div className="navbar-end hidden basis-[80%] items-center min-[53.125rem]:flex">
          <ul className="menu menu-horizontal items-center gap-1 px-1">
            {links}
          </ul>
        </div>

        {!user && (
          <div className="navbar-end hidden items-center min-[25rem]:flex min-[53.125rem]:hidden">
            <motion.button
              onClick={handleLoginLink}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary text-base-100 h-auto rounded-sm px-3 py-1 font-semibold"
            >
              <span className="flex items-center justify-center gap-1">
                <BiLogIn /> Login
              </span>
            </motion.button>
          </div>
        )}

        {user && (
          <div className="navbar-end hidden items-center min-[25rem]:flex min-[53.125rem]:hidden">
            <div className="flex items-center gap-4">
              {isLoading ? (
                <span className="loading loading-ring loading-xl"></span>
              ) : (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/profile"
                    className="overflow-hidden rounded-full p-0"
                  >
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src={user?.photoURL}
                      alt="User Profile Picture"
                    />
                  </Link>
                </motion.button>
              )}
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-base-100 flex w-3/4 cursor-pointer items-center justify-center gap-1 rounded-sm px-3 py-1 font-semibold hover:bg-[#34abe1] sm:w-auto"
                onClick={handleLogOut}
              >
                <TbLogout />
                LogOut
              </motion.button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
