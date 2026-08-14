import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import { NAV_LINKS, ROUTES } from '../constants/routes';
import { APP_NAME } from '../constants/ui';

/**
 * Navigation bar component
 * @param {function} onMenuToggle - Callback when menu toggle is clicked
 */
function NavBar({ onMenuToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle?.();
  };

  return (
    <>
      <nav className="sticky top-0 z-30 flex justify-between px-5 h-17 w-full items-center bg-black shadow-lg">
        {/* Logo and Menu Button */}
        <div className="text-green-500 flex items-center gap-3">
          <button
            className="p-2 hover:bg-gray-800 rounded transition-colors"
            type="button"
            aria-label="Abrir menú"
            onClick={handleMenuToggle}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <NavLink
            to={ROUTES.HOME}
            className="text-xl font-bold hover:text-green-400 transition-colors"
          >
            {APP_NAME}
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex text-white items-center gap-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold px-4 py-2 rounded transition-colors ${
                  isActive
                    ? 'border-2 border-green-600 bg-green-600 text-white'
                    : 'border-2 border-white hover:text-green-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Side Menu */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

NavBar.propTypes = {
  onMenuToggle: PropTypes.func,
};

export default NavBar;
