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
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div>
            <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              Página no encontrada
            </h2>
            <p className="text-gray-500 mb-8 max-w-md">
              La página que buscas no existe o ha sido movida.
            </p>
          </div>
          <Link
            to="/"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
      </Container>
    </>
  );
}

export default NotFound;
