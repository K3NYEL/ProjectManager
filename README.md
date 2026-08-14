# GabetDisk

Este es un proyecto personal(Por el momento),

## Características

## Inicio Rápido

### Requisitos

- Node.js 14+
- npm 6+ o yarn 1.22+

### Instalación

```bash
# Clonar el repositorio
git clone <https://github.com/K3NYEL/ProjectManager.git>
cd GabetDisk

# Instalar dependencias
npm install
```

### Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo (http://localhost:5173)

# Producción
npm run build        # Compila para producción
npm run preview      # Previsualiza la compilación

# Calidad de Código
npm run lint         # Ejecuta ESLint
```

## Tecnologías Utilizadas

### Frontend

- **React** 19.2.8 - Biblioteca UI
- **React Router DOM** 7.18.2 - Enrutamiento
- **Tailwind CSS** 4.3.3 - Estilos utility-first
- **Vite** 8.2.0 - Bundler moderno

### Desarrollo

- **ESLint** 10.8.0 - Linter de código
- **PropTypes** 15.x - Validación de tipos
- **@vitejs/plugin-react** 6.0.4 - Plugin de React para Vite

### Personalizar Estilos
Los estilos están centralizados en [src/constants/ui.js](src/constants/ui.js):
```javascript
export const BUTTON_VARIANTS = {
  primary: 'bg-green-600 text-white hover:bg-green-700',
  // Personaliza según tus necesidades
};
````

## Mejoras Futuras

- [ ] Autenticación de usuarios
- [ ] Base de datos (Firebase/MongoDB)
- [ ] Gestión de tareas
- [ ] Sistema de notificaciones
- [ ] Modo oscuro/claro
- [ ] Tests unitarios
- [ ] TypeScript
- [ ] PWA

## 🐛 Reportar Problemas

Si encuentras un error, por favor:

1. Verifica que sea un problema real
2. Crea un issue con descripción detallada
3. Incluye pasos para reproducir

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 👤 Autor

[K3NYEL](https://github.com/K3NYEL/ProjectManager.git)

## Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

**Última actualización:** 2026-08-13
