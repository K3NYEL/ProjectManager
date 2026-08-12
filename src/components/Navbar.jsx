import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav className="nav flex justify-between px-5 h-17 w-full items-center bg-black flex-wrap sticky top-0 shadow-gray-400-md">
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
        <NavLink className="docs text-xl font-semibold p-2 border-2 transition-all hover:text-green-600"  to="/documentation">Docs</NavLink>
        <NavLink className="home text-xl font-semibold p-2 border-2 transition-all hover:text-green-600" to="/home">Home</NavLink>

      </div>
    </nav>
  );
}

export default NavBar;
