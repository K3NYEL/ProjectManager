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
git clone <repository-url>
cd ProjectManager

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

## 📁 Estructura del Proyecto

```
ProjectManager/
├── public/                 # Archivos públicos
│   └── output.css         # Estilos compilados
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Button.jsx     # Botón personalizable
│   │   ├── Card.jsx       # Tarjeta de contenido
│   │   ├── Container.jsx  # Contenedor principal
│   │   ├── Menu.jsx       # Menú lateral
│   │   ├── Navbar.jsx     # Barra de navegación
│   │   └── ErrorBoundary.jsx  # Límite de errores
│   ├── pages/             # Páginas principales
│   │   ├── Home.jsx       # Página de inicio
│   │   ├── Documentation.jsx  # Página de documentación
│   │   └── NotFound.jsx   # Página 404
│   ├── constants/         # Constantes y configuración
│   │   ├── routes.js      # Rutas de la aplicación
│   │   └── ui.js          # Constantes de UI
│   ├── assets/            # Recursos (imágenes, etc)
│   ├── App.jsx            # Componente raíz
│   ├── main.jsx           # Punto de entrada
│   ├── index.css          # Estilos globales
│   └── App.css            # Estilos de la aplicación
├── vite.config.js         # Configuración de Vite
├── eslint.config.js       # Configuración de ESLint
├── package.json           # Dependencias y scripts
├── tailwind.config.js     # Configuración de Tailwind
└── README.md             # Este archivo
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

## Componentes Principales

### Button
```jsx
<Button 
  variant="primary" 
  size="large" 
  onClick={handleClick}
>
  Click me!
</Button>
```
Props: `variant` (primary/secondary/default), `size` (small/medium/large), `disabled`, `onClick`

### Card
```jsx
<Card variant="primary">
  <p>Contenido de la tarjeta</p>
</Card>
```
Props: `variant` (default/primary/success), `children`, `className`

### Container
```jsx
<Container>
  <YourContent />
</Container>
```
Props: `children`, `className`

### NavBar
Barra de navegación con menú interactivo

### Menu
Menú lateral desplegable con navegación

## Personalización

### Modificar Rutas
Edita [src/constants/routes.js](src/constants/routes.js):
```javascript
export const ROUTES = {
  HOME: '/',
  DOCUMENTATION: '/documentation',
  // Agrega más rutas aquí
};
```

### Personalizar Estilos
Los estilos están centralizados en [src/constants/ui.js](src/constants/ui.js):
```javascript
export const BUTTON_VARIANTS = {
  primary: 'bg-green-600 text-white hover:bg-green-700',
  // Personaliza según tus necesidades
};
```

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
