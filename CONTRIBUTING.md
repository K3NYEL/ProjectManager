# Guía de Contribución

Gracias por tu interés en contribuir a ProjectManager. Esta guía te ayudará a entender nuestros procesos y estándares.

## Código de Conducta

Por favor, sé respetuoso y profesional en todas las interacciones.

## 🐛 Reportar Bugs

### Antes de Reportar
1. Verifica si el bug ya ha sido reportado
2. Intenta reproducir el problema en la última versión
3. Recopila información del sistema (navegador, versión de Node, etc.)

### Cómo Reportar
1. Crea un nuevo Issue
2. Usa un título claro y descriptivo
3. Incluye pasos para reproducir
4. Incluye ejemplos específicos
5. Describe el comportamiento observado vs el esperado
6. Incluye capturas de pantalla si es relevante

## Sugerir Mejoras

1. Usa un título claro y descriptivo
2. Proporciona descripción detallada de la mejora
3. Incluye ejemplos de cómo funcionaría
4. Explica por qué sería útil
5. Enumera alternativas consideradas

## Proceso de Desarrollo

### Configuración Local

```bash
# 1. Fork el repositorio
# 2. Clona tu fork
git clone https://github.com/tu-usuario/ProjectManager.git

# 3. Agrega upstream
git remote add upstream https://github.com/original/ProjectManager.git

# 4. Instala dependencias
npm install
```

### Crear una Feature Branch

```bash
# 1. Actualiza tu rama main
git fetch upstream
git checkout main
git merge upstream/main

# 2. Crea una rama para tu feature
git checkout -b feature/nombre-descriptivo
```

### Hacer Cambios

1. Sigue los estándares de código (ver abajo)
2. Haz commits pequeños y bien descritos
3. Prueba tus cambios localmente
4. Ejecuta linting: `npm run lint`

### Estándares de Código

#### JavaScript/React
```javascript
// ✓ Bueno
function MyComponent({ prop1, prop2 }) {
  const handleClick = () => {
    // lógica aquí
  };

  return (
    <div>
      {/* JSX aquí */}
    </div>
  );
}

// ✗ Malo
function my_component(props) {
  function handleClick() {
    // lógica
  }
  return <div>{/* JSX */}</div>;
}
```

#### Nombres
- Componentes: `PascalCase` (e.g., `MyButton`)
- Funciones/variables: `camelCase` (e.g., `handleClick`, `isValid`)
- Constantes: `UPPER_SNAKE_CASE` (e.g., `API_URL`)

#### Estructura de Carpetas
```
src/
├── components/      # Solo componentes React
├── pages/          # Páginas principales
├── constants/      # Constantes
├── hooks/          # Custom hooks
├── utils/          # Funciones utilitarias
└── styles/         # Estilos CSS
```

#### PropTypes y Documentación
```javascript
import PropTypes from 'prop-types';

/**
 * Descripción clara del componente
 * @param {string} title - Descripción del prop
 * @param {function} onClick - Manejador de click
 */
function MyComponent({ title, onClick }) {
  return <button onClick={onClick}>{title}</button>;
}

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MyComponent;
```

### Convenciones de Commits

Usa mensajes de commit claros y descriptivos:

```
[type] descripción breve

tipo: feat, fix, docs, style, refactor, test, chore

Ejemplos:
- [feat] agregar componente Button reutilizable
- [fix] corregir error en NavBar navigation
- [docs] actualizar README con instrucciones
- [refactor] mejorar lógica de Menu component
- [style] aplicar estilos Tailwind consistentes
```

### Validación Antes de Push

```bash
# 1. Ejecuta linting
npm run lint

# 2. Prueba la aplicación
npm run dev

# 3. Verifica que la build funcione
npm run build
```

## 📤 Enviar un Pull Request

1. Push a tu rama
   ```bash
   git push origin feature/nombre-descriptivo
   ```

2. Abre un Pull Request en GitHub

3. Completa la plantilla de PR con:
   - Descripción clara de cambios
   - Referencia a issues relacionados
   - Capturas de pantalla si es relevante
   - Checklist de validación

### Plantilla de PR

```markdown
## Descripción
Describe los cambios principales

## Tipo de Cambio
- [ ] Bug fix
- [ ] Nueva feature
- [ ] Mejora
- [ ] Cambio de breaking

## Cómo se Probó
Describe cómo validaste los cambios

## Cambios en Dependencias
- [ ] Hay cambios en package.json
- [ ] Requiere actualización de documentación

## Checklist
- [ ] He seguido los estándares de código
- [ ] He actualizado la documentación relevante
- [ ] Mis cambios no generan nuevas advertencias
- [ ] He probado los cambios localmente
```

## Revisión de Código

Los mantenedores revisarán tu PR. Por favor:

1. Responde a los comentarios de forma constructiva
2. Haz cambios solicitados en commits adicionales
3. Sé paciente - la revisión lleva tiempo
4. Aprende del feedback

## Recursos Útiles

- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vitejs.dev)

## Áreas de Contribución Bienvenidas

- [ ] Nuevos componentes útiles
- [ ] Mejoras de rendimiento
- [ ] Documentación
- [ ] Tests
- [ ] Corrección de bugs
- [ ] Ejemplos de uso
- [ ] Accesibilidad (a11y)

## ❓ Preguntas

Si tienes dudas:
1. Revisa las issues existentes
2. Abre una Issue con la etiqueta `question`
3. Contacta a los mantenedores

---

¡Gracias por contribuir! 🙌

**Nota**: By participating in this project, you agree to abide by our Code of Conduct.
