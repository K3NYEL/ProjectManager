import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav className="nav flex justify-between px-5 h-17 w-full items-center bg-black flex-wrap">
      <div className="text-green-500 flex items-center gap-1">
        <button
          className="button text-2xl font-bold p-3 cursor-pointer"
          type="button"
          aria-label="Abrir menú"
        >
          <img className="h-6 w-6 bg-white" src="menu.png" alt="" />
        </button>
        <span className="text-2xl font-bold">Menu</span>
      </div>
      <div className="text-white flex items-center gap-2  w-100 justify-center">
        <NavLink to="/documentation">Docs</NavLink>
        <a
          href="/Documentation"
          className="docs text-xl font-semibold p-2 border-2 transition-all hover:text-green-600"
        >
          Docs
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
