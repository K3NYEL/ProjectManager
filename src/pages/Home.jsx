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
        <div className="flex flex-col w-full max-w-2xl gap-6 p-6 overflow-y-auto">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              ProjectManager
            </h1>
            <p className="text-gray-600">
              Un gestor de proyectos moderno y eficiente
            </p>
          </div>

          <Card variant="primary">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Descripción
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Este es un proyecto de prueba para la creación de un gestor de
              proyectos, el cual tiene como objetivo principal la gestión de
              tareas y proyectos de manera eficiente y organizada. El proyecto
              está desarrollado utilizando React, Tailwind CSS y otras
              tecnologías modernas para garantizar una experiencia de usuario
              fluida y atractiva.
            </p>
          </Card>

          <Card variant="success">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Características
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li> - Interfaz moderna y responsive</li>
              <li> - Navegación fluida con React Router</li>
              <li> - Estilos con Tailwind CSS</li>
              <li> - Componentes reutilizables</li>
              <li> - Manejo de errores con Error Boundary</li>
              <li> - Menú lateral interactivo</li>
            </ul>
          </Card>

          <div className="flex gap-4 pt-4">
            <Button
              variant="primary"
              size="large"
              onClick={handleDemoClick}
            >
              🚀 Explorar Proyecto
            </Button>
            <Button
              variant="secondary"
              size="large"
              onClick={() => window.open('https://github.com')}
            >
              📖 Documentación
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
