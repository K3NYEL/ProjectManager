/**
 * Configuración de logging para desarrollo
 */

const isDev = import.meta.env.DEV;

export const logger = {
  /**
   * Log de información
   * @param {string} message
   * @param {any} data
   */
  info: (message, data) => {
    if (isDev) {
      console.info(`[INFO] ${message}`, data);
    }
  },

  /**
   * Log de error
   * @param {string} message
   * @param {Error} error
   */
  error: (message, error) => {
    console.error(`[ERROR] ${message}`, error);
  },

  /**
   * Log de advertencia
   * @param {string} message
   * @param {any} data
   */
  warn: (message, data) => {
    console.warn(`[WARN] ${message}`, data);
  },

  /**
   * Log de depuración
   * @param {string} message
   * @param {any} data
   */
  debug: (message, data) => {
    if (isDev) {
      console.debug(`[DEBUG] ${message}`, data);
    }
  },
};

/**
 * Manejador de errores global
 */
export const handleError = (error, context = '') => {
  logger.error(`Error en ${context}`, error);
  // Aquí puedes agregar envío a servicio de logging
};
