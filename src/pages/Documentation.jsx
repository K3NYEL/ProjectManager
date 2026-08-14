import NavBar from '../components/Navbar';
import Container from '../components/Container';
import Card from '../components/Card';

/**
 * Documentation page
 * Contains project documentation and guides
 */
function Documentation() {
  return (
    <>
      <NavBar />
      <Container>
        <div className="flex flex-col w-full max-w-6xl lg:max-w-7xl gap-8 lg:gap-10 p-6 lg:p-10">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-3 lg:mb-4">
              📚 Documentación
            </h1>
            <p className="text-lg lg:text-xl text-gray-600">
              Guía completa del proyecto ProjectManager
            </p>
          </div>

          <Card variant="primary">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-5">
              🏗️ Estructura del Proyecto
            </h2>
            <pre className="bg-gray-900 text-green-400 p-6 lg:p-8 rounded overflow-x-auto text-base lg:text-lg">
{`src/
├── components/       # Componentes reutilizables
├── pages/           # Páginas principales
├── constants/       # Constantes y configuración
├── assets/          # Imágenes y recursos
├── App.jsx          # Componente principal
└── main.jsx         # Punto de entrada`}
            </pre>
          </Card>

          <Card variant="success">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-5">
              🛠️ Tecnologías Utilizadas
            </h2>
            <div className="grid grid-cols-2 gap-6 lg:gap-8 text-base lg:text-lg text-gray-700">
              <div>
                <strong>Frontend:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• React 19.2</li>
                  <li>• React Router 7</li>
                  <li>• Tailwind CSS 4</li>
                  <li>• Vite 8</li>
                </ul>
              </div>
              <div>
                <strong>Desarrollo:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• ESLint</li>
                  <li>• PropTypes</li>
                  <li>• Node.js</li>
                  <li>• npm</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-5">
              🚀 Comandos Disponibles
            </h2>
            <div className="space-y-4 lg:space-y-5 text-base lg:text-lg text-gray-700">
              <div className="bg-gray-100 p-4 lg:p-6 rounded font-mono text-base lg:text-lg">
                <strong>npm run dev</strong> - Inicia el servidor de desarrollo
              </div>
              <div className="bg-gray-100 p-4 lg:p-6 rounded font-mono text-base lg:text-lg">
                <strong>npm run build</strong> - Compila el proyecto para
                producción
              </div>
              <div className="bg-gray-100 p-4 lg:p-6 rounded font-mono text-base lg:text-lg">
                <strong>npm run lint</strong> - Ejecuta ESLint para verificar
                el código
              </div>
              <div className="bg-gray-100 p-4 lg:p-6 rounded font-mono text-base lg:text-lg">
                <strong>npm run preview</strong> - Previsualiza la compilación
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Documentation;
