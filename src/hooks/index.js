import { useState, useEffect } from 'react';

/**
 * Hook personalizado para gestionar estado del menú
 * @returns {Object} {isMenuOpen, toggleMenu, closeMenu}
 */
export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const openMenu = () => setIsMenuOpen(true);

  return { isMenuOpen, toggleMenu, closeMenu, openMenu };
};

/**
 * Hook para detectar si estamos en un dispositivo móvil
 * @returns {boolean}
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

/**
 * Hook para manejar efectos de scroll
 * @param {number} threshold - Píxeles antes de activar el callback
 * @param {function} callback - Función a ejecutar
 */
export const useScroll = (threshold = 0, callback) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        callback?.();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, callback]);
};
