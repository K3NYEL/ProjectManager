import "./assets/favicon.ico";
import Button from "./components/button";
import Card from "./components/card";

function App() {
  return (
    <>
      <div
        id="center"
        className="flex flex-col h-screen items-center justify-center"
      >
        <nav className="nav flex justify-between px-5 h-17 w-full items-center bg-black">
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
          <div className="text-white flex items-center gap-2 bg-blue-300 w-100 justify-center">
            <Button />
            <a
              href="#"
              className="docs text-xl font-semibold p-2 border-2 transition-all hover:text-green-600"
            >
              Docs
            </a>
          </div>
        </nav>
        <main className="main flex justify-center h-full w-full items-center">
          <div className="flex flex-col w-370 h-155 border-2 border-gray-50 gap-2 p-5 overflow-y-auto">
            <h1 className="text-2xl font-bold text-gray-500">Descripcion</h1>
            <Card>
              <p className="text-gray-500">
                Este es un proyecto de prueba para la creación de un gestor de proyectos, el cual tiene como objetivo principal la gestión de tareas y proyectos de manera eficiente y organizada. El proyecto está desarrollado utilizando React, Tailwind CSS y otras tecnologías modernas para garantizar una experiencia de usuario fluida y atractiva.
              </p>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
