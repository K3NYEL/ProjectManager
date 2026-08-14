/**
 * Application routes constants
 * Centralized route management for better maintainability
 */

export const ROUTES = {
  HOME: '/',
  DOCUMENTATION: '/documentation',
  NOT_FOUND: '*',
};

export const NAV_LINKS = [
  { path: ROUTES.DOCUMENTATION, label: 'Documentación' },
  { path: ROUTES.HOME, label: 'Inicio' },
];
