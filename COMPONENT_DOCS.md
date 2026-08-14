# 📖 Documentación de Componentes

## Guía de Uso de Componentes Reutilizables

### Button Component

Botón personalizable con múltiples variantes y tamaños.

#### Props

| Prop | Tipo | Valores | Descripción |
|------|------|---------|-------------|
| `children` | ReactNode | - | Contenido del botón |
| `variant` | string | `'primary'`, `'secondary'`, `'default'` | Estilo del botón |
| `size` | string | `'small'`, `'medium'`, `'large'` | Tamaño del botón |
| `onClick` | function | - | Manejador de click |
| `disabled` | boolean | `true`, `false` | Estado deshabilitado |
| `className` | string | - | Clases CSS adicionales |
| `type` | string | `'button'`, `'submit'`, `'reset'` | Tipo de botón HTML |

#### Ejemplos

```jsx
// Botón primario
<Button variant="primary" onClick={() => console.log('clicked')}>
  Guardar
</Button>

// Botón grande secundario
<Button variant="secondary" size="large">
  Cancelar
</Button>

// Botón deshabilitado
<Button disabled>
  Deshabilitado
</Button>

// Botón pequeño con clases adicionales
<Button size="small" className="ml-2">
  Ver más
</Button>
```

---

### Card Component

Componente para mostrar contenido en una tarjeta.

#### Props

| Prop | Tipo | Valores | Descripción |
|------|------|---------|-------------|
| `children` | ReactNode | - | Contenido de la tarjeta |
| `variant` | string | `'default'`, `'primary'`, `'success'` | Estilo visual |
| `className` | string | - | Clases CSS adicionales |

#### Ejemplos

```jsx
// Tarjeta por defecto
<Card>
  <p>Contenido normal</p>
</Card>

// Tarjeta primaria
<Card variant="primary">
  <h3>Título importante</h3>
  <p>Contenido destacado</p>
</Card>

// Tarjeta de éxito
<Card variant="success">
  ✓ Operación completada exitosamente
</Card>
```

---

### Container Component

Contenedor principal para páginas con alineación centrada.

#### Props

| Prop | Tipo | Descripción |
|------|------|------------|
| `children` | ReactNode | Contenido del contenedor |
| `className` | string | Clases CSS adicionales |

#### Ejemplos

```jsx
// Uso básico
<Container>
  <h1>Mi Página</h1>
  <p>Contenido centrado</p>
</Container>

// Con clases personalizadas
<Container className="bg-gray-100">
  <Card>Contenido con fondo personalizado</Card>
</Container>
```

---

### NavBar Component

Barra de navegación con menú interactivo.

#### Props

| Prop | Tipo | Descripción |
|------|------|------------|
| `onMenuToggle` | function | Callback cuando se abre/cierra el menú |

#### Características

- Logo clickeable que lleva al inicio
- Links de navegación responsivos
- Menú lateral en dispositivos móviles
- Indicador activo de ruta actual

#### Ejemplo

```jsx
<NavBar onMenuToggle={() => console.log('menu toggled')} />
```

---

### Menu Component

Menú lateral desplegable.

#### Props

| Prop | Tipo | Descripción |
|------|------|------------|
| `isOpen` | boolean | Estado del menú (abierto/cerrado) |
| `onClose` | function | Callback para cerrar el menú |

#### Características

- Overlay oscuro de fondo
- Transición suave de apertura/cierre
- Enlaces de navegación automáticos
- Indicador activo de ruta
- Botón de cierre

#### Ejemplo

```jsx
const [menuOpen, setMenuOpen] = useState(false);

<Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
```

---

### ErrorBoundary Component

Componente para capturar errores en el árbol de componentes.

#### Props

| Prop | Tipo | Descripción |
|------|------|------------|
| `children` | ReactNode | Componentes a proteger |

#### Características

- Captura errores de JavaScript
- Muestra mensaje de error amigable
- Botón para volver al inicio
- Logging de errores en consola

#### Ejemplo

```jsx
<ErrorBoundary>
  <YourComponent />
  <AnotherComponent />
</ErrorBoundary>
```

---

## Patrones Comunes

### Estructura de una Página

```jsx
import NavBar from '../components/Navbar';
import Container from '../components/Container';
import Card from '../components/Card';

function MyPage() {
  return (
    <>
      <NavBar />
      <Container>
        <Card variant="primary">
          <h1>Mi Página</h1>
          <p>Contenido aquí</p>
        </Card>
      </Container>
    </>
  );
}
```

### Uso de Múltiples Botones

```jsx
<div className="flex gap-4">
  <Button variant="primary" onClick={handleSave}>
    Guardar
  </Button>
  <Button variant="secondary" onClick={handleCancel}>
    Cancelar
  </Button>
</div>
```

---

## Mejores Prácticas

1. **Reutilizar Componentes**: Usa componentes existentes en lugar de crear nuevos
2. **Propiedades Claras**: Define propTypes para cada componente
3. **Nombres Significativos**: Usa nombres de props descriptivos
4. **Documentación**: Documenta componentes complejos con comentarios JSDoc
5. **Consistencia**: Mantén consistencia en estilos y estructura
6. **Accesibilidad**: Agrega labels y aria-labels donde sea necesario

---

**Última actualización:** 2026-08-13
