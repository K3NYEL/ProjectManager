import NavBar from '../components/Navbar';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';

/**
 * Home page
 * Landing page with project description
 */
function Home() {
  const handleDemoClick = () => {
    console.log('Demo button clicked');
  };

  return (
    <>
      <NavBar />
      <Container>
        <div className="flex flex-col w-full max-w-5xl lg:max-w-6xl gap-8 lg:gap-10 p-6 lg:p-10 overflow-y-auto">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-3 lg:mb-4">
              ProjectManager
            </h1>
            <p className="text-lg lg:text-xl text-gray-600">
              Un gestor de proyectos moderno y eficiente
            </p>
          </div>

          <Card variant="primary">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-5">
              Descripción
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Este es un proyecto de prueba para la creación de un gestor de
              proyectos, el cual tiene como objetivo principal la gestión de
              tareas y proyectos de manera eficiente y organizada. El proyecto
              está desarrollado utilizando React, Tailwind CSS y otras
              tecnologías modernas para garantizar una experiencia de usuario
              fluida y atractiva.
            </p>
          </Card>

          <Card variant="success">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-5">
              Características
            </h2>
            <ul className="space-y-3 lg:space-y-4 text-lg lg:text-xl text-gray-700">
              <li> - Interfaz moderna y responsive</li>
              <li> - Navegación fluida con React Router</li>
              <li> - Estilos con Tailwind CSS</li>
              <li> - Componentes reutilizables</li>
              <li> - Manejo de errores con Error Boundary</li>
              <li> - Menú lateral interactivo</li>
            </ul>
          </Card>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 pt-6 lg:pt-8">
            <Button
              variant="primary"
              size="large"
              onClick={handleDemoClick}
            >
              Explorar Proyecto
            </Button>
            <Button
              variant="secondary"
              size="large"
              onClick={() => window.open('https://github.com/K3NYEL/ProjectManager')}
            >
              Documentación
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
