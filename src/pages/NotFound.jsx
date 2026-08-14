import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Container from '../components/Container';

/**
 * 404 Not Found page
 * Displayed when user navigates to an invalid route
 */
function NotFound() {
  return (
    <>
      <NavBar />
      <Container>
        <div className="flex flex-col items-center justify-center gap-8 lg:gap-12 text-center px-4">
          <div>
            <h1 className="text-7xl lg:text-8xl font-bold text-gray-800 mb-3 lg:mb-4">404</h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-600 mb-4 lg:mb-5">
              Página no encontrada
            </h2>
            <p className="text-lg lg:text-xl text-gray-500 mb-8 lg:mb-10 max-w-2xl">
              La página que buscas no existe o ha sido movida.
            </p>
          </div>
          <Link
            to="/"
            className="px-7 lg:px-10 py-3 lg:py-4 bg-green-600 text-white text-lg lg:text-xl font-semibold rounded hover:bg-green-700 transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
      </Container>
    </>
  );
}

export default NotFound;
