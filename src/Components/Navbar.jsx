import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthContexts/AuthContext";
import Container from "../Components/Container";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch(() => {});
  };
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : "text-black"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/games"}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : "text-black"
          }
        >
          Games
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/apps"}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : "text-black"
          }
        >
          Apps
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to={"/installed"}
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : "text-black"
              }
            >
              Installed
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/profile"}
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : "text-black"
              }
            >
              Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-base-200 shadow-md">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link to={"/"} className="btn btn-ghost text-xl">
              Best Store
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                {user.photoURL ? (
                  <>
                    <Link to={'/profile'}>
                    <div className="avatar">
                      <div className="w-10 rounded-full mx-2">
                        <img src={user.photoURL} />
                      </div>
                    </div>
                    </Link>
                  </>
                ) : null}
                <Link to={"/profile"} className="mr-4 font-semibold">
                  {user.displayName || user.email}
                </Link>
                <button onClick={handleSignOut} className="btn">
                  Sign out
                </button>
              </>
            ) : (
              <Link to={"/login"} className="btn">
                Sign in
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
