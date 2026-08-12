import NavBar from "../components/navbar";
import Container from "../components/Container";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <main className="main flex justify-center h-full w-full items-center">
          <div className="flex flex-col w-370 h-155 border-2 border-gray-50 gap-2 p-5 overflow-y-auto">
            <h1 className="text-2xl font-bold text-gray-500">Descripcion</h1>
            <Card>
              <p className="text-gray-500">
                Este es un proyecto de prueba para la creación de un gestor de
                proyectos, el cual tiene como objetivo principal la gestión de
                tareas y proyectos de manera eficiente y organizada. El proyecto
                está desarrollado utilizando React, Tailwind CSS y otras
                tecnologías modernas para garantizar una experiencia de usuario
                fluida y atractiva.
              </p>
            </Card>
          </div>
        </main>
      </Container>
    </>
  );
}

export default Home;
