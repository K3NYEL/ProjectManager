import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants/routes';

/**
 * Side menu component
 * @param {boolean} isOpen - Menu visibility state
 * @param {function} onClose - Callback to close menu
 */
function Menu({ isOpen = false, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Menu */}
      <div
        className={`fixed left-0 top-0 h-full w-64 lg:w-80 bg-gray-900 text-white shadow-lg transform transition-transform z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 lg:p-8">
          <button
            onClick={onClose}
            className="float-right text-2xl lg:text-3xl font-bold hover:text-gray-300"
            aria-label="Cerrar menú"
          >
            ✕
          </button>
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 lg:mb-10 clear-both">Menú</h2>

          <nav className="space-y-4 lg:space-y-5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-4 lg:px-5 py-2 lg:py-3 rounded text-base lg:text-lg transition-colors ${
                    isActive
                      ? 'bg-green-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default Menu;